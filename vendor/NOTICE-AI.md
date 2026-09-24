# Third-party notices for Print Prep's AI background remover

Print Prep's "AI Model Framework (Photos)" engine runs entirely on this computer. It makes no network requests.

## ISNet "general use" model - Apache License 2.0
- Files: `models/isnet-general-use/` (the model, stored in parts).
- Architecture and training code: Xuebin Qin et al., "Highly Accurate Dichotomous Image Segmentation" (DIS), https://github.com/xuebinqin/DIS - Apache-2.0.
- ONNX export of the trained model as distributed by the `rembg` project (https://github.com/danielgatis/rembg, release v0.0.0, file `isnet-general-use.onnx`).
- Licence text: https://www.apache.org/licenses/LICENSE-2.0 . The model is used unmodified.

## ONNX Runtime Web 1.20.1 - MIT License
- Files: `esm/onnxruntime-web@1.20.1/`, `esm/node/`, `ort/` (WebAssembly build).
- Copyright (c) Microsoft Corporation. https://github.com/microsoft/onnxruntime
- MIT licence text: https://opensource.org/license/mit

The previous AI remover (IMG.LY `@imgly/background-removal`, AGPL-3.0) has been removed from this tool.
