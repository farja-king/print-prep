// In-house AI background remover for Print Prep's "AI Model Framework (Photos)" engine.
//
// Runs the ISNet "general use" model (Apache-2.0, see NOTICE-AI.md) locally with onnxruntime-web (MIT).
// Everything it needs sits next to this file in ./ort and ./models - it never touches the network.
// Same call shape as the old remover: pass a Blob, get back a PNG Blob (same size, RGBA).
import * as ort from './esm/onnxruntime-web@1.20.1/es2022/onnxruntime-web.mjs';

const BASE = new URL('./', import.meta.url);
const MODEL_DIR = new URL('models/isnet-general-use/', BASE);
const SIZE = 1024;                       // the model's fixed square input
const MEAN = [0.485, 0.456, 0.406];      // ISNet's own normalisation (std is 1)

let sessionPromise = null;

async function bytesOf(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Could not read ' + url + ' (' + res.status + ')');
  return new Uint8Array(await res.arrayBuffer());
}

async function loadSession() {
  // The runtime's two files are read from disk and handed over as in-memory blobs, so nothing is fetched by address.
  const [wasm, mjs] = await Promise.all([bytesOf(new URL('ort/ort-wasm-simd-threaded.wasm', BASE)), bytesOf(new URL('ort/ort-wasm-simd-threaded.mjs', BASE))]);
  ort.env.wasm.wasmPaths = {
    wasm: URL.createObjectURL(new Blob([wasm], { type: 'application/wasm' })),
    mjs: URL.createObjectURL(new Blob([mjs], { type: 'text/javascript' })),
  };
  ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 2);   // falls back to 1 by itself where threads aren't allowed
  ort.env.wasm.simd = true;

  const manifest = await (await fetch(new URL('manifest.json', MODEL_DIR))).json();
  const model = new Uint8Array(manifest.size);
  let at = 0;
  for (const part of manifest.parts) { const b = await bytesOf(new URL(part, MODEL_DIR)); model.set(b, at); at += b.length; }
  if (at !== manifest.size) throw new Error('AI model files are incomplete (' + at + ' of ' + manifest.size + ' bytes). Re-run Update Tools.');
  const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', model))).map((x) => x.toString(16).padStart(2, '0')).join('');
  if (digest !== manifest.sha256) throw new Error('AI model files are damaged. Re-run Update Tools.');
  return ort.InferenceSession.create(model, { executionProviders: ['wasm'], graphOptimizationLevel: 'all' });
}

function canvasOf(source, w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(source, 0, 0, w, h);
  return c;
}

export async function removeBackgroundLocal(blob) {
  if (!sessionPromise) sessionPromise = loadSession().catch((e) => { sessionPromise = null; throw e; });
  const session = await sessionPromise;

  const bitmap = await createImageBitmap(blob);
  const W = bitmap.width, H = bitmap.height, n = SIZE * SIZE;

  // picture -> 1024x1024 -> normalised tensor
  const px = canvasOf(bitmap, SIZE, SIZE).getContext('2d').getImageData(0, 0, SIZE, SIZE).data;
  let max = 1;
  for (let i = 0; i < px.length; i += 4) { if (px[i] > max) max = px[i]; if (px[i + 1] > max) max = px[i + 1]; if (px[i + 2] > max) max = px[i + 2]; }
  const input = new Float32Array(3 * n);
  for (let i = 0; i < n; i++) for (let c = 0; c < 3; c++) input[c * n + i] = px[i * 4 + c] / max - MEAN[c];

  const out = await session.run({ [session.inputNames[0]]: new ort.Tensor('float32', input, [1, 3, SIZE, SIZE]) });
  const raw = out[session.outputNames[0]].data;

  // scale the mask to 0..1, then to 0..255 grey pixels
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < n; i++) { if (raw[i] < lo) lo = raw[i]; if (raw[i] > hi) hi = raw[i]; }
  const span = hi - lo || 1;
  const mask = new ImageData(SIZE, SIZE);
  for (let i = 0; i < n; i++) { const v = Math.round(((raw[i] - lo) / span) * 255); mask.data[i * 4] = v; mask.data[i * 4 + 1] = v; mask.data[i * 4 + 2] = v; mask.data[i * 4 + 3] = 255; }
  const small = document.createElement('canvas'); small.width = SIZE; small.height = SIZE; small.getContext('2d').putImageData(mask, 0, 0);

  // mask -> the picture's own size, and use it as the transparency
  const alpha = canvasOf(small, W, H).getContext('2d').getImageData(0, 0, W, H).data;
  const result = document.createElement('canvas'); result.width = W; result.height = H;
  const rg = result.getContext('2d'); rg.drawImage(bitmap, 0, 0);
  const img = rg.getImageData(0, 0, W, H);
  for (let i = 0; i < img.data.length; i += 4) img.data[i + 3] = alpha[i];
  rg.putImageData(img, 0, 0);
  bitmap.close();
  return new Promise((resolve, reject) => result.toBlob((b) => (b ? resolve(b) : reject(new Error('Could not build the result picture'))), 'image/png'));
}
