/* esm.sh - onnxruntime-web@1.20.1/webgpu */
var vt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var ma=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,Cf=Object.getOwnPropertyNames,If=Object.prototype.hasOwnProperty,zf=(e=>typeof vt<"u"?vt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof vt<"u"?vt:t)[r]}):e)(function(e){if(typeof vt<"u")return vt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),D=(e,t)=>()=>(e&&(t=e(e=0)),t),tr=(e,t)=>{for(var r in t)ma(e,r,{get:t[r],enumerable:!0})},Af=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Cf(t))!If.call(e,a)&&a!==r&&ma(e,a,{get:()=>t[a],enumerable:!(i=Ef(t,a))||i.enumerable});return e},Ir=e=>Af(ma({},"__esModule",{value:!0}),e),Wt,ut,Bt,ps,ga,ya=D(()=>{"use strict";Wt=new Map,ut=[],Bt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Wt.get(e);if(i===void 0)Wt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=ut.indexOf(e);a!==-1&&ut.splice(a,1);for(let n=0;n<ut.length;n++)if(Wt.get(ut[n]).priority<=r){ut.splice(n,0,e);return}ut.push(e)}return}throw new TypeError("not a valid backend")},ps=async e=>{let t=Wt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ga=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?ut:r,a,n=[],s=new Set;for(let d of i){let p=await ps(d);typeof p=="string"?n.push({name:d,err:p}):(a||(a=p),a===p&&s.add(d))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of n)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[a,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),Of=D(()=>{"use strict";ya()}),Rl,Rf=D(()=>{"use strict";Rl="1.20.1"}),pi,We,Bl=D(()=>{"use strict";Rf(),pi="warning",We={wasm:{},webgl:{},webgpu:{},versions:{common:Rl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);pi=e}},get logLevel(){return pi}},Object.defineProperty(We,"logLevel",{enumerable:!0})}),ge,Bf=D(()=>{"use strict";Bl(),ge=We}),Ml,Pl,Mf=D(()=>{"use strict";Ml=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=n*a,u=0,m=f,$=f*2,g=-1;s==="RGBA"?(u=0,m=f,$=f*2,g=f*3):s==="RGB"?(u=0,m=f,$=f*2):s==="RBG"&&(u=0,$=f,m=f*2);for(let y=0;y<n;y++)for(let x=0;x<a;x++){let b=(e.data[u++]-p[0])*d[0],_=(e.data[m++]-p[1])*d[1],S=(e.data[$++]-p[2])*d[2],T=g===-1?255:(e.data[g++]-p[3])*d[3];i.fillStyle="rgba("+b+","+_+","+S+","+T+")",i.fillRect(x,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Pl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,f;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let u=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,$=0,g=1,y=2,x=3,b=0,_=u,S=u*2,T=-1;l==="RGBA"?(b=0,_=u,S=u*2,T=u*3):l==="RGB"?(b=0,_=u,S=u*2):l==="RBG"&&(b=0,S=u,_=u*2),i=r.createImageData(a,n);for(let E=0;E<n*a;$+=m,g+=m,y+=m,x+=m,E++)i.data[$]=(e.data[b++]-f[0])*p[0],i.data[g]=(e.data[_++]-f[1])*p[1],i.data[y]=(e.data[S++]-f[2])*p[2],i.data[x]=T===-1?255:(e.data[T++]-f[3])*p[3]}else throw new Error("Can not access image data");return i}}),mr,Dl,Ul,Nl,Wl,ql,Pf=D(()=>{"use strict";wa(),mr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,f=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),u=4,m=0,$=1,g=2,y=3,x=0,b=p,_=p*2,S=-1;l==="RGB"&&(u=3,m=0,$=1,g=2,y=-1),d==="RGBA"?S=p*3:d==="RBG"?(x=0,_=p,b=p*2):d==="BGR"&&(_=0,b=p,x=p*2);for(let T=0;T<p;T++,m+=u,g+=u,$+=u,y+=u)f[x++]=(e[m]+s[0])/n[0],f[b++]=(e[$]+s[1])/n[1],f[_++]=(e[g]+s[2])/n[2],S!==-1&&y!==-1&&(f[S++]=(e[y]+s[3])/n[3]);return d==="RGBA"?new Be("float32",f,[1,4,r,i]):new Be("float32",f,[1,3,r,i])},Dl=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=d();f.width=e.width,f.height=e.height;let u=p(f);if(u!=null){let m=e.height,$=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,$=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=m,l.width=$}else l.tensorFormat="RGBA",l.height=m,l.width=$;u.drawImage(e,0,0),s=u.getImageData(0,0,$,m).data}else throw new Error("Can not access image data")}else if(i){let f,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,u=t.resizedWidth):(f=e.height,u=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=u,t!==void 0){let m=d();m.width=u,m.height=f;let $=p(m);if($!=null)$.putImageData(e,0,0),s=$.getImageData(0,0,u,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=d();f.width=e.width,f.height=e.height;let u=p(f);if(u!=null){let m=e.height,$=e.width;return u.drawImage(e,0,0,$,m),s=u.getImageData(0,0,$,m).data,l.height=m,l.width=$,mr(s,l)}else throw new Error("Can not access image data")}else{if(n)return new Promise((f,u)=>{let m=d(),$=p(m);if(!e||!$)return u();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{m.width=g.width,m.height=g.height,$.drawImage(g,0,0,m.width,m.height);let y=$.getImageData(0,0,m.width,m.height);l.height=m.height,l.width=m.width,f(mr(y.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return mr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Ul=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Nl=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Wl=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},ql=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),St,Kt,ci,Vl,Df=D(()=>{"use strict";St=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Kt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ci=!1,Vl=()=>{if(!ci){ci=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(St.set("int64",BigInt64Array),Kt.set(BigInt64Array,"int64")),t&&(St.set("uint64",BigUint64Array),Kt.set(BigUint64Array,"uint64")),r?(St.set("float16",Float16Array),Kt.set(Float16Array,"float16")):St.set("float16",Uint16Array)}}}),Ll,jl,Uf=D(()=>{"use strict";wa(),Ll=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},jl=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,wa=D(()=>{"use strict";Mf(),Pf(),Df(),Uf(),Be=class{constructor(e,t,r){Vl();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=St.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=St.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",s=e;else if(d==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let d=Kt.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let n=Ll(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return Dl(e,t)}static fromTexture(e,t){return Ul(e,t)}static fromGpuBuffer(e,t){return Nl(e,t)}static fromMLTensor(e,t){return Wl(e,t)}static fromPinnedBuffer(e,t,r){return ql(e,t,r)}toDataURL(e){return Ml(this,e)}toImageData(e){return Pl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return jl(this,e)}}}),Oe,$a=D(()=>{"use strict";wa(),Oe=Be}),zr,hi,et,Ge,Fl=D(()=>{"use strict";Bl(),zr=(e,t)=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||console.timeStamp(`${e}::ORT::${t}`)},hi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),zr("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},et=e=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||hi("BEGIN",e)},Ge=e=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||hi("END",e)}}),Gl,Nf=D(()=>{"use strict";ya(),$a(),Fl(),Gl=class Hl{constructor(t){this.handler=t}async run(t,r,i){et();let a={},n={};if(typeof t!="object"||t===null||t instanceof Oe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Oe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(f.indexOf(u)!==-1){let m=r[u];(m===null||m instanceof Oe)&&(p=!0,s=!1,a[u]=m)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let l=await this.handler.run(t,a,n),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let f=l[p];f instanceof Oe?d[p]=f:d[p]=new Oe(f.type,f.data,f.dims)}return Ge(),d}async release(){return this.handler.dispose()}static async create(t,r,i,a){et();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,u=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(m=t.byteLength-u,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||u+m>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-u}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(f,u,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await ga(s),p=await l.createInferenceSessionHandler(n,d);return Ge(),new Hl(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Kl,Wf=D(()=>{"use strict";Nf(),Kl=Gl}),qf=D(()=>{"use strict"}),Vf=D(()=>{"use strict"}),Lf=D(()=>{"use strict"}),jf=D(()=>{"use strict"}),cs,Yl,Ff=D(()=>{"use strict";ya(),$a(),cs="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Yl=class Zl{constructor(t,r,i){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=i}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let i=t.evalModel||"",a=t.optimizerModel||"",n=r||{},[s,l]=await ga(n);if(s.createTrainingSessionHandler){let d=await s.createTrainingSessionHandler(t.checkpointState,t.trainModel,i,a,l);return new Zl(d,!!t.optimizerModel,!!t.evalModel)}else throw new Error(cs)}typeNarrowingForRunStep(t,r,i,a,n){let s={},l={};if(typeof i!="object"||i===null||i instanceof Oe||Array.isArray(i))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof Oe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let p of a){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);s[p]=null}if(typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(a);for(let u of r)if(f.indexOf(u)!==-1){let m=a[u];(m===null||m instanceof Oe)&&(p=!0,d=!1,s[u]=m)}if(p){if(typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else l=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of t)if(typeof i[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(d)for(let p of r)s[p]=null;return[s,l]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let i in t)if(Object.hasOwnProperty.call(t,i)){let a=t[i];a instanceof Oe?r[i]=a:r[i]=new Oe(a.type,a.data,a.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,i){let[a,n]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,i),s=await this.handler.runTrainStep(t,a,n);return this.convertHandlerReturnTypeToMapOfTensors(s)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,i){if(this.hasEvalModel){let[a,n]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,i),s=await this.handler.runEvalStep(t,a,n);return this.convertHandlerReturnTypeToMapOfTensors(s)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let i=await this.getParametersSize(r);if(t.length!==4*i)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Ql,Gf=D(()=>{"use strict";Ff(),Ql=Yl}),Xl={};tr(Xl,{InferenceSession:()=>Kl,TRACE:()=>zr,TRACE_FUNC_BEGIN:()=>et,TRACE_FUNC_END:()=>Ge,Tensor:()=>Oe,TrainingSession:()=>Ql,env:()=>ge,registerBackend:()=>Bt});var He=D(()=>{"use strict";Of(),Bf(),Wf(),$a(),qf(),Vf(),Fl(),Lf(),jf(),Gf()}),_a=D(()=>{"use strict"}),Jl={};tr(Jl,{default:()=>ed});var fi,mi,ed,Hf=D(()=>{"use strict";Zc(),Tt(),Ur(),fi="ort-wasm-proxy-worker",mi=globalThis.self?.name===fi,mi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":va(r.wasm).then(()=>{Ua(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Na(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Dr(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Wa(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":qa(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:l}=r;Va(i,a,n,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},ja([...n,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":La(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),ed=mi?null:e=>new Worker(e??Rt,{type:"module",name:fi})}),td={};tr(td,{default:()=>rd});var gi,yi,rd,Kf=D(()=>{"use strict";yi=(gi=import.meta.url,async function(e={}){function t(){return L.buffer!=j.buffer&&me(),j}function r(){return L.buffer!=j.buffer&&me(),ie}function i(){return L.buffer!=j.buffer&&me(),R}function a(){return L.buffer!=j.buffer&&me(),U}function n(){return L.buffer!=j.buffer&&me(),ee}function s(){return L.buffer!=j.buffer&&me(),fe}function l(){return L.buffer!=j.buffer&&me(),be}function d(){return L.buffer!=j.buffer&&me(),Ke}var p,f,u=Object.assign({},e),m=new Promise((o,c)=>{p=o,f=c}),$=typeof window=="object",g=typeof importScripts=="function",y=g&&self.name=="em-pthread";u.mountExternalData=(o,c)=>{o.startsWith("./")&&(o=o.substring(2)),(u.Fb||(u.Fb=new Map)).set(o,c)},u.unmountExternalData=()=>{delete u.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let b=()=>{let o=(h,w,v)=>(...k)=>{let O=Xe,M=w?.();k=h(...k);let N=w?.();return M!==N&&(h=N,v(M),w=v=null),Xe!=O?new Promise((q,Y)=>{ii={resolve:q,reject:Y}}):k},c=h=>async(...w)=>{try{if(u.Eb)throw Error("Session already started");let v=u.Eb={fc:w[0],errors:[]},k=await h(...w);if(u.Eb!==v)throw Error("Session mismatch");u.Gb?.flush();let O=v.errors;if(0<O.length){let M=await Promise.all(O);if(M=M.filter(N=>N),0<M.length)throw Error(M.join(`
`))}return k}finally{u.Eb=null}};u._OrtCreateSession=o(u._OrtCreateSession,()=>u._OrtCreateSession,h=>u._OrtCreateSession=h),u._OrtRun=c(o(u._OrtRun,()=>u._OrtRun,h=>u._OrtRun=h)),u._OrtRunWithBinding=c(o(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,h=>u._OrtRunWithBinding=h)),u._OrtBindInput=o(u._OrtBindInput,()=>u._OrtBindInput,h=>u._OrtBindInput=h),b=void 0};u.jsepInit=(o,c)=>{if(b?.(),o==="webgpu"){[u.Gb,u.Ub,u.Yb,u.Nb,u.Xb,u.jb,u.Zb,u.bc,u.Vb,u.Wb,u.$b]=c;let h=u.Gb;u.jsepRegisterBuffer=(w,v,k,O)=>h.registerBuffer(w,v,k,O),u.jsepGetBuffer=w=>h.getBuffer(w),u.jsepCreateDownloader=(w,v,k)=>h.createDownloader(w,v,k),u.jsepOnReleaseSession=w=>{h.onReleaseSession(w)},u.jsepOnRunStart=w=>h.onRunStart(w),u.cc=(w,v)=>{h.upload(w,v)}}else if(o==="webnn"){[u.Gb,u.ac,u.Ob,u.jsepEnsureTensor,u.dc,u.jsepDownloadTensor]=c,u.jsepReleaseTensorId=u.Ob;let h=u.Gb;u.jsepOnRunStart=w=>h.onRunStart(w),u.jsepRegisterMLContext=(w,v)=>{h.registerMLContext(w,v)},u.jsepOnReleaseSession=w=>{h.onReleaseSession(w)},u.jsepCreateMLTensorDownloader=(w,v)=>h.createMLTensorDownloader(w,v),u.jsepRegisterMLTensor=(w,v,k)=>h.registerMLTensor(w,v,k)}};var _,S,T=Object.assign({},u),E="./this.program",I=(o,c)=>{throw c},C="";($||g)&&(g?C=self.location.href:typeof document<"u"&&document.currentScript&&(C=document.currentScript.src),gi&&(C=gi),C=C.startsWith("blob:")?"":C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1),g&&(S=o=>{var c=new XMLHttpRequest;return c.open("GET",o,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=(o,c,h)=>{var w=new XMLHttpRequest;w.open("GET",o,!0),w.responseType="arraybuffer",w.onload=()=>{w.status==200||w.status==0&&w.response?c(w.response):h()},w.onerror=h,w.send(null)});var P,V=console.log.bind(console),W=console.error.bind(console),X=V,Z=W;if(Object.assign(u,T),T=null,y){let o=function(c){try{var h=c.data,w=h.cmd;if(w==="load"){let v=[];self.onmessage=k=>v.push(k),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let k of v)o(k);self.onmessage=o};for(let k of h.handlers)u[k]&&!u[k].proxy||(u[k]=(...O)=>{postMessage({Mb:"callHandler",oc:k,args:O})},k=="print"&&(X=u[k]),k=="printErr"&&(Z=u[k]));L=h.wasmMemory,me(),se(h.wasmModule)}else if(w==="run"){oi(h.pthread_ptr,0,0,1,0,0),ei(h.pthread_ptr),dh(),tn(),ue||(Jn(),ue=!0);try{ph(h.start_routine,h.arg)}catch(v){if(v!="unwind")throw v}}else w==="cancel"?At()&&hr(-1):h.target!=="setimmediate"&&(w==="checkMailbox"?ue&&ar():w&&(Z(`worker: received unknown command ${w}`),Z(h)))}catch(v){throw es(),v}};var J=o,se,ue=!1;Z=function(...c){c=c.join(" "),console.error(c)},self.alert=function(...c){postMessage({Mb:"alert",text:c.join(" "),qc:At()})},u.instantiateWasm=(c,h)=>new Promise(w=>{se=v=>{v=new WebAssembly.Instance(v,Za()),h(v),w()}}),self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=o}u.wasmBinary&&(P=u.wasmBinary);var L,de,oe,j,ie,R,U,ee,fe,be,ke,Re,Ke,Pe=!1;function me(){var o=L.buffer;u.HEAP8=j=new Int8Array(o),u.HEAP16=R=new Int16Array(o),u.HEAPU8=ie=new Uint8Array(o),u.HEAPU16=U=new Uint16Array(o),u.HEAP32=ee=new Int32Array(o),u.HEAPU32=fe=new Uint32Array(o),u.HEAPF32=be=new Float32Array(o),u.HEAPF64=Ke=new Float64Array(o),u.HEAP64=ke=new BigInt64Array(o),u.HEAPU64=Re=new BigUint64Array(o)}if(!y){if(!((L=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw Z("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");me()}var Te=[],Ye=[],rr=[],yt=0,qr=null,Nt=null;function Fa(){if(--yt==0&&(qr!==null&&(clearInterval(qr),qr=null),Nt)){var o=Nt;Nt=null,o()}}function Et(o){throw Z(o="Aborted("+o+")"),Pe=!0,oe=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),f(o),o}var Vr,Ga=o=>o.startsWith("data:application/octet-stream;base64,"),Ha=o=>o.startsWith("file://");function Ka(o){if(o==Vr&&P)return new Uint8Array(P);if(S)return S(o);throw"both async and sync fetching of the wasm failed"}function Ya(o,c,h){return(function(w){if(!P&&($||g)){if(typeof fetch=="function"&&!Ha(w))return fetch(w,{credentials:"same-origin"}).then(v=>{if(!v.ok)throw`failed to load wasm binary file at '${w}'`;return v.arrayBuffer()}).catch(()=>Ka(w));if(_)return new Promise((v,k)=>{_(w,O=>v(new Uint8Array(O)),k)})}return Promise.resolve().then(()=>Ka(w))})(o).then(w=>WebAssembly.instantiate(w,c)).then(h,w=>{Z(`failed to asynchronously prepare wasm: ${w}`),Et(w)})}function Za(){return{a:{O:lh,Aa:uh,b:hh,aa:sn,B:ln,qa:dn,Y:cn,_:hn,ra:fn,oa:mn,ha:gn,na:yn,L:wn,Z:$n,W:_n,pa:vn,X:bn,wa:fh,F:gh,Q:yh,P:$h,E:vh,u:bh,q:xh,G:Sh,A:Ah,R:Oh,ua:Rh,ka:Bh,U:Mh,ba:Ph,H:Dh,ja:ei,ta:Uh,t:Nh,x:Vh,o:Lh,l:Fh,c:Xr,n:Gh,j:Yh,w:Zh,p:Qh,g:Xh,s:Jh,m:ef,e:tf,k:rf,i:af,h:nf,d:sf,ea:of,fa:uf,ga:lf,ca:Pn,da:Dn,T:df,f:pf,D:cf,I:hf,M:ff,y:mf,sa:gf,V:yf,v:Nn,z:wf,N:$f,S:_f,za:vf,ya:bf,la:Vn,ma:Ln,$:Hr,C:jn,K:Fn,ia:Gn,J:Hn,a:L,xa:Gr,va:Zn,r:kf}}}var Lr={868340:(o,c,h,w,v)=>{if(u===void 0||!u.Fb)return 1;if((o=Ee(o>>>0)).startsWith("./")&&(o=o.substring(2)),!(o=u.Fb.get(o)))return 2;if(w>>>=0,(c>>>=0)+(h>>>=0)>o.byteLength)return 3;try{let k=o.subarray(c,c+h);switch(v){case 0:r().set(k,w>>>0);break;case 1:u.cc(w,k);break;default:return 4}return 0}catch{return 4}},869023:(o,c,h)=>{u.dc(o,r().subarray(c>>>0,c+h>>>0))},869086:()=>u.ac(),869127:o=>{u.Ob(o)},869163:()=>{u.Vb()},869194:()=>{u.Wb()},869223:()=>{u.$b()},869248:o=>u.Ub(o),869281:o=>u.Yb(o),869313:(o,c,h)=>{u.Nb(o,c,h,!0)},869352:(o,c,h)=>{u.Nb(o,c,h)},869385:()=>typeof wasmOffsetConverter<"u",869442:o=>{u.jb("Abs",o,void 0)},869493:o=>{u.jb("Neg",o,void 0)},869544:o=>{u.jb("Floor",o,void 0)},869597:o=>{u.jb("Ceil",o,void 0)},869649:o=>{u.jb("Reciprocal",o,void 0)},869707:o=>{u.jb("Sqrt",o,void 0)},869759:o=>{u.jb("Exp",o,void 0)},869810:o=>{u.jb("Erf",o,void 0)},869861:o=>{u.jb("Sigmoid",o,void 0)},869916:(o,c,h)=>{u.jb("HardSigmoid",o,{alpha:c,beta:h})},869995:o=>{u.jb("Log",o,void 0)},870046:o=>{u.jb("Sin",o,void 0)},870097:o=>{u.jb("Cos",o,void 0)},870148:o=>{u.jb("Tan",o,void 0)},870199:o=>{u.jb("Asin",o,void 0)},870251:o=>{u.jb("Acos",o,void 0)},870303:o=>{u.jb("Atan",o,void 0)},870355:o=>{u.jb("Sinh",o,void 0)},870407:o=>{u.jb("Cosh",o,void 0)},870459:o=>{u.jb("Asinh",o,void 0)},870512:o=>{u.jb("Acosh",o,void 0)},870565:o=>{u.jb("Atanh",o,void 0)},870618:o=>{u.jb("Tanh",o,void 0)},870670:o=>{u.jb("Not",o,void 0)},870721:(o,c,h)=>{u.jb("Clip",o,{min:c,max:h})},870790:o=>{u.jb("Clip",o,void 0)},870842:(o,c)=>{u.jb("Elu",o,{alpha:c})},870900:o=>{u.jb("Gelu",o,void 0)},870952:o=>{u.jb("Relu",o,void 0)},871004:(o,c)=>{u.jb("LeakyRelu",o,{alpha:c})},871068:(o,c)=>{u.jb("ThresholdedRelu",o,{alpha:c})},871138:(o,c)=>{u.jb("Cast",o,{to:c})},871196:o=>{u.jb("Add",o,void 0)},871247:o=>{u.jb("Sub",o,void 0)},871298:o=>{u.jb("Mul",o,void 0)},871349:o=>{u.jb("Div",o,void 0)},871400:o=>{u.jb("Pow",o,void 0)},871451:o=>{u.jb("Equal",o,void 0)},871504:o=>{u.jb("Greater",o,void 0)},871559:o=>{u.jb("GreaterOrEqual",o,void 0)},871621:o=>{u.jb("Less",o,void 0)},871673:o=>{u.jb("LessOrEqual",o,void 0)},871732:(o,c,h,w,v)=>{u.jb("ReduceMean",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},871891:(o,c,h,w,v)=>{u.jb("ReduceMax",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872049:(o,c,h,w,v)=>{u.jb("ReduceMin",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872207:(o,c,h,w,v)=>{u.jb("ReduceProd",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872366:(o,c,h,w,v)=>{u.jb("ReduceSum",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872524:(o,c,h,w,v)=>{u.jb("ReduceL1",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872681:(o,c,h,w,v)=>{u.jb("ReduceL2",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872838:(o,c,h,w,v)=>{u.jb("ReduceLogSum",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},872999:(o,c,h,w,v)=>{u.jb("ReduceSumSquare",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},873163:(o,c,h,w,v)=>{u.jb("ReduceLogSumExp",o,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},873327:o=>{u.jb("Where",o,void 0)},873380:(o,c,h)=>{u.jb("Transpose",o,{perm:c?Array.from(n().subarray(c>>>0,h>>>0)):[]})},873488:(o,c,h,w)=>{u.jb("DepthToSpace",o,{blocksize:c,mode:Ee(h),format:w?"NHWC":"NCHW"})},873621:(o,c,h,w)=>{u.jb("DepthToSpace",o,{blocksize:c,mode:Ee(h),format:w?"NHWC":"NCHW"})},873754:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z,ae)=>{u.jb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:c,dilations:[h],group:w,kernelShape:[v],pads:[k,O],strides:[M],wIsConst:()=>!!t()[q>>>0],outputPadding:Y?Array.from(n().subarray(Y>>>0,ne>>>0)):[],outputShape:pe?Array.from(n().subarray(pe>>>0,z>>>0)):[],activation:Ee(ae)})},874155:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z)=>{u.jb("ConvTranspose",o,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from(n().subarray(h>>>0,2+(h>>>0)>>>0)),group:w,kernelShape:Array.from(n().subarray(v>>>0,2+(v>>>0)>>>0)),pads:Array.from(n().subarray(k>>>0,4+(k>>>0)>>>0)),strides:Array.from(n().subarray(O>>>0,2+(O>>>0)>>>0)),wIsConst:()=>!!t()[N>>>0],outputPadding:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],outputShape:ne?Array.from(n().subarray(ne>>>0,pe>>>0)):[],activation:Ee(z)})},874720:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z,ae)=>{u.jb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:c,dilations:[h],group:w,kernelShape:[v],pads:[k,O],strides:[M],wIsConst:()=>!!t()[q>>>0],outputPadding:Y?Array.from(n().subarray(Y>>>0,ne>>>0)):[],outputShape:pe?Array.from(n().subarray(pe>>>0,z>>>0)):[],activation:Ee(ae)})},875121:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z)=>{u.jb("ConvTranspose",o,{format:M?"NHWC":"NCHW",autoPad:c,dilations:Array.from(n().subarray(h>>>0,2+(h>>>0)>>>0)),group:w,kernelShape:Array.from(n().subarray(v>>>0,2+(v>>>0)>>>0)),pads:Array.from(n().subarray(k>>>0,4+(k>>>0)>>>0)),strides:Array.from(n().subarray(O>>>0,2+(O>>>0)>>>0)),wIsConst:()=>!!t()[N>>>0],outputPadding:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],outputShape:ne?Array.from(n().subarray(ne>>>0,pe>>>0)):[],activation:Ee(z)})},875686:(o,c)=>{u.jb("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},875777:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z)=>{u.jb("AveragePool",o,{format:z?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:w,storage_order:v,dilations:k?Array.from(n().subarray(k>>>0,O>>>0)):[],kernel_shape:M?Array.from(n().subarray(M>>>0,N>>>0)):[],pads:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],strides:ne?Array.from(n().subarray(ne>>>0,pe>>>0)):[]})},876192:(o,c)=>{u.jb("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},876283:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z)=>{u.jb("AveragePool",o,{format:z?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:w,storage_order:v,dilations:k?Array.from(n().subarray(k>>>0,O>>>0)):[],kernel_shape:M?Array.from(n().subarray(M>>>0,N>>>0)):[],pads:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],strides:ne?Array.from(n().subarray(ne>>>0,pe>>>0)):[]})},876698:(o,c)=>{u.jb("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},876785:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z)=>{u.jb("MaxPool",o,{format:z?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:w,storage_order:v,dilations:k?Array.from(n().subarray(k>>>0,O>>>0)):[],kernel_shape:M?Array.from(n().subarray(M>>>0,N>>>0)):[],pads:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],strides:ne?Array.from(n().subarray(ne>>>0,pe>>>0)):[]})},877196:(o,c)=>{u.jb("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},877283:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z)=>{u.jb("MaxPool",o,{format:z?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:w,storage_order:v,dilations:k?Array.from(n().subarray(k>>>0,O>>>0)):[],kernel_shape:M?Array.from(n().subarray(M>>>0,N>>>0)):[],pads:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],strides:ne?Array.from(n().subarray(ne>>>0,pe>>>0)):[]})},877694:(o,c,h,w,v)=>{u.jb("Gemm",o,{alpha:c,beta:h,transA:w,transB:v})},877798:o=>{u.jb("MatMul",o,void 0)},877852:(o,c,h,w)=>{u.jb("ArgMax",o,{keepDims:!!c,selectLastIndex:!!h,axis:w})},877960:(o,c,h,w)=>{u.jb("ArgMin",o,{keepDims:!!c,selectLastIndex:!!h,axis:w})},878068:(o,c)=>{u.jb("Softmax",o,{axis:c})},878131:(o,c)=>{u.jb("Concat",o,{axis:c})},878191:(o,c,h,w,v)=>{u.jb("Split",o,{axis:c,numOutputs:h,splitSizes:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},878331:o=>{u.jb("Expand",o,void 0)},878385:(o,c)=>{u.jb("Gather",o,{axis:Number(c)})},878456:(o,c)=>{u.jb("GatherElements",o,{axis:Number(c)})},878535:(o,c,h,w,v,k,O,M,N,q,Y)=>{u.jb("Resize",o,{antialias:c,axes:h?Array.from(n().subarray(h>>>0,w>>>0)):[],coordinateTransformMode:Ee(v),cubicCoeffA:k,excludeOutside:O,extrapolationValue:M,keepAspectRatioPolicy:Ee(N),mode:Ee(q),nearestMode:Ee(Y)})},878881:(o,c,h,w,v,k,O)=>{u.jb("Slice",o,{starts:c?Array.from(n().subarray(c>>>0,h>>>0)):[],ends:w?Array.from(n().subarray(w>>>0,v>>>0)):[],axes:k?Array.from(n().subarray(k>>>0,O>>>0)):[]})},879097:o=>{u.jb("Tile",o,void 0)},879149:(o,c,h)=>{u.jb("InstanceNormalization",o,{epsilon:c,format:h?"NHWC":"NCHW"})},879263:(o,c,h)=>{u.jb("InstanceNormalization",o,{epsilon:c,format:h?"NHWC":"NCHW"})},879377:o=>{u.jb("Range",o,void 0)},879430:(o,c)=>{u.jb("Einsum",o,{equation:Ee(c)})},879511:(o,c,h,w,v)=>{u.jb("Pad",o,{mode:c,value:h,pads:w?Array.from(n().subarray(w>>>0,v>>>0)):[]})},879638:(o,c,h,w,v,k)=>{u.jb("BatchNormalization",o,{epsilon:c,momentum:h,spatial:!!v,trainingMode:!!w,format:k?"NHWC":"NCHW"})},879807:(o,c,h,w,v,k)=>{u.jb("BatchNormalization",o,{epsilon:c,momentum:h,spatial:!!v,trainingMode:!!w,format:k?"NHWC":"NCHW"})},879976:(o,c,h)=>{u.jb("CumSum",o,{exclusive:Number(c),reverse:Number(h)})},880073:(o,c,h)=>{u.jb("DequantizeLinear",o,{axis:c,blockSize:h})},880163:(o,c,h,w,v,k,O,M,N)=>{u.jb("Attention",o,{numHeads:c,isUnidirectional:h,maskFilterValue:w,scale:v,doRotary:k,qkvHiddenSizes:O?Array.from(n().subarray(Number(M)>>>0,Number(M)+O>>>0)):[],pastPresentShareBuffer:!!N})},880435:o=>{u.jb("BiasAdd",o,void 0)},880490:o=>{u.jb("BiasSplitGelu",o,void 0)},880551:o=>{u.jb("FastGelu",o,void 0)},880607:(o,c,h,w,v,k,O,M,N,q,Y,ne,pe,z,ae,we)=>{u.jb("Conv",o,{format:ne?"NHWC":"NCHW",auto_pad:c,dilations:h?Array.from(n().subarray(h>>>0,w>>>0)):[],group:v,kernel_shape:k?Array.from(n().subarray(k>>>0,O>>>0)):[],pads:M?Array.from(n().subarray(M>>>0,N>>>0)):[],strides:q?Array.from(n().subarray(q>>>0,Y>>>0)):[],w_is_const:()=>!!t()[pe>>>0],activation:Ee(z),activation_params:ae?Array.from(l().subarray(ae>>>0,we>>>0)):[]})},881103:o=>{u.jb("Gelu",o,void 0)},881155:(o,c,h,w)=>{u.jb("GroupQueryAttention",o,{numHeads:c,kvNumHeads:h,scale:w})},881268:(o,c,h,w)=>{u.jb("LayerNormalization",o,{axis:c,epsilon:h,simplified:!!w})},881379:(o,c,h,w)=>{u.jb("LayerNormalization",o,{axis:c,epsilon:h,simplified:!!w})},881490:(o,c,h,w,v,k)=>{u.jb("MatMulNBits",o,{k:c,n:h,accuracyLevel:w,bits:v,blockSize:k})},881617:(o,c,h,w,v,k)=>{u.jb("MultiHeadAttention",o,{numHeads:c,isUnidirectional:h,maskFilterValue:w,scale:v,doRotary:k})},881776:(o,c)=>{u.jb("QuickGelu",o,{alpha:c})},881840:(o,c,h,w,v)=>{u.jb("RotaryEmbedding",o,{interleaved:!!c,numHeads:h,rotaryEmbeddingDim:w,scale:v})},881979:(o,c,h)=>{u.jb("SkipLayerNormalization",o,{epsilon:c,simplified:!!h})},882081:(o,c,h)=>{u.jb("SkipLayerNormalization",o,{epsilon:c,simplified:!!h})},882183:(o,c,h,w)=>{u.jb("GatherBlockQuantized",o,{gatherAxis:c,quantizeAxis:h,blockSize:w})},882304:o=>{u.Zb(o)},882338:(o,c)=>u.bc(o,c,u.Eb.fc,u.Eb.errors)};function uh(o,c,h){return An(async()=>{await u.Xb(o,c,h)})}function lh(){return typeof wasmOffsetConverter<"u"}function jr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var Fr=o=>{o.terminate(),o.onmessage=()=>{}},Qa=o=>{at.length==0&&(an(),rn(at[0]));var c=at.pop();if(!c)return 6;$t.push(c),Ze[o.Ab]=c,c.Ab=o.Ab;var h={cmd:"run",start_routine:o.hc,arg:o.Qb,pthread_ptr:o.Ab};return c.postMessage(h,o.mc),0},wt=0,ye=(o,c,...h)=>{for(var w=2*h.length,v=di(),k=li(8*w),O=k>>>3,M=0;M<h.length;M++){var N=h[M];typeof N=="bigint"?(ke[O+2*M]=1n,ke[O+2*M+1]=N):(ke[O+2*M]=0n,d()[O+2*M+1>>>0]=N)}return o=ts(o,0,w,k,c),fr(v),o};function Gr(o){if(y)return ye(0,1,o);if(oe=o,!(0<wt)){for(var c of $t)Fr(c);for(c of at)Fr(c);at=[],$t=[],Ze=[],Pe=!0}I(o,new jr(o))}function Xa(o){if(y)return ye(1,0,o);Hr(o)}var Hr=o=>{if(oe=o,y)throw Xa(o),"unwind";Gr(o)},at=[],$t=[],Ja=[],Ze={},en=o=>{var c=o.Ab;delete Ze[c],at.push(o),$t.splice($t.indexOf(o),1),o.Ab=0,ui(c)};function tn(){Ja.forEach(o=>o())}var rn=o=>new Promise(c=>{o.onmessage=v=>{var k=(v=v.data).cmd;if(v.targetThread&&v.targetThread!=At()){var O=Ze[v.targetThread];O?O.postMessage(v,v.transferList):Z(`Internal error! Worker sent a message "${k}" to target pthread ${v.targetThread}, but that thread no longer exists!`)}else k==="checkMailbox"?ar():k==="spawnThread"?Qa(v):k==="cleanupThread"?en(Ze[v.thread]):k==="killThread"?(v=v.thread,k=Ze[v],delete Ze[v],Fr(k),ui(v),$t.splice($t.indexOf(k),1),k.Ab=0):k==="cancelThread"?Ze[v.thread].postMessage({cmd:"cancel"}):k==="loaded"?(o.loaded=!0,c(o)):k==="alert"?alert(`Thread ${v.threadId}: ${v.text}`):v.target==="setimmediate"?o.postMessage(v):k==="callHandler"?u[v.handler](...v.args):k&&Z(`worker sent an unknown command ${k}`)},o.onerror=v=>{throw Z(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var h,w=[];for(h of[])u.hasOwnProperty(h)&&w.push(h);o.postMessage({cmd:"load",handlers:w,wasmMemory:L,wasmModule:de})});function an(){var o=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});at.push(o)}var ir=o=>{for(;0<o.length;)o.shift()(u)},dh=()=>{var o=At(),c=s()[o+52>>>2>>>0];o=s()[o+56>>>2>>>0],is(c,c-o),fr(c)},ph=(o,c)=>{wt=0,o=as(o,c),0<wt?oe=o:hr(o)};class ch{constructor(c){this.Jb=c-24}}function hh(o,c,h){var w=new ch(o>>>=0);throw c>>>=0,h>>>=0,s()[w.Jb+16>>>2>>>0]=0,s()[w.Jb+4>>>2>>>0]=c,s()[w.Jb+8>>>2>>>0]=h,o}function nn(o,c,h,w){return y?ye(2,1,o,c,h,w):sn(o,c,h,w)}function sn(o,c,h,w){if(o>>>=0,c>>>=0,h>>>=0,w>>>=0,x===void 0)return Z("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var v=[];return y&&v.length===0?nn(o,c,h,w):(o={hc:h,Ab:o,Qb:w,mc:v},y?(o.Mb="spawnThread",postMessage(o,v),0):Qa(o))}var on=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,un=(o,c,h)=>{var w=(c>>>=0)+h;for(h=c;o[h]&&!(h>=w);)++h;if(16<h-c&&o.buffer&&on)return on.decode(o.buffer instanceof x?o.slice(c,h):o.subarray(c,h));for(w="";c<h;){var v=o[c++];if(128&v){var k=63&o[c++];if((224&v)==192)w+=String.fromCharCode((31&v)<<6|k);else{var O=63&o[c++];65536>(v=(240&v)==224?(15&v)<<12|k<<6|O:(7&v)<<18|k<<12|O<<6|63&o[c++])?w+=String.fromCharCode(v):(v-=65536,w+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else w+=String.fromCharCode(v)}return w},Ee=(o,c)=>(o>>>=0)?un(r(),o,c):"";function ln(o,c,h){return y?ye(3,1,o,c,h):0}function dn(o,c){if(y)return ye(4,1,o,c)}var Kr=o=>{for(var c=0,h=0;h<o.length;++h){var w=o.charCodeAt(h);127>=w?c++:2047>=w?c+=2:55296<=w&&57343>=w?(c+=4,++h):c+=3}return c},pn=(o,c,h,w)=>{if(!(0<w))return 0;var v=h>>>=0;w=h+w-1;for(var k=0;k<o.length;++k){var O=o.charCodeAt(k);if(55296<=O&&57343>=O&&(O=65536+((1023&O)<<10)|1023&o.charCodeAt(++k)),127>=O){if(h>=w)break;c[h++>>>0]=O}else{if(2047>=O){if(h+1>=w)break;c[h++>>>0]=192|O>>6}else{if(65535>=O){if(h+2>=w)break;c[h++>>>0]=224|O>>12}else{if(h+3>=w)break;c[h++>>>0]=240|O>>18,c[h++>>>0]=128|O>>12&63}c[h++>>>0]=128|O>>6&63}c[h++>>>0]=128|63&O}}return c[h>>>0]=0,h-v},Ct=(o,c,h)=>pn(o,r(),c,h);function cn(o,c){if(y)return ye(5,1,o,c)}function hn(o,c,h){if(y)return ye(6,1,o,c,h)}function fn(o,c,h){return y?ye(7,1,o,c,h):0}function mn(o,c){if(y)return ye(8,1,o,c)}function gn(o,c,h){if(y)return ye(9,1,o,c,h)}function yn(o,c,h,w){if(y)return ye(10,1,o,c,h,w)}function wn(o,c,h,w){if(y)return ye(11,1,o,c,h,w)}function $n(o,c,h,w){if(y)return ye(12,1,o,c,h,w)}function _n(o){if(y)return ye(13,1,o)}function vn(o,c){if(y)return ye(14,1,o,c)}function bn(o,c,h){if(y)return ye(15,1,o,c,h)}var xn,nt,fh=()=>{Et("")},Qe=o=>{for(var c="";r()[o>>>0];)c+=xn[r()[o++>>>0]];return c},Yr={},Zr={},mh={};function rt(o,c,h={}){if(!("argPackAdvance"in c))throw new TypeError("registerType registeredInstance requires argPackAdvance");return(function(w,v,k={}){var O=v.name;if(!w)throw new nt(`type "${O}" must have a positive integer typeid pointer`);if(Zr.hasOwnProperty(w)){if(k.Sb)return;throw new nt(`Cannot register type '${O}' twice`)}Zr[w]=v,delete mh[w],Yr.hasOwnProperty(w)&&(v=Yr[w],delete Yr[w],v.forEach(M=>M()))})(o,c,h)}var Sn=(o,c,h)=>{switch(c){case 1:return h?w=>t()[w>>>0]:w=>r()[w>>>0];case 2:return h?w=>i()[w>>>1>>>0]:w=>a()[w>>>1>>>0];case 4:return h?w=>n()[w>>>2>>>0]:w=>s()[w>>>2>>>0];case 8:return h?w=>ke[w>>>3]:w=>Re[w>>>3];default:throw new TypeError(`invalid integer width (${c}): ${o}`)}};function gh(o,c,h){h>>>=0,rt(o>>>=0,{name:c=Qe(c>>>0),fromWireType:w=>w,toWireType:function(w,v){if(typeof v!="bigint"&&typeof v!="number")throw v=v===null?"null":(w=typeof v)=="object"||w==="array"||w==="function"?v.toString():""+v,new TypeError(`Cannot convert "${v}" to ${this.name}`);return typeof v=="number"&&(v=BigInt(v)),v},argPackAdvance:st,readValueFromPointer:Sn(c,h,c.indexOf("u")==-1),Db:null})}var st=8;function yh(o,c,h,w){rt(o>>>=0,{name:c=Qe(c>>>0),fromWireType:function(v){return!!v},toWireType:function(v,k){return k?h:w},argPackAdvance:st,readValueFromPointer:function(v){return this.fromWireType(r()[v>>>0])},Db:null})}var Qr=[],it=[];function Xr(o){9<(o>>>=0)&&--it[o+1]==0&&(it[o]=void 0,Qr.push(o))}var De=o=>{if(!o)throw new nt("Cannot use deleted val. handle = "+o);return it[o]},Ue=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Qr.pop()||it.length;return it[c]=o,it[c+1]=1,c}};function Jr(o){return this.fromWireType(s()[o>>>2>>>0])}var wh={name:"emscripten::val",fromWireType:o=>{var c=De(o);return Xr(o),c},toWireType:(o,c)=>Ue(c),argPackAdvance:st,readValueFromPointer:Jr,Db:null};function $h(o){return rt(o>>>0,wh)}var _h=(o,c)=>{switch(c){case 4:return function(h){return this.fromWireType(l()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(d()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${o}`)}};function vh(o,c,h){h>>>=0,rt(o>>>=0,{name:c=Qe(c>>>0),fromWireType:w=>w,toWireType:(w,v)=>v,argPackAdvance:st,readValueFromPointer:_h(c,h),Db:null})}function bh(o,c,h,w,v){if(o>>>=0,h>>>=0,c=Qe(c>>>0),v===-1&&(v=4294967295),v=M=>M,w===0){var k=32-8*h;v=M=>M<<k>>>k}var O=c.includes("unsigned")?function(M,N){return N>>>0}:function(M,N){return N};rt(o,{name:c,fromWireType:v,toWireType:O,argPackAdvance:st,readValueFromPointer:Sn(c,h,w!==0),Db:null})}function xh(o,c,h){function w(k){var O=s()[k>>>2>>>0];return k=s()[k+4>>>2>>>0],new v(t().buffer,k,O)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];rt(o>>>=0,{name:h=Qe(h>>>0),fromWireType:w,argPackAdvance:st,readValueFromPointer:w},{Sb:!0})}function Sh(o,c){o>>>=0;var h=(c=Qe(c>>>0))==="std::string";rt(o,{name:c,fromWireType:function(w){var v=s()[w>>>2>>>0],k=w+4;if(h)for(var O=k,M=0;M<=v;++M){var N=k+M;if(M==v||r()[N>>>0]==0){if(O=Ee(O,N-O),q===void 0)var q=O;else q+="\0",q+=O;O=N+1}}else{for(q=Array(v),M=0;M<v;++M)q[M]=String.fromCharCode(r()[k+M>>>0]);q=q.join("")}return Je(w),q},toWireType:function(w,v){v instanceof ArrayBuffer&&(v=new Uint8Array(v));var k=typeof v=="string";if(!(k||v instanceof Uint8Array||v instanceof Uint8ClampedArray||v instanceof Int8Array))throw new nt("Cannot pass non-string to std::string");var O=h&&k?Kr(v):v.length,M=cr(4+O+1),N=M+4;if(s()[M>>>2>>>0]=O,h&&k)Ct(v,N,O+1);else if(k)for(k=0;k<O;++k){var q=v.charCodeAt(k);if(255<q)throw Je(N),new nt("String has UTF-16 code units that do not fit in 8 bits");r()[N+k>>>0]=q}else for(k=0;k<O;++k)r()[N+k>>>0]=v[k];return w!==null&&w.push(Je,M),M},argPackAdvance:st,readValueFromPointer:Jr,Db(w){Je(w)}})}var kn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,kh=(o,c)=>{for(var h=o>>1,w=h+c/2;!(h>=w)&&a()[h>>>0];)++h;if(32<(h<<=1)-o&&kn)return kn.decode(r().slice(o,h));for(h="",w=0;!(w>=c/2);++w){var v=i()[o+2*w>>>1>>>0];if(v==0)break;h+=String.fromCharCode(v)}return h},Th=(o,c,h)=>{if(h??=2147483647,2>h)return 0;var w=c;h=(h-=2)<2*o.length?h/2:o.length;for(var v=0;v<h;++v){var k=o.charCodeAt(v);i()[c>>>1>>>0]=k,c+=2}return i()[c>>>1>>>0]=0,c-w},Eh=o=>2*o.length,Ch=(o,c)=>{for(var h=0,w="";!(h>=c/4);){var v=n()[o+4*h>>>2>>>0];if(v==0)break;++h,65536<=v?(v-=65536,w+=String.fromCharCode(55296|v>>10,56320|1023&v)):w+=String.fromCharCode(v)}return w},Ih=(o,c,h)=>{if(c>>>=0,h??=2147483647,4>h)return 0;var w=c;h=w+h-4;for(var v=0;v<o.length;++v){var k=o.charCodeAt(v);if(55296<=k&&57343>=k&&(k=65536+((1023&k)<<10)|1023&o.charCodeAt(++v)),n()[c>>>2>>>0]=k,(c+=4)+4>h)break}return n()[c>>>2>>>0]=0,c-w},zh=o=>{for(var c=0,h=0;h<o.length;++h){var w=o.charCodeAt(h);55296<=w&&57343>=w&&++h,c+=4}return c};function Ah(o,c,h){if(o>>>=0,c>>>=0,h=Qe(h>>>=0),c===2)var w=kh,v=Th,k=Eh,O=M=>a()[M>>>1>>>0];else c===4&&(w=Ch,v=Ih,k=zh,O=M=>s()[M>>>2>>>0]);rt(o,{name:h,fromWireType:M=>{for(var N,q=s()[M>>>2>>>0],Y=M+4,ne=0;ne<=q;++ne){var pe=M+4+ne*c;ne!=q&&O(pe)!=0||(Y=w(Y,pe-Y),N===void 0?N=Y:(N+="\0",N+=Y),Y=pe+c)}return Je(M),N},toWireType:(M,N)=>{if(typeof N!="string")throw new nt(`Cannot pass non-string to C++ string type ${h}`);var q=k(N),Y=cr(4+q+c);return s()[Y>>>2>>>0]=q/c,v(N,Y+4,q+c),M!==null&&M.push(Je,Y),Y},argPackAdvance:st,readValueFromPointer:Jr,Db(M){Je(M)}})}function Oh(o,c){rt(o>>>=0,{Tb:!0,name:c=Qe(c>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var Rh=()=>1;function Bh(o){oi(o>>>0,!g,1,!$,131072,!1),tn()}var Tn=o=>{if(!Pe)try{if(o(),!(0<wt))try{y?hr(oe):Hr(oe)}catch(c){c instanceof jr||c=="unwind"||I(1,c)}}catch(c){c instanceof jr||c=="unwind"||I(1,c)}};function ei(o){o>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(n(),o>>>2,o).value.then(ar),o+=128,Atomics.store(n(),o>>>2,1))}var ar=()=>{var o=At();o&&(ei(o),Tn(rs))};function Mh(o,c){(o>>>=0)==c>>>0?setTimeout(ar):y?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=Ze[o])&&o.postMessage({cmd:"checkMailbox"})}var ti=[];function Ph(o,c,h,w,v){for(c>>>=0,w/=2,ti.length=w,h=v>>>0>>>3,v=0;v<w;v++)ti[v]=ke[h+2*v]?ke[h+2*v+1]:d()[h+2*v+1>>>0];return(c?Lr[c]:Tf[o])(...ti)}function Dh(o){o>>>=0,y?postMessage({cmd:"cleanupThread",thread:o}):en(Ze[o])}function Uh(o){}var ri=(o,c)=>{var h=Zr[o];if(h===void 0)throw o=Xn(o),h=Qe(o),Je(o),new nt(`${c} has unknown type ${h}`);return h},En=(o,c,h)=>{var w=[];return o=o.toWireType(w,h),w.length&&(s()[c>>>2>>>0]=Ue(w)),o};function Nh(o,c,h){return c>>>=0,h>>>=0,o=De(o>>>0),c=ri(c,"emval::as"),En(c,h,o)}var nr=o=>{try{o()}catch(c){Et(c)}},ot=0,Xe=null,Cn=0,sr=[],In={},zn={},Wh=0,ii=null,qh=[];function An(o){return(function(c){if(!Pe){if(ot===0){var h=!1,w=!1;c((v=0)=>{if(!Pe&&(Cn=v,h=!0,w)){ot=2,nr(()=>os(Xe)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),v=!1;try{var k=(function(){var N=n()[Xe+8>>>2>>>0];return N=K[zn[N]],--wt,N()})()}catch(N){k=N,v=!0}var O=!1;if(!Xe){var M=ii;M&&(ii=null,(v?M.reject:M.resolve)(k),O=!0)}if(v&&!O)throw k}}),w=!0,h||(ot=1,Xe=(function(){var v=cr(65548),k=v+12;s()[v>>>2>>>0]=k,s()[v+4>>>2>>>0]=k+65536,k=sr[0];var O=In[k];return O===void 0&&(O=Wh++,In[k]=O,zn[O]=k),k=O,n()[v+8>>>2>>>0]=k,v})(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),nr(()=>ns(Xe)))}else ot===2?(ot=0,nr(us),Je(Xe),Xe=null,qh.forEach(Tn)):Et(`invalid state: ${ot}`);return Cn}})(c=>{o().then(c)})}function Vh(o){return o>>>=0,An(()=>(o=De(o)).then(Ue))}var or=[];function Lh(o,c,h,w){return h>>>=0,w>>>=0,(o=or[o>>>0])(null,c=De(c>>>0),h,w)}var jh={},ur=o=>{var c=jh[o];return c===void 0?Qe(o):c};function Fh(o,c,h,w,v){return h>>>=0,w>>>=0,v>>>=0,(o=or[o>>>0])(c=De(c>>>0),c[h=ur(h)],w,v)}var On=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Gh(o){return(o>>>=0)==0?Ue(On()):(o=ur(o),Ue(On()[o]))}var Hh=o=>{var c=or.length;return or.push(o),c},Kh=(o,c)=>{for(var h=Array(o),w=0;w<o;++w)h[w]=ri(s()[c+4*w>>>2>>>0],"parameter "+w);return h},Rn=(o,c)=>Object.defineProperty(c,"name",{value:o});function Yh(o,c,h){var w=(c=Kh(o,c>>>0)).shift();o--;var v=`return function (obj, func, destructorsRef, args) {
`,k=0,O=[];h===0&&O.push("obj");for(var M=["retType"],N=[w],q=0;q<o;++q)O.push("arg"+q),M.push("argType"+q),N.push(c[q]),v+=`  var arg${q} = argType${q}.readValueFromPointer(args${k?"+"+k:""});
`,k+=c[q].argPackAdvance;return v+=`  var rv = ${h===1?"new func":"func.call"}(${O.join(", ")});
`,w.Tb||(M.push("emval_returnValue"),N.push(En),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M.push(v+`};
`),o=(function(Y){var ne=Function;if(!(ne instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof ne} which is not a function`);var pe=Rn(ne.name||"unknownFunctionName",function(){});return pe.prototype=ne.prototype,pe=new pe,(Y=ne.apply(pe,Y))instanceof Object?Y:pe})(M)(...N),h=`methodCaller<(${c.map(Y=>Y.name).join(", ")}) => ${w.name}>`,Hh(Rn(h,o))}function Zh(o){return o=ur(o>>>0),Ue(u[o])}function Qh(o,c){return c>>>=0,o=De(o>>>0),c=De(c),Ue(o[c])}function Xh(o){9<(o>>>=0)&&(it[o+1]+=1)}function Jh(){return Ue([])}function ef(o){o=De(o>>>0);for(var c=Array(o.length),h=0;h<o.length;h++)c[h]=o[h];return Ue(c)}function tf(o){return Ue(ur(o>>>0))}function rf(){return Ue({})}function af(o){for(var c=De(o>>>=0);c.length;){var h=c.pop();c.pop()(h)}Xr(o)}function nf(o,c,h){c>>>=0,h>>>=0,o=De(o>>>0),c=De(c),h=De(h),o[c]=h}function sf(o,c){return c>>>=0,o=(o=ri(o>>>0,"_emval_take_value")).readValueFromPointer(c),Ue(o)}function of(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),n()[c>>>2>>>0]=o.getUTCSeconds(),n()[c+4>>>2>>>0]=o.getUTCMinutes(),n()[c+8>>>2>>>0]=o.getUTCHours(),n()[c+12>>>2>>>0]=o.getUTCDate(),n()[c+16>>>2>>>0]=o.getUTCMonth(),n()[c+20>>>2>>>0]=o.getUTCFullYear()-1900,n()[c+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[c+28>>>2>>>0]=o}var It=o=>o%4==0&&(o%100!=0||o%400==0),Bn=[0,31,60,91,121,152,182,213,244,274,305,335],Mn=[0,31,59,90,120,151,181,212,243,273,304,334];function uf(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),n()[c>>>2>>>0]=o.getSeconds(),n()[c+4>>>2>>>0]=o.getMinutes(),n()[c+8>>>2>>>0]=o.getHours(),n()[c+12>>>2>>>0]=o.getDate(),n()[c+16>>>2>>>0]=o.getMonth(),n()[c+20>>>2>>>0]=o.getFullYear()-1900,n()[c+24>>>2>>>0]=o.getDay();var h=(It(o.getFullYear())?Bn:Mn)[o.getMonth()]+o.getDate()-1|0;n()[c+28>>>2>>>0]=h,n()[c+36>>>2>>>0]=-60*o.getTimezoneOffset(),h=new Date(o.getFullYear(),6,1).getTimezoneOffset();var w=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(h!=w&&o.getTimezoneOffset()==Math.min(w,h)),n()[c+32>>>2>>>0]=o}function lf(o){o>>>=0;var c=new Date(n()[o+20>>>2>>>0]+1900,n()[o+16>>>2>>>0],n()[o+12>>>2>>>0],n()[o+8>>>2>>>0],n()[o+4>>>2>>>0],n()[o>>>2>>>0],0),h=n()[o+32>>>2>>>0],w=c.getTimezoneOffset(),v=new Date(c.getFullYear(),6,1).getTimezoneOffset(),k=new Date(c.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(k,v);return 0>h?n()[o+32>>>2>>>0]=+(v!=k&&O==w):0<h!=(O==w)&&(v=Math.max(k,v),c.setTime(c.getTime()+6e4*((0<h?O:v)-w))),n()[o+24>>>2>>>0]=c.getDay(),h=(It(c.getFullYear())?Bn:Mn)[c.getMonth()]+c.getDate()-1|0,n()[o+28>>>2>>>0]=h,n()[o>>>2>>>0]=c.getSeconds(),n()[o+4>>>2>>>0]=c.getMinutes(),n()[o+8>>>2>>>0]=c.getHours(),n()[o+12>>>2>>>0]=c.getDate(),n()[o+16>>>2>>>0]=c.getMonth(),n()[o+20>>>2>>>0]=c.getYear(),o=c.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Pn(o,c,h,w,v,k,O){return y?ye(16,1,o,c,h,w,v,k,O):-52}function Dn(o,c,h,w,v,k){if(y)return ye(17,1,o,c,h,w,v,k)}function df(o,c,h,w){o>>>=0,c>>>=0,h>>>=0,w>>>=0;var v=new Date().getFullYear(),k=new Date(v,0,1),O=new Date(v,6,1);v=k.getTimezoneOffset();var M=O.getTimezoneOffset(),N=Math.max(v,M);s()[o>>>2>>>0]=60*N,n()[c>>>2>>>0]=+(v!=M),k=(o=q=>q.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(k),O=o(O),M<v?(Ct(k,h,17),Ct(O,w,17)):(Ct(k,w,17),Ct(O,h,17))}var ai=[],Un=(o,c)=>{ai.length=0;for(var h;h=r()[o++>>>0];){var w=h!=105;c+=(w&=h!=112)&&c%8?4:0,ai.push(h==112?s()[c>>>2>>>0]:h==106?ke[c>>>3]:h==105?n()[c>>>2>>>0]:d()[c>>>3>>>0]),c+=w?8:4}return ai};function pf(o,c,h){return o>>>=0,c=Un(c>>>0,h>>>0),Lr[o](...c)}function cf(o,c,h){return o>>>=0,c=Un(c>>>0,h>>>0),Lr[o](...c)}var hf=()=>{},ff=()=>Date.now();function mf(o,c){return Z(Ee(o>>>0,c>>>0))}var Nn,gf=()=>{throw wt+=1,"unwind"};function yf(){return 4294901760}Nn=()=>performance.timeOrigin+performance.now();var wf=()=>navigator.hardwareConcurrency;function $f(){return Et("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function _f(o){o>>>=0;var c=r().length;if(o<=c||4294901760<o)return!1;for(var h=1;4>=h;h*=2){var w=c*(1+.2/h);w=Math.min(w,o+100663296);var v=Math;w=Math.max(o,w);e:{v=(v.min.call(v,4294901760,w+(65536-w%65536)%65536)-L.buffer.byteLength+65535)/65536;try{L.grow(v),me();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}var lr=()=>(Et("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),zt={},Wn=o=>{o.forEach(c=>{var h=lr();h&&(zt[h]=c)})};function vf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Wn(o),zt.Pb=lr(),zt.ec=o,zt.Pb}function bf(o,c,h){if(o>>>=0,c>>>=0,zt.Pb==o)var w=zt.ec;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Wn(w);for(var v=3;w[v]&&lr()!=o;)++v;for(o=0;o<h&&w[o+v];++o)n()[c+4*o>>>2>>>0]=lr();return o}var ni,si={},qn=()=>{if(!ni){var o,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:E||"./this.program"};for(o in si)si[o]===void 0?delete c[o]:c[o]=si[o];var h=[];for(o in c)h.push(`${o}=${c[o]}`);ni=h}return ni};function Vn(o,c){if(y)return ye(18,1,o,c);o>>>=0,c>>>=0;var h=0;return qn().forEach((w,v)=>{var k=c+h;for(v=s()[o+4*v>>>2>>>0]=k,k=0;k<w.length;++k)t()[v++>>>0]=w.charCodeAt(k);t()[v>>>0]=0,h+=w.length+1}),0}function Ln(o,c){if(y)return ye(19,1,o,c);o>>>=0,c>>>=0;var h=qn();s()[o>>>2>>>0]=h.length;var w=0;return h.forEach(v=>w+=v.length+1),s()[c>>>2>>>0]=w,0}function jn(o){return y?ye(20,1,o):52}function Fn(o,c,h,w){return y?ye(21,1,o,c,h,w):52}function Gn(o,c,h,w){return y?ye(22,1,o,c,h,w):70}var xf=[null,[],[]];function Hn(o,c,h,w){if(y)return ye(23,1,o,c,h,w);c>>>=0,h>>>=0,w>>>=0;for(var v=0,k=0;k<h;k++){var O=s()[c>>>2>>>0],M=s()[c+4>>>2>>>0];c+=8;for(var N=0;N<M;N++){var q=r()[O+N>>>0],Y=xf[o];q===0||q===10?((o===1?X:Z)(un(Y,0)),Y.length=0):Y.push(q)}v+=M}return s()[w>>>2>>>0]=v,0}var Kn=[31,29,31,30,31,30,31,31,30,31,30,31],Yn=[31,28,31,30,31,30,31,31,30,31,30,31],Sf=(o,c)=>{t().set(o,c>>>0)};function Zn(o,c,h,w){function v(z,ae,we){for(z=typeof z=="number"?z.toString():z||"";z.length<ae;)z=we[0]+z;return z}function k(z,ae){return v(z,ae,"0")}function O(z,ae){function we(ds){return 0>ds?-1:0<ds?1:0}var _t;return(_t=we(z.getFullYear()-ae.getFullYear()))===0&&(_t=we(z.getMonth()-ae.getMonth()))===0&&(_t=we(z.getDate()-ae.getDate())),_t}function M(z){switch(z.getDay()){case 0:return new Date(z.getFullYear()-1,11,29);case 1:return z;case 2:return new Date(z.getFullYear(),0,3);case 3:return new Date(z.getFullYear(),0,2);case 4:return new Date(z.getFullYear(),0,1);case 5:return new Date(z.getFullYear()-1,11,31);case 6:return new Date(z.getFullYear()-1,11,30)}}function N(z){var ae=z.Bb;for(z=new Date(new Date(z.Cb+1900,0,1).getTime());0<ae;){var we=z.getMonth(),_t=(It(z.getFullYear())?Kn:Yn)[we];if(!(ae>_t-z.getDate())){z.setDate(z.getDate()+ae);break}ae-=_t-z.getDate()+1,z.setDate(1),11>we?z.setMonth(we+1):(z.setMonth(0),z.setFullYear(z.getFullYear()+1))}return we=new Date(z.getFullYear()+1,0,4),ae=M(new Date(z.getFullYear(),0,4)),we=M(we),0>=O(ae,z)?0>=O(we,z)?z.getFullYear()+1:z.getFullYear():z.getFullYear()-1}o>>>=0,c>>>=0,h>>>=0,w>>>=0;var q=s()[w+40>>>2>>>0];for(var Y in w={kc:n()[w>>>2>>>0],jc:n()[w+4>>>2>>>0],Hb:n()[w+8>>>2>>>0],Lb:n()[w+12>>>2>>>0],Ib:n()[w+16>>>2>>>0],Cb:n()[w+20>>>2>>>0],ub:n()[w+24>>>2>>>0],Bb:n()[w+28>>>2>>>0],rc:n()[w+32>>>2>>>0],ic:n()[w+36>>>2>>>0],lc:q?Ee(q):""},h=Ee(h),q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})h=h.replace(new RegExp(Y,"g"),q[Y]);var ne="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),pe="January February March April May June July August September October November December".split(" ");for(Y in q={"%a":z=>ne[z.ub].substring(0,3),"%A":z=>ne[z.ub],"%b":z=>pe[z.Ib].substring(0,3),"%B":z=>pe[z.Ib],"%C":z=>k((z.Cb+1900)/100|0,2),"%d":z=>k(z.Lb,2),"%e":z=>v(z.Lb,2," "),"%g":z=>N(z).toString().substring(2),"%G":N,"%H":z=>k(z.Hb,2),"%I":z=>((z=z.Hb)==0?z=12:12<z&&(z-=12),k(z,2)),"%j":z=>{for(var ae=0,we=0;we<=z.Ib-1;ae+=(It(z.Cb+1900)?Kn:Yn)[we++]);return k(z.Lb+ae,3)},"%m":z=>k(z.Ib+1,2),"%M":z=>k(z.jc,2),"%n":()=>`
`,"%p":z=>0<=z.Hb&&12>z.Hb?"AM":"PM","%S":z=>k(z.kc,2),"%t":()=>"	","%u":z=>z.ub||7,"%U":z=>k(Math.floor((z.Bb+7-z.ub)/7),2),"%V":z=>{var ae=Math.floor((z.Bb+7-(z.ub+6)%7)/7);if(2>=(z.ub+371-z.Bb-2)%7&&ae++,ae)ae==53&&((we=(z.ub+371-z.Bb)%7)==4||we==3&&It(z.Cb)||(ae=1));else{ae=52;var we=(z.ub+7-z.Bb-1)%7;(we==4||we==5&&It(z.Cb%400-1))&&ae++}return k(ae,2)},"%w":z=>z.ub,"%W":z=>k(Math.floor((z.Bb+7-(z.ub+6)%7)/7),2),"%y":z=>(z.Cb+1900).toString().substring(2),"%Y":z=>z.Cb+1900,"%z":z=>{var ae=0<=(z=z.ic);return z=Math.abs(z)/60,(ae?"+":"-")+("0000"+(z/60*100+z%60)).slice(-4)},"%Z":z=>z.lc,"%%":()=>"%"},h=h.replace(/%%/g,"\0\0"),q)h.includes(Y)&&(h=h.replace(new RegExp(Y,"g"),q[Y](w)));return Y=(function(z){var ae=Array(Kr(z)+1);return pn(z,ae,0,ae.length),ae})(h=h.replace(/\0\0/g,"%")),Y.length>c?0:(Sf(Y,o),Y.length-1)}function kf(o,c,h,w){return Zn(o>>>0,c>>>0,h>>>0,w>>>0)}y||(function(){for(var o=u.numThreads-1;o--;)an();Te.unshift(()=>{yt++,(function(c){y?c():Promise.all(at.map(rn)).then(c)})(()=>Fa())})})();for(var Qn=Array(256),dr=0;256>dr;++dr)Qn[dr]=String.fromCharCode(dr);xn=Qn,nt=u.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},u.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},it.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>it.length/2-5-Qr.length;var Tf=[Gr,Xa,nn,ln,dn,cn,hn,fn,mn,gn,yn,wn,$n,_n,vn,bn,Pn,Dn,Vn,Ln,jn,Fn,Gn,Hn],K=(function(){function o(h,w){return K=h.exports,K=(function(){var v=K,k={};for(let[O,M]of Object.entries(v))k[O]=typeof M=="function"?(...N)=>{sr.push(O);try{return M(...N)}finally{Pe||(sr.pop(),Xe&&ot===1&&sr.length===0&&(ot=0,wt+=1,nr(ss),typeof Fibers<"u"&&Fibers.sc()))}}:M;return k})(),K=(function(){var v=K,k=M=>N=>M(N)>>>0,O=M=>()=>M()>>>0;return(v=Object.assign({},v)).Ca=k(v.Ca),v.fb=O(v.fb),v.gb=k(v.gb),v.emscripten_main_runtime_thread_id=O(v.emscripten_main_runtime_thread_id),v.sb=k(v.sb),v.tb=O(v.tb),v})(),Ja.push(K.ib),Ye.unshift(K.Ba),de=w,Fa(),K}var c=Za();if(yt++,u.instantiateWasm)try{return u.instantiateWasm(c,o)}catch(h){Z(`Module.instantiateWasm callback failed with error: ${h}`),f(h)}return Vr||=u.locateFile?Ga("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",C):C+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href,(function(h,w){var v=Vr;return P||typeof WebAssembly.instantiateStreaming!="function"||Ga(v)||Ha(v)||typeof fetch!="function"?Ya(v,h,w):fetch(v,{credentials:"same-origin"}).then(k=>WebAssembly.instantiateStreaming(k,h).then(w,function(O){return Z(`wasm streaming compile failed: ${O}`),Z("falling back to ArrayBuffer instantiation"),Ya(v,h,w)}))})(c,function(h){o(h.instance,h.module)}).catch(f),{}})(),Xn=o=>(Xn=K.Ca)(o),Jn=()=>(Jn=K.Da)();u._OrtInit=(o,c)=>(u._OrtInit=K.Ea)(o,c),u._OrtGetLastError=(o,c)=>(u._OrtGetLastError=K.Fa)(o,c),u._OrtCreateSessionOptions=(o,c,h,w,v,k,O,M,N,q)=>(u._OrtCreateSessionOptions=K.Ga)(o,c,h,w,v,k,O,M,N,q),u._OrtAppendExecutionProvider=(o,c)=>(u._OrtAppendExecutionProvider=K.Ha)(o,c),u._OrtAddFreeDimensionOverride=(o,c,h)=>(u._OrtAddFreeDimensionOverride=K.Ia)(o,c,h),u._OrtAddSessionConfigEntry=(o,c,h)=>(u._OrtAddSessionConfigEntry=K.Ja)(o,c,h),u._OrtReleaseSessionOptions=o=>(u._OrtReleaseSessionOptions=K.Ka)(o),u._OrtCreateSession=(o,c,h)=>(u._OrtCreateSession=K.La)(o,c,h),u._OrtReleaseSession=o=>(u._OrtReleaseSession=K.Ma)(o),u._OrtGetInputOutputCount=(o,c,h)=>(u._OrtGetInputOutputCount=K.Na)(o,c,h),u._OrtGetInputName=(o,c)=>(u._OrtGetInputName=K.Oa)(o,c),u._OrtGetOutputName=(o,c)=>(u._OrtGetOutputName=K.Pa)(o,c),u._OrtFree=o=>(u._OrtFree=K.Qa)(o),u._OrtCreateTensor=(o,c,h,w,v,k)=>(u._OrtCreateTensor=K.Ra)(o,c,h,w,v,k),u._OrtGetTensorData=(o,c,h,w,v)=>(u._OrtGetTensorData=K.Sa)(o,c,h,w,v),u._OrtReleaseTensor=o=>(u._OrtReleaseTensor=K.Ta)(o),u._OrtCreateRunOptions=(o,c,h,w)=>(u._OrtCreateRunOptions=K.Ua)(o,c,h,w),u._OrtAddRunConfigEntry=(o,c,h)=>(u._OrtAddRunConfigEntry=K.Va)(o,c,h),u._OrtReleaseRunOptions=o=>(u._OrtReleaseRunOptions=K.Wa)(o),u._OrtCreateBinding=o=>(u._OrtCreateBinding=K.Xa)(o),u._OrtBindInput=(o,c,h)=>(u._OrtBindInput=K.Ya)(o,c,h),u._OrtBindOutput=(o,c,h,w)=>(u._OrtBindOutput=K.Za)(o,c,h,w),u._OrtClearBoundOutputs=o=>(u._OrtClearBoundOutputs=K._a)(o),u._OrtReleaseBinding=o=>(u._OrtReleaseBinding=K.$a)(o),u._OrtRunWithBinding=(o,c,h,w,v)=>(u._OrtRunWithBinding=K.ab)(o,c,h,w,v),u._OrtRun=(o,c,h,w,v,k,O,M)=>(u._OrtRun=K.bb)(o,c,h,w,v,k,O,M),u._OrtEndProfiling=o=>(u._OrtEndProfiling=K.cb)(o),u._JsepOutput=(o,c,h)=>(u._JsepOutput=K.db)(o,c,h),u._JsepGetNodeName=o=>(u._JsepGetNodeName=K.eb)(o);var pr,At=()=>(At=K.fb)(),cr=u._malloc=o=>(cr=u._malloc=K.gb)(o),Je=u._free=o=>(Je=u._free=K.hb)(o),oi=(o,c,h,w,v,k)=>(oi=K.kb)(o,c,h,w,v,k),es=()=>(es=K.lb)(),ts=(o,c,h,w,v)=>(ts=K.mb)(o,c,h,w,v),ui=o=>(ui=K.nb)(o),hr=o=>(hr=K.ob)(o),rs=()=>(rs=K.pb)(),is=(o,c)=>(is=K.qb)(o,c),fr=o=>(fr=K.rb)(o),li=o=>(li=K.sb)(o),di=()=>(di=K.tb)(),as=u.dynCall_ii=(o,c)=>(as=u.dynCall_ii=K.vb)(o,c),ns=o=>(ns=K.wb)(o),ss=()=>(ss=K.xb)(),os=o=>(os=K.yb)(o),us=()=>(us=K.zb)();function ls(){0<yt||(y?(p(u),y||ir(Ye),startWorker(u)):(ir(Te),0<yt||pr||(pr=!0,u.calledRun=!0,Pe||(y||ir(Ye),p(u),y||ir(rr)))))}return u.___start_em_js=882450,u.___stop_em_js=882672,u.stackSave=()=>di(),u.stackRestore=o=>fr(o),u.stackAlloc=o=>li(o),u.UTF8ToString=Ee,u.stringToUTF8=Ct,u.lengthBytesUTF8=Kr,Nt=function o(){pr||ls(),pr||(Nt=o)},ls(),m}),rd=yi,globalThis.self?.name==="em-pthread"&&yi()}),Rt,hs,fs,ms,wi,id,gs,ad,Ur=D(()=>{"use strict";_a(),Rt=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),hs=typeof location>"u"?void 0:location.origin,fs=(e,t)=>{try{let r=t??Rt;return(r?new URL(e,r):new URL(e)).origin===hs}catch{return!1}},ms=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},wi=(Hf(),Ir(Jl)).default,id=async()=>{if(!Rt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(fs(Rt))return[void 0,wi()];let e=await ms(Rt);return[e,wi(e)]},gs=(Kf(),Ir(td)).default,ad=async(e,t,r)=>[void 0,gs]}),$i,gr,qt,_i,ys,ws,va,Se,Tt=D(()=>{"use strict";Ur(),gr=!1,qt=!1,_i=!1,ys=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ws=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},va=async e=>{if(gr)return Promise.resolve();if(qt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(_i)throw new Error("previous call to 'initializeWebAssembly()' failed.");qt=!0;let t=e.initTimeout,r=e.numThreads;if(!ws())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=ys();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,l=s?.href??s,d=a?.wasm,p=d?.href??d,f=e.wasmBinary,[u,m]=await ad(l,n,r>1),$=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{$=!0,y()},t)})),g.push(new Promise((y,x)=>{let b={numThreads:r};f?b.wasmBinary=f:(p||n)&&(b.locateFile=(_,S)=>p??(n??S)+_),m(b).then(_=>{qt=!1,gr=!0,$i=_,y(),u&&URL.revokeObjectURL(u)},_=>{qt=!1,_i=!0,x(_)})})),await Promise.race(g),$)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if(gr&&$i)return $i;throw new Error("WebAssembly is not initialized yet.")}}),Ce,Ar,$e,ba=D(()=>{"use strict";Tt(),Ce=(e,t)=>{let r=Se(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Ar=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Ar(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},$e=e=>{let t=Se(),r=t.stackSave();try{let i=t.stackAlloc(8);t._OrtGetLastError(i,i+4);let a=t.HEAP32[i/4],n=t.HEAPU32[i/4+1],s=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(r)}}}),nd,Yf=D(()=>{"use strict";Tt(),ba(),nd=e=>{let t=Se(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ce(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&$e("Can't create run options."),e?.extra!==void 0&&Ar(e.extra,"",new WeakSet,(s,l)=>{let d=Ce(s,i),p=Ce(l,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&$e(`Can't set a run config entry: ${s} - ${l}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),$s,_s,vs,bs,sd,Zf=D(()=>{"use strict";Tt(),ba(),$s=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},_s=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},vs=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},bs=(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name;switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let s=i?.deviceType;if(s){let l=Ce("deviceType",r),d=Ce(s,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(a="JS",typeof i!="string"){let s=i;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=Ce("preferredLayout",r),d=Ce(s.preferredLayout,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let n=Ce(a,r);Se()._OrtAppendExecutionProvider(e,n)!==0&&$e(`Can't append execution provider: ${a}.`)}},sd=e=>{let t=Se(),r=0,i=[],a=e||{};vs(a);try{let n=$s(a.graphOptimizationLevel??"all"),s=_s(a.executionMode??"sequential"),l=typeof a.logId=="string"?Ce(a.logId,i):0,d=a.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof a.optimizedModelFilePath=="string"?Ce(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,d,p,f),r===0&&$e("Can't create session options."),a.executionProviders&&bs(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let u=Ce("enableGraphCapture",i),m=Ce(a.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,u,m)!==0&&$e(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[u,m]of Object.entries(a.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let $=Ce(u,i);t._OrtAddFreeDimensionOverride(r,$,m)!==0&&$e(`Can't set a free dimension override: ${u} - ${m}.`)}return a.extra!==void 0&&Ar(a.extra,"",new WeakSet,(u,m)=>{let $=Ce(u,i),g=Ce(m,i);t._OrtAddSessionConfigEntry(r,$,g)!==0&&$e(`Can't set a session config entry: ${u} - ${m}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r),i.forEach(s=>t._free(s)),n}}}),Yt,kt,Mt,xa,Or,Sa,ka,ta,Q=D(()=>{"use strict";Yt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},kt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Mt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},xa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Or=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Sa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ka=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",ta=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ta,od=D(()=>{"use strict";_a(),Ta=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let d=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await a.read();if(l)break;let p=d.byteLength;new Uint8Array(n,s,p).set(d),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),xs,Ss,ks,Ts,Ea,Es,ce,tt=D(()=>{"use strict";Q(),xs=["V","I","W","E","F"],Ss=(e,t)=>{console.log(`[${xs[e]},${new Date().toISOString()}]${t}`)},Ea=(e,t)=>{ks=e,Ts=t},Es=(e,t)=>{let r=Or(e),i=Or(ks);r>=i&&Ss(r,typeof t=="function"?t():t)},ce=(...e)=>{Ts&&Es(...e)}}),Ca,ud=D(()=>{"use strict";Q(),Ca=(e,t)=>new(xa(t))(e)}),Ia=D(()=>{"use strict"}),vi,yr,wr,Cs,Is,bi,ra,zs,ld,Qf=D(()=>{"use strict";tt(),Ia(),vi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),yr=[],wr=e=>Math.ceil(e/16)*16,Cs=e=>{for(let t=0;t<yr.length;t++){let r=yr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Is=1,bi=()=>Is++,ra=async(e,t,r,i)=>{let a=wr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let l=n.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{n.destroy()}},zs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of vi)yr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=wr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(s.originalSize!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,a)),l.unmap();let p=this.backend.getCommandEncoder();this.backend.endComputePass(),p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,n),ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(l)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=wr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=bi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Cs(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:bi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:e}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await ra(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=vi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},ld=(...e)=>new zs(...e)}),As,he,ve=D(()=>{"use strict";As=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new As(e)}),Os,Dt,A,Rr,dd,pd,cd,te=D(()=>{"use strict";Os=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Dt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let l=Os.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[n-2],s[n-1]]=l}for(let l=r?3:1;l<=n;l++){let d=i-l<0?1:e[i-l],p=a-l<0?1:t[a-l];if(d!==p&&d>1&&p>1)return;let f=Math.max(d,p);if(d&&p)s[n-l]=Math.max(d,p);else{if(f>1)return;s[n-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},A=class Er{static size(t){return Er.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Er.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Er.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=t[n]}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Rr=class Zt{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=i[l]||s[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,l){if(l){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Zt.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],i[d],a[d],n,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,i,a,n,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Zt.computeShapeHelper(t,r,d,i,a,n,s,l),d}static computeConvOutputShape(t,r,i,a,n,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Zt.computeShapeHelper(!1,t,d,i,a,n,s,l),d}static computeShapeHelper(t,r,i,a,n,s,l,d){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(Zt.adjustPadAndReturnShape(r[p+2],a[p],n[p],s[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,i,a,n,s,l,d){let p=i*(a-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return n[s]=0,n[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(d==="SAME_LOWER"?(f+1)/2:f/2),n[l]=f-n[s],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[l]-p)/r+1)}},dd=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,l;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let d=-1;if(i?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(n<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Dt.isValidBroadcast(a,[n,l]))throw new Error("gemm: invalid bias shape for broadcast");return[n,l,s]}},pd=-34028234663852886e22,cd=34028234663852886e22}),Ut,$r,xe,Ie,F,_e,ia,Pt,pt,G,_r,B,H,za,Rs,hd,Jt,re=D(()=>{"use strict";Q(),te(),Ut=64,$r=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},xe=(e,t=1)=>{let r=$r(e,t);return typeof r=="string"?r:r[0]},Ie=(e,t=1)=>{let r=$r(e,t);return typeof r=="string"?r:r[1]},F=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:A.computeStrides(r)})}),t},_e=e=>e%4===0?4:e%2===0?2:1,ia=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Pt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,pt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,G=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,_r=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=$r(t,a),f=typeof p=="string"?p:p[1],u=typeof p=="string"?p:p[0],m={indices:d,value:f,storage:u,tensor:t},$=R=>typeof R=="string"?R:`${R}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",x=`${y}${e}_shape`,b=`${y}${e}_strides`,_="";for(let R=0;R<s-1;R++)_+=`
    let dim${R} = current / ${G(b,R,s)};
    let rest${R} = current % ${G(b,R,s)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;_+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${_}
    return indices;
  }`,T=R=>(g.offsetToIndices=!0,s<2?R:`o2i_${e}(${R})`),E=[];if(s>=2)for(let R=s-1;R>=0;R--)E.push(`${G(b,R,s)} * (indices[${R}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=R=>(g.indicesToOffset=!0,s<2?R:`i2o_${e}(${R})`),P=(...R)=>s===0?"0u":`${m.indices}(${R.map($).join(",")})`,V=(R,U)=>s<2?`${R}`:`${G(R,U,s)}`,W=(R,U,ee)=>s<2?`${R}=${ee};`:`${G(R,U,s)}=${ee};`,X={},Z=(R,U)=>{g.broadcastedIndicesToOffset=!0;let ee=`${U.name}broadcastedIndicesTo${e}Offset`;if(ee in X)return`${ee}(${R})`;let fe=[];for(let be=s-1;be>=0;be--){let ke=U.indicesGet("outputIndices",be+U.rank-s);fe.push(`${V(b,be)} * (${ke} % ${V(x,be)})`)}return X[ee]=`fn ${ee}(outputIndices: ${U.type.indices}) -> u32 {
             return ${fe.length>0?fe.join("+"):"0u"};
           }`,`${ee}(${R})`},J=(R,U)=>(()=>{if(m.storage===m.value)return`${e}[${R}]=${U};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${U}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),se=R=>(()=>{if(m.storage===m.value)return`${e}[${R}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${R}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${R}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ue=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${f} {
    return ${se(`i2o_${e}(indices)`)};
  }`,L=s<2?"":(()=>{let R=l.map(ee=>`d${ee}: u32`).join(", "),U=l.map(ee=>`d${ee}`).join(", ");return`
  fn get_${e}(${R}) -> ${f} {
    return get_${e}ByIndices(${P(U)});
  }`})(),de=(...R)=>{if(R.length!==s)throw new Error(`indices length must be ${s}`);let U=R.map($).join(",");return s===0?se("0u"):s===1?se(U[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${U})`)},oe=R=>s<2?se(R):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${R})`),j=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${f}) {
    ${J(`i2o_${e}(indices)`,"value")}
  }`,ie=s<2?"":(()=>{let R=l.map(ee=>`d${ee}: u32`).join(", "),U=l.map(ee=>`d${ee}`).join(", ");return`
  fn set_${e}(${R}, value: ${f}) {
    set_${e}ByIndices(${P(U)}, value);
  }`})();return{impl:()=>{let R=[],U=!1;return g.offsetToIndices&&(R.push(S),U=!0),g.indicesToOffset&&(R.push(I),U=!0),g.broadcastedIndicesToOffset&&(Object.values(X).forEach(ee=>R.push(ee)),U=!0),g.set&&(R.push(ie),U=!0),g.setByIndices&&(R.push(j),U=!0),g.get&&(R.push(L),U=!0),g.getByIndices&&(R.push(ue),U=!0),!n&&U&&R.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${b} = ${m.indices}(${A.computeStrides(r).join(",")});`),R.join(`
`)},type:m,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:Z,indices:P,indicesGet:V,indicesSet:W,set:(...R)=>{if(R.length!==s+1)throw new Error(`indices length must be ${s}`);let U=R[s];if(typeof U!="string")throw new Error("value must be string");let ee=R.slice(0,s).map($).join(",");return s===0?J("0u",U):s===1?J(ee[0],U):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${ee}, ${U})`)},setByOffset:J,setByIndices:(R,U)=>s<2?J(R,U):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${U});`),get:de,getByOffset:se,getByIndices:oe,usage:i,name:e,strides:b,shape:x,rank:s}},B=(e,t,r,i=1)=>_r(e,t,r,"input",i),H=(e,t,r,i=1)=>_r(e,t,r,"output",i),za=(e,t,r,i=1)=>_r(e,t,r,"internal",i),Rs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ut){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},hd=(e,t)=>new Rs(e,t),Jt=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;a++){let n=r-1-a,s=e[n]||1;(t[t.length-1-a]||1)>1&&s===1&&i.unshift(n)}return i}}),Bs,xi,Ms,Ps,Ds,Me,fd,md,mt=D(()=>{"use strict";Q(),te(),ve(),re(),Bs=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},xi=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,Ms=(e,t)=>A.sortBasedOnPerm(e,xi(e.length,t)),Ps=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=r.indicesSet("a",e[n],`i[${n}]`);return a+="return a;}"},Ds=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Me=(e,t)=>{let r=e.dataType,i=e.dims.length,a=xi(i,t),n=Ms(e.dims,a),{newShape:s,newPerm:l}=Ds(e.dims,a),d=A.areEqual(l,[2,3,1]),p=A.areEqual(l,[3,1,2]),f=s.length===2&&l[0]>l[1]||d||p,u=f?s:e.dims,m=n;f&&(u=d?[s[0],s[1]*s[2]]:p?[s[0]*s[1],s[2]]:s,m=[u[1],u[0]]);let $=B("a",r,u.length),g=H("output",r,m.length),y=16,x;return f?x=b=>`
  ${b.registerUniform("output_size","u32").declareVariables($,g)}
  var<workgroup> tile : array<array<${g.type.value}, ${y+1}>, ${y}>;
  ${b.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${$.getByIndices(`${$.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${g.setByIndices(`${g.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:x=b=>`
  ${b.registerUniform("output_size","u32").declareVariables($,g)}

  ${Ps(a,i,$,g)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`,{name:f?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=A.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:f?{x:Math.ceil(m[1]/y),y:Math.ceil(m[0]/y)}:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...F(u,m)]}},getShaderSource:x}},fd=(e,t)=>{Bs(e.inputs),e.compute(Me(e.inputs[0],t.perm))},md=e=>he({perm:e.perm})}),Us,Ns,Ws,qs,Vs,Ls,js,Fs,Gs,Hs,qe,gd,yd,wd,$d,_d,vd,bd,xd,Sd,kd,Xf=D(()=>{"use strict";Q(),te(),re(),Aa(),mt(),Us={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ns={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ws={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},qs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Vs=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ls=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},js=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Fs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Gs=(e,t)=>{let r=[];if(!Fs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Hs=(e,t,r,i,a,n,s)=>{let l=r[0].dims,d=A.size(n),p=A.size(s),f=B("_A",r[0].dataType,l),u=H("output",a,n),m=32,$=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `;return{name:e,shaderCache:t,getShaderSource:g=>`
        ${g.registerUniform("reduceSize","u32").declareVariables(f,u)}
        ${$}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${g.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ws[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Us[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ns[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${u.setByOffset("outputIndex",`${i==="mean"?`${u.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${u.type.storage}(${qs[i]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},qe=(e,t,r,i)=>{let a=e.inputs.length===1?r:aa(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map(($,g)=>g));let s=A.normalizeAxes(n,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=Gs(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(Me(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=Vs(l.length,d.dims.length));let[f,u]=Ls(d.dims,l),m=f;a.keepDims&&(m=js(f,s)),e.compute(Hs(t,{hint:a.cacheKey,inputDependencies:["type"]},[d],i,e.inputs[0].dataType,m,u),{inputs:[d]})},gd=(e,t)=>{qe(e,"ReduceMeanShared",t,"mean")},yd=(e,t)=>{qe(e,"ReduceL1Shared",t,"l1")},wd=(e,t)=>{qe(e,"ReduceL2Shared",t,"l2")},$d=(e,t)=>{qe(e,"ReduceLogSumExpShared",t,"logSumExp")},_d=(e,t)=>{qe(e,"ReduceMaxShared",t,"max")},vd=(e,t)=>{qe(e,"ReduceMinShared",t,"min")},bd=(e,t)=>{qe(e,"ReduceProdShared",t,"prod")},xd=(e,t)=>{qe(e,"ReduceSumShared",t,"sum")},Sd=(e,t)=>{qe(e,"ReduceSumSquareShared",t,"sumSquare")},kd=(e,t)=>{qe(e,"ReduceLogSumShared",t,"logSum")}}),Ve,Ks,Br,aa,Le,Ys,Zs,Qs,Xs,Js,eo,to,ro,io,ao,je,Td,Ed,Cd,Id,zd,Ad,Od,Rd,Bd,Md,Aa=D(()=>{"use strict";Q(),te(),ve(),re(),Xf(),Ve=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ks=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Br=(e,t,r,i,a,n,s=!1,l=!1)=>{let d=[],p=r[0].dims,f=p.length,u=A.normalizeAxes(a,f),m=!l&&u.length===0;p.forEach((y,x)=>{m||u.indexOf(x)>=0?s&&d.push(1):d.push(y)});let $=d.length,g=A.size(d);return{name:e,shaderCache:t,getShaderSource:y=>{let x=[],b=B("_A",r[0].dataType,f),_=H("output",n,$),S=i(b,_,u),T=S[2];for(let E=0,I=0;E<f;E++)m||u.indexOf(E)>=0?(s&&I++,T=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${S[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${b.indicesSet("input_indices",E,`j${E}`)}
                  ${T}
                }`):(x.push(`${b.indicesSet("input_indices",E,_.indicesGet("output_indices",I))};`),I++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,_)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${T}
          ${S[3]}
          ${S.length===4?_.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...F(p,d)]})}},aa=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Le=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:aa(a,r);e.compute(Br(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Ks:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Ys=(e,t)=>{Ve(e.inputs),Le(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Zs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Qs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Xs=(e,t)=>{Ve(e.inputs),Le(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Js=(e,t)=>{Ve(e.inputs),Le(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},eo=(e,t)=>{Ve(e.inputs),Le(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},to=(e,t)=>{Ve(e.inputs),Le(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ro=(e,t)=>{Ve(e.inputs),Le(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},io=(e,t)=>{Ve(e.inputs),Le(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ao=(e,t)=>{Ve(e.inputs),Le(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},je=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},Td=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):gd(e,t)},Ed=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zs(e,t):yd(e,t)},Cd=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qs(e,t):wd(e,t)},Id=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xs(e,t):$d(e,t)},zd=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Js(e,t):_d(e,t)},Ad=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):vd(e,t)},Od=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):bd(e,t)},Rd=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):xd(e,t)},Bd=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Sd(e,t)},Md=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ys(e,t):kd(e,t)}}),Si,Pd,Dd,na,Jf=D(()=>{"use strict";Q(),ve(),Aa(),Si=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Pd=(e,t)=>{Si(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Br("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Dd=(e,t)=>{Si(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Br("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},na=e=>he(e)}),no,so,oo,uo,er,lo,Ud,Oa=D(()=>{"use strict";Q(),te(),Ia(),re(),no=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let u=a.dims[0]/3,m=u,$=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");u=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],$=t.qkvHiddenSizes[2]}let g=p;if(u!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==u+m+$)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(m!==$)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let x=g+y,b=-1,_=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:x,maxSequenceLength:b,inputHiddenSize:f,hiddenSize:u,vHiddenSize:$,headSize:Math.floor(u/t.numHeads),vHeadSize:Math.floor($/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},so=(e,t,r)=>{let i=_e(r),a=64,n=r/i;n<a&&(a=32);let s=Math.ceil(r/i/a),l=[{type:1,data:1/r},{type:12,data:n},{type:12,data:s}],d=xe(e.dataType,i),p=Ie(1,i),f=["type"],u=m=>{let $=H("x",e.dataType,e.dims,i),g=Ie(e.dataType),y=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${a}>;
  var<workgroup> thread_sum: array<f32, ${a}>;
  ${m.registerUniforms(y).declareVariables($)}
  ${m.mainStart([a,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${a}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${p}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${p}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(i){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${a}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${p}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${p}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(i){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${a}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${$.type.value}(${g}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${p}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${a};${d};${i}`,inputDependencies:f},getShaderSource:u,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:l})}},oo=(e,t,r,i,a,n,s,l)=>{let d=l+n.kvSequenceLength,p=[n.batchSize,n.numHeads,n.sequenceLength,d],f=n.kvNumHeads===void 0&&e>1&&i,u=f?[n.batchSize,n.numHeads,d,n.headSize]:void 0,m=s.scale===0?1/Math.sqrt(n.headSize):s.scale,$=_e(n.headSize),g=n.headSize/$,y=12,x={x:Math.ceil(d/y),y:Math.ceil(n.sequenceLength/y),z:n.batchSize*n.numHeads},b=[{type:12,data:n.sequenceLength},{type:12,data:g},{type:12,data:d},{type:12,data:n.numHeads},{type:1,data:m},{type:12,data:l},{type:12,data:n.kvSequenceLength}],_=f&&i&&A.size(i.dims)>0,S=["type","type"];_&&S.push("type"),a&&S.push("type");let T=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&T.push({dims:u,dataType:t.dataType,gpuDataType:0});let E=I=>{let C=B("q",t.dataType,t.dims,$),P=B("key",r.dataType,r.dims,$),V=[C,P];if(_){let se=B("past_key",i.dataType,i.dims,$);V.push(se)}a&&V.push(B("attention_bias",a.dataType,a.dims));let W=H("output",t.dataType,p),X=[W];f&&X.push(H("present_key",t.dataType,u,$));let Z=Ie(1,$),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${y}u;

  var<workgroup> tileQ: array<${C.type.storage}, ${y*y}>;
  var<workgroup> tileK: array<${C.type.storage}, ${y*y}>;
  ${I.registerUniforms(J).declareVariables(...V,...X)}
  ${I.mainStart([y,y,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${_&&f?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${f?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${_&&f?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${f?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${a!==void 0};${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:T,dispatchGroup:x,programUniforms:b}),getShaderSource:E}},uo=(e,t,r,i,a,n)=>{let s=n+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=a.kvNumHeads==null&&e>1&&i,f=p?[a.batchSize,a.numHeads,s,a.headSize]:void 0,u=[a.batchSize,a.sequenceLength,d],m=12,$={x:Math.ceil(a.vHeadSize/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},g=[{type:12,data:a.sequenceLength},{type:12,data:s},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:d},{type:12,data:n},{type:12,data:a.kvSequenceLength}],y=p&&i&&A.size(i.dims)>0,x=["type","type"];y&&x.push("type");let b=[{dims:u,dataType:t.dataType,gpuDataType:0}];p&&b.push({dims:f,dataType:t.dataType,gpuDataType:0});let _=S=>{let T=B("probs",t.dataType,t.dims),E=B("v",r.dataType,r.dims),I=[T,E];y&&I.push(B("past_value",i.dataType,i.dims));let C=[H("output",t.dataType,u)];p&&C.push(H("present_value",t.dataType,f));let P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${m}u;
  var<workgroup> tileQ: array<${T.type.value}, ${m*m}>;
  var<workgroup> tileK: array<${T.type.value}, ${m*m}>;
  ${S.registerUniforms(P).declareVariables(...I,...C)}
  ${S.mainStart([m,m,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${y&&p?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${p?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&p?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${p?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:b,dispatchGroup:$,programUniforms:g}),getShaderSource:_}},er=(e,t,r,i,a,n,s,l,d,p,f)=>{let u=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),m=p.kvNumHeads!==void 0||u>1?p.pastSequenceLength:0,$=m+p.kvSequenceLength,g=d&&A.size(d.dims)>0?d:void 0,y=[t,r];p.kvNumHeads===void 0&&u>1&&s&&A.size(s.dims)>0&&y.push(s),g&&y.push(g);let x=e.compute(oo(u,t,r,s,g,p,f,m),{inputs:y,outputs:p.kvNumHeads===void 0&&u>1?[-1,1]:[-1]})[0];e.compute(so(x,p.batchSize*p.numHeads*p.sequenceLength,$),{inputs:[x],outputs:[]});let b=[x,i];p.kvNumHeads===void 0&&u>1&&l&&A.size(l.dims)>0&&b.push(l),e.compute(uo(u,x,i,l,p,m),{inputs:b,outputs:p.kvNumHeads===void 0&&u>1?[0,2]:[0]})},lo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=u=>{let m=H("output_q",d[0].dataType,r),$=H("output_k",d[0].dataType,r),g=H("output_v",d[0].dataType,r),y=B("input",d[0].dataType,d[0].dims),x=B("weight",d[1].dataType,d[1].dims),b=B("bias",d[2].dataType,d[2].dims),_=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${_}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${_}, ${s*s}>;
  var<workgroup> tileWeightK: array<${_}, ${s*s}>;
  var<workgroup> tileWeightV: array<${_}, ${s*s}>;
  ${u.registerUniforms(S).declareVariables(y,x,b,m,$,g)}
  ${u.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:f},{inputs:d,outputs:[-1,-1,-1]})},Ud=(e,t)=>{let r=no(e.inputs,t),[i,a,n]=lo(e,r);return er(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),po,co,ho,Nd,em=D(()=>{"use strict";He(),Q(),te(),ve(),re(),po=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((l,d)=>{if(l!==i[d])throw new Error(`${n}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},co=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?_e(n[n.length-1]):1,l=a==="NHWC"&&n.length>1?s:1,d=A.size(n)/s,p=i,f=p?n.length:n,u=B("x",e[0].dataType,e[0].dims,s),m=B("scale",e[1].dataType,e[1].dims,l),$=B("bias",e[2].dataType,e[2].dims,l),g=B("inputMean",e[3].dataType,e[3].dims,l),y=B("inputVar",e[4].dataType,e[4].dims,l),x=H("y",e[0].dataType,f,s),b=()=>{let S="";if(i)S=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let T=1;T<m.rank;T++)S+=`cIndices[${T}] = outputIndices[${T}];`;S+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return S},_=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(u,m,$,g,y,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${$.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${u.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...F(n)]:[{type:12,data:d}]})}},ho=e=>he(e),Nd=(e,t)=>{let{inputs:r,outputCount:i}=e,a=ho({...t,outputCount:i});if(ge.webgpu.validateInputContent&&po(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(co(r,a))}}),fo,mo,Wd,tm=D(()=>{"use strict";te(),re(),fo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},mo=e=>{let t=e[0].dims,r=e[0].dims[2],i=A.size(t)/4,a=e[0].dataType,n=B("input",a,t,4),s=B("bias",a,[r],4),l=B("residual",a,t,4),d=H("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},Wd=e=>{fo(e.inputs),e.compute(mo(e.inputs))}}),go,le,qd,Vd,Ld,jd,Fd,Gd,Hd,Kd,Yd,yo,Zd,Qd,Xd,Jd,Qt,ep,Cr,tp,rp,ip,ap,np,sp,op,up,lp,dp,pp,cp,hp,fp,mp,gp,ki,yp,sa,oa,wp,$p,_p,wo,$o,vp,Ra=D(()=>{"use strict";Q(),te(),ve(),re(),go=(e,t,r,i,a,n,s)=>{let l=Math.ceil(t/4),d="";typeof a=="string"?d=`${a}(a)`:d=a("a");let p=B("inputData",r,[l],4),f=H("outputData",i,[l],4),u=[{name:"vec_size",type:"u32"}];return s&&u.push(...s),`
      ${e.registerUniforms(u).declareVariables(p,f)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",d)}
  }`},le=(e,t,r,i,a,n=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(A.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>go(p,A.size(e.dims),e.dataType,n,r,i,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(A.size(p[0].dims)/64/4)},programUniforms:d})}},qd=e=>{e.compute(le(e.inputs[0],"Abs","abs"))},Vd=e=>{e.compute(le(e.inputs[0],"Acos","acos"))},Ld=e=>{e.compute(le(e.inputs[0],"Acosh","acosh"))},jd=e=>{e.compute(le(e.inputs[0],"Asin","asin"))},Fd=e=>{e.compute(le(e.inputs[0],"Asinh","asinh"))},Gd=e=>{e.compute(le(e.inputs[0],"Atan","atan"))},Hd=e=>{e.compute(le(e.inputs[0],"Atanh","atanh"))},Kd=e=>he(e),Yd=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(le(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},yo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Zd=(e,t)=>{let r=t||yo(e.inputs),i=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Qd=e=>{e.compute(le(e.inputs[0],"Ceil","ceil"))},Xd=e=>{e.compute(le(e.inputs[0],"Cos","cos"))},Jd=e=>{e.compute(le(e.inputs[0],"Cosh","cosh"))},Qt=e=>he(e),ep=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Cr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,tp=e=>{let t=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Cr(t)))},rp=e=>{e.compute(le(e.inputs[0],"Exp","exp"))},ip=e=>{e.compute(le(e.inputs[0],"Floor","floor"))},ap=e=>{let t=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Cr(t)))},np=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},sp=e=>{e.compute(le(e.inputs[0],"Not",t=>`!${t}`))},op=e=>{e.compute(le(e.inputs[0],"Neg",t=>`-${t}`))},up=e=>{e.compute(le(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},lp=e=>{let t=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},dp=e=>{e.compute(le(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},pp=e=>he(e),cp=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},hp=e=>{e.compute(le(e.inputs[0],"Sin","sin"))},fp=e=>{e.compute(le(e.inputs[0],"Sinh","sinh"))},mp=e=>{e.compute(le(e.inputs[0],"Sqrt","sqrt"))},gp=e=>{e.compute(le(e.inputs[0],"Tan","tan"))},ki=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,yp=e=>{e.compute(le(e.inputs[0],"Tanh",ki))},sa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ki("v")};
}
`,oa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,wp=e=>{let t=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"FastGelu",oa,sa(t),void 0,e.inputs[0].dataType))},$p=(e,t)=>{let r=Ie(e.inputs[0].dataType);return e.compute(le(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},_p=e=>{e.compute(le(e.inputs[0],"Log","log"))},wo=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,$o=e=>`quick_gelu_impl(${e})`,vp=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(le(e.inputs[0],"QuickGelu",$o,wo(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),_o,vo,bp,rm=D(()=>{"use strict";te(),re(),Ra(),_o=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vo=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),a=H("output",e[0].dataType,t,4),n=A.size(t)/4,s=xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,a)}

  ${Cr(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},bp=e=>{_o(e.inputs),e.compute(vo(e.inputs))}}),bo,xo,Fe,xp,Sp,kp,Tp,Ep,Cp,Ip,zp,Ap,Op,im=D(()=>{"use strict";Q(),te(),re(),bo=(e,t,r,i,a,n,s,l,d,p,f,u)=>{let m,$;typeof l=="string"?m=$=(_,S)=>`${l}((${_}),(${S}))`:typeof l=="function"?m=$=l:(m=l.scalar,$=l.vector);let g=H("outputData",f,i.length,4),y=B("aData",d,t.length,4),x=B("bData",p,r.length,4),b;if(a)if(n){let _=A.size(t)===1,S=A.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;_||S?b=g.setByOffset("global_idx",$(_?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):b=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",$(s||T?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=g.setByOffset("global_idx",$(y.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(S,T,E="")=>{let I=`aData[indexA${T}][componentA${T}]`,C=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${g.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${y.broadcastedIndicesToOffset(`outputIndices${T}`,g)};
            let offsetB${T} = ${x.broadcastedIndicesToOffset(`outputIndices${T}`,g)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${S}[${T}] = ${E}(${m(I,C)});
          `};f===9?b=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:b=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,x,g)}

        ${u??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},xo=(e,t,r,i,a,n,s=r.dataType)=>{let l=!A.areEqual(r.dims,i.dims),d=r.dims,p=A.size(r.dims),f=!1,u=!1,m=[l];if(l){let $=Dt.calcShape(r.dims,i.dims,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");d=$,p=A.size(d);let g=A.size(r.dims)===1,y=A.size(i.dims)===1,x=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,b=i.dims.length>0&&i.dims[i.dims.length-1]%4===0;m.push(g),m.push(y),m.push(x),m.push(b);let _=1;for(let S=1;S<d.length;S++){let T=r.dims[r.dims.length-S]??1,E=i.dims[i.dims.length-S]??1;if(T===E)_*=T;else break}_%4===0?(u=!0,f=!0):(g||y||x||b)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>bo($,r.dims,i.dims,d,f,l,u,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(A.size(d)/4)},...F(r.dims,i.dims,d)]})}},Fe=(e,t,r,i,a,n)=>{e.compute(xo(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},xp=e=>{Fe(e,"Add",(t,r)=>`${t}+${r}`)},Sp=e=>{Fe(e,"Div",(t,r)=>`${t}/${r}`)},kp=e=>{Fe(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Tp=e=>{Fe(e,"Mul",(t,r)=>`${t}*${r}`)},Ep=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Fe(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Cp=e=>{Fe(e,"Sub",(t,r)=>`${t}-${r}`)},Ip=e=>{Fe(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},zp=e=>{Fe(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Ap=e=>{Fe(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Op=e=>{Fe(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),So,ko,To,Eo,Rp,Bp,am=D(()=>{"use strict";Q(),te(),ve(),re(),So=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},ko=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,To=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Eo=(e,t,r,i)=>{let a=A.size(r),n=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],f=[{type:12,data:a}];for(let y=0;y<e.length;++y)l+=e[y].dims[t],n[y]=l,p.push(e[y].dims.length),s[y]=B(`input${y}`,i,p[y]),d.push("rank"),f.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)f.push(...F(e[y].dims));f.push(...F(r));let u=H("output",i,r.length),m=u.indicesGet("indices",t),$=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)y.registerUniform(`sizeInConcatAxis${x}`,"u32");return y.declareVariables(...s,u)})()}

  ${ko(n.length,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${u.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${$});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${To(s,u)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:g}},Rp=(e,t)=>{let r=e.inputs,i=r[0].dims,a=A.normalizeAxis(t.axis,i.length);So(r,a);let n=i.slice();n[a]=r.reduce((l,d)=>l+(d.dims.length>a?d.dims[a]:0),0);let s=r.filter(l=>A.size(l.dims)>0);e.compute(Eo(s,a,n,r[0].dataType),{inputs:s})},Bp=e=>he({axis:e.axis})}),ct,ht,ft,Ba,gt=D(()=>{"use strict";Q(),te(),ct=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ht=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ft=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ba=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[pd,cd];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ze,Ma,Nr=D(()=>{"use strict";ze=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Ma=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Pa,Mp=D(()=>{"use strict";Pa=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Co,Io,Mr,Ti,zo,Pr,Ao,Da,Wr=D(()=>{"use strict";Q(),te(),re(),gt(),Nr(),Co=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Io=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Mr=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],f=a?d:n,u=a?n:d,m=f/t[0],$=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&f%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${f/m}>, ${u}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${$};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Co(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Io(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ti=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,zo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Pr=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],u=a?p:n,m=a?n:p;if(!(m%t[1]===0&&u%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let $=m/t[1],g=u/t[0],y=n/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          ${Ti(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${$};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ti(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${zo(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${u}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Ao=(e,t,r,i,a,n=!1)=>{let[s,l,d]=a,[p,f,u,m]=i,$=Jt(s,d),g=Jt(l,d),y=xe(i[0].type.tensor),x=()=>{let _=f.rank,S=p.rank,T=`var aIndices: ${f.type.indices};`;for(let E=_-2-1,I=S-1;E>=0;E--,I--)T+=`
aIndices[${E}] = ${S>1?`batchIndices[${I}]`:"batchIndices"};`;return $.forEach(E=>{T+=`
aIndices[${E}] = 0;`}),T+=`
aIndices[${_-2}] = u32(row);
                   aIndices[${_-1}] = u32(colIn);`,T},b=()=>{let _=u.rank,S=p.rank,T=`var bIndices: ${u.type.indices};`;for(let E=_-2-1,I=S-1;E>=0;E--,I--)T+=`
bIndices[${E}] = ${S>1?`batchIndices[${I}]`:"batchIndices"};`;return g.forEach(E=>{T+=`
bIndices[${E}] = 0;`}),T+=`
bIndices[${_-2}] = u32(row);
                   bIndices[${_-1}] = u32(colIn);`,T};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${ze(e,y)} {
      var value = ${ze(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${x()}
        value = ${f.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${ze(e,y)} {
      var value = ${ze(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${b()}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ze(e,y)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${ze(e,y)}(bias[row])`};`:""}
        ${r}
        ${m.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Da=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),f=i?i.slice(0,-2):r.slice(0,-2),u=A.size(f),m=s[s.length-2],$=s[s.length-1],g=l[l.length-1],y=$%4===0&&g%4===0,x=m<=8?[4,1,1]:[4,4,1],b=[8,8,1],_=[Math.ceil(g/b[0]/x[0]),Math.ceil(m/b[1]/x[1]),Math.ceil(u/b[2]/x[2])],S=y?4:1,T=[...d,m,$/S],E=T.length,I=[...p,$,g/S],C=I.length,P=[u,m,g/S],V=[{type:6,data:m},{type:6,data:g},{type:6,data:$}];ht(t,V),V.push(...F(f,T,I));let W=["rank","rank"],X=e.length>2;X&&(V.push(...F(e[2].dims)),W.push("rank")),V.push(...F(P));let Z=J=>{let se=f.length,ue=za("batchDims",e[0].dataType,se,1),L=xe(e[0].dataType),de=B("a",e[0].dataType,E,S),oe=B("b",e[1].dataType,C,S),j=H("result",e[0].dataType,P.length,S),ie=[de,oe];if(X){let be=a?S:1;ie.push(B("bias",e[2].dataType,e[2].dims.length,be))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ft(t,R);let U=xe(j.type.tensor),ee=ct(t,j.type.value,U),fe=Ao(S,X,ee,[ue,de,oe,j],[d,p,f],a);return`
  ${J.registerUniforms(R).registerInternalVariables(ue).declareVariables(...ie,j)}
  ${fe}
  ${y?Mr(x,b,L,ue):Pr(x,b,L,ue)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${y};${a}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:V}),getShaderSource:Z}}}),Oo,Pp,nm=D(()=>{"use strict";Q(),tt(),re(),gt(),Nr(),Mp(),Wr(),Oo=(e,t,r,i,a=!1,n,s=4,l=4,d=4,p="f32")=>{let f=V=>{switch(V){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},u=V=>{switch(V){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,$=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",b=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${ze(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${ze(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${ze(s,p)}(0.0);`,T=`${u(l)}`,E=ze(d,p),I=ze(e?s:l,p),C=ze(e?l:s,p),P=ct(n,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${$}
      ${Ma(a)}
      ${P}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Pp=(e,t,r,i,a,n,s,l,d)=>{let p=t.format==="NHWC",f=p?e[0].dims[3]:e[0].dims[1],u=r[0],m=p?r[2]:r[3],$=p?r[1]:r[2],g=p?r[3]:r[1],y=p&&(f%4===0||f%3===0)&&g%4===0,x=p?g:m*$,b=p?m*$:g,_=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(x/_[0]/S[0]),Math.ceil(b/_[1]/S[1]),Math.ceil(u/_[2]/S[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let E=y?p&&f%4!==0?3:4:1,I=_[1]*S[1],C=_[0]*S[0],P=Math.max(_[0]*E,_[1]),V=i%I===0,W=a%C===0,X=n%P===0,Z=y?[E,4,4]:[1,1,1],J=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ht(t,J),J.push(...F(e[0].dims,e[1].dims));let se=["rank","rank"];s&&(J.push(...F(e[2].dims)),se.push("rank")),J.push(...F(r));let ue=L=>{let de=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ft(t,de);let oe=y?4:1,j=xe(e[0].dataType),ie=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${j}>`:j}) {
        result[flatIndex] = ${y?`vec4<${j}>`:j}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${j}>`:j}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=B("x",e[0].dataType,e[0].dims.length,E===3?1:E),U=B("w",e[1].dataType,e[1].dims.length,oe),ee=[R,U],fe=H("result",e[0].dataType,r.length,oe);if(s){let be=B("bias",e[2].dataType,e[2].dims.length,oe);ee.push(be),ie+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${j}>`:j} {
          return bias[coords.${p?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Pa("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${L.registerUniforms(de).declareVariables(...ee,fe)}
        ${ie}
        ${Oo(p,V,W,X,s,t,Z[0],Z[1],Z[2],j)}
        ${y?Mr(S,_,j,void 0,!p,P):Pr(S,_,j,void 0,!p,P,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${V};${W};${X};${I};${C};${P}`,inputDependencies:se},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:J}),getShaderSource:ue}}}),Ro,Ei,Vt,Bo,Ci,Mo,Dp,Up,sm=D(()=>{"use strict";Q(),tt(),te(),re(),gt(),Nr(),Ro=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ei=e=>typeof e=="number"?[e,e,e]:e,Vt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Bo=(e,t,r,i=1)=>{let a=Vt(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Ci=(e,t,r,i,a)=>{a==null&&(a=Bo(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Mo=(e,t,r,i,a,n,s,l,d,p)=>{let f,u,m,$;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Ci([t,r,i,1],[l,d,p],1,[a,n,s],e);u=g[0],m=g[1],$=g[2]}else if(Array.isArray(e)){if(!e.every((y,x,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Ci([t,r,i,1],[l,d,p],1,[a,n,s],e[0]);u=g[0],m=g[1],$=g[2]}else if(e==="SAME_UPPER"){u=Math.ceil(t/a),m=Math.ceil(r/n),$=Math.ceil(i/s);let g=(u-1)*a+l-t,y=(m-1)*n+d-r,x=($-1)*s+p-i,b=Math.floor(g/2),_=g-b,S=Math.floor(y/2),T=y-S,E=Math.floor(x/2),I=x-E;f={top:S,bottom:T,left:E,right:I,front:b,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:u,outHeight:m,outWidth:$}},Dp=(e,t,r,i,a,n=!1,s="channelsLast")=>{let l,d,p,f,u;if(s==="channelsLast")[l,d,p,f,u]=e;else if(s==="channelsFirst")[l,u,d,p,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,$,g,y]=t,[x,b,_]=Ei(r),[S,T,E]=Ei(i),I=Vt($,S),C=Vt(g,T),P=Vt(y,E),{padInfo:V,outDepth:W,outHeight:X,outWidth:Z}=Mo(a,d,p,f,x,b,_,I,C,P),J=n?m*u:m,se=[0,0,0,0,0];return s==="channelsFirst"?se=[l,J,W,X,Z]:s==="channelsLast"&&(se=[l,W,X,Z,J]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:f,inChannels:u,outDepth:W,outHeight:X,outWidth:Z,outChannels:J,padInfo:V,strideDepth:x,strideHeight:b,strideWidth:_,filterDepth:$,filterHeight:g,filterWidth:y,effectiveFilterDepth:I,effectiveFilterHeight:C,effectiveFilterWidth:P,dilationDepth:S,dilationHeight:T,dilationWidth:E,inShape:e,outShape:se,filterShape:t}},Up=(e,t,r,i,a,n)=>{let s=n==="channelsLast",l=s?e[0].dims[3]:e[0].dims[1],d=!1,p=[64,1,1],f={x:r.map((_,S)=>S)},u=[Math.ceil(Ro(f.x.map(_=>r[_]))/p[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let m=d?s&&l%4!==0?3:4:1,$=A.size(r),g=[{type:12,data:$},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];ht(t,g),g.push(...F(e[0].dims,e[1].dims));let y=["rank","rank"],x=e.length===3;x&&(g.push(...F(e[2].dims)),y.push("rank")),g.push(...F(r));let b=_=>{let S=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ft(t,S);let T=d?4:1,E=xe(e[0].dataType),I=B("x",e[0].dataType,e[0].dims.length,m===3?1:m),C=B("W",e[1].dataType,e[1].dims.length,T),P=[I,C],V=H("result",e[0].dataType,r.length,T),W="";if(x){let J=B("bias",e[2].dataType,e[2].dims.length,T);P.push(J),W+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${d?`vec4<${E}>`:E} {
          return bias[${s?G("coords",4,5):G("coords",1,5)}${d?"/ 4":""}];
        }`}let X=ze(m,E),Z=ct(t,X,E);return`
            ${W}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${_.registerUniforms(S).declareVariables(...P,V)}
          ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${V.offsetToIndices("global_idx")};
              let batch = ${G("coords",0,I.rank)};
              let d2 = ${s?G("coords",I.rank-1,I.rank):G("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${s?G("coords",1,I.rank):G("coords",2,I.rank)},
              ${s?G("coords",2,I.rank):G("coords",3,I.rank)},
              ${s?G("coords",3,I.rank):G("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?G("uniforms.x_shape",1,I.rank):G("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${s?G("uniforms.x_shape",2,I.rank):G("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${s?G("uniforms.x_shape",3,I.rank):G("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${s?G("uniforms.x_shape",4,I.rank):G("uniforms.x_shape",1,I.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${x?"value = value + getBiasByOutputCoords(coords)":""};
              ${Z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${m};${x}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:g}),getShaderSource:b}}}),Np,Wp,om=D(()=>{"use strict";Q(),te(),re(),gt(),Np=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],f=p/t.group,u=d&&f>=4?_e(p):1,m=A.size(r)/u,$=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];ht(t,$),$.push(...F(s,[l[0],l[1],l[2],l[3]/u]));let g=a?["rank","rank","rank"]:["rank","rank"];$.push(...F([r[0],r[1],r[2],r[3]/u]));let y=x=>{let b=H("output",e[0].dataType,r.length,u),_=xe(b.type.tensor),S=ct(t,b.type.value,_),T=B("x",e[0].dataType,s.length),E=B("w",e[1].dataType,l.length,u),I=[T,E];a&&I.push(B("b",e[2].dataType,e[2].dims,u));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ft(t,C);let P=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(C).declareVariables(...I,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${u} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${P}
    ${n}
    ${S}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${u}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:$}),getShaderSource:y}},Wp=(e,t,r,i)=>{let a=e.length>2,n=_e(r[3]),s=_e(r[2]),l=A.size(r)/n/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],f=[r[0],r[1],r[2],r[3]/n],u=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ht(t,u),u.push(...F(d,p,f));let m=(s-1)*t.strides[1]+p[1],$=g=>{let y=H("output",e[0].dataType,f.length,n),x=xe(y.type.tensor),b=ct(t,y.type.value,x),_=B("x",e[0].dataType,d.length,n),S=B("w",e[1].dataType,p.length,n),T=[_,S];a&&T.push(B("b",e[2].dataType,e[2].dims,n));let E=a?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ft(t,I),`
  ${g.registerUniforms(I).declareVariables(...T,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${m}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:$}}}),ua,Po,qp,Vp=D(()=>{"use strict";Q(),te(),Wr(),re(),gt(),ua=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],f=s[s.length-1],u=_e(p),m=_e(f),$=_e(d),g=A.size(r)/u/$,y=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),b=[A.size(x),d,p],_=[{type:12,data:g},{type:12,data:d},{type:12,data:p},{type:12,data:f}];ht(t,_),_.push(...F(x,s,l)),y&&_.push(...F(e[2].dims)),_.push(...F(b));let S=T=>{let E=za("batch_dims",e[0].dataType,x.length),I=B("a",e[0].dataType,s.length,m),C=B("b",e[1].dataType,l.length,u),P=H("output",e[0].dataType,b.length,u),V=xe(P.type.tensor),W=ct(t,P.type.value,V),X=[I,C],Z="";if(y){let ie=a?u:1;X.push(B("bias",e[2].dataType,e[2].dims.length,ie)),Z=`${a?`value += bias[col / ${ie}];`:`value += ${P.type.value}(bias[row + i]);`}`}let J=s.slice(0,-2),se=l.slice(0,-2),ue=Jt(J,x),L=Jt(se,x),de=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ft(t,de);let oe=(ie,R)=>{let U=ie.rank,ee=ie.name;if(U===2)return`var ${ee}_indices = ${ie.type.indices}(0u, 0u);`;let fe=E.rank,be=`var ${ee}_indices: ${ie.type.indices};`;for(let ke=U-2-1,Re=fe-1;ke>=0;ke--,Re--)be+=`
${ee}_indices[${ke}] = ${fe>1?`batch_indices[${Re}]`:"batch_indices"};`;return R.forEach(ke=>{be+=`
${ee}_indices[${ke}] = 0;`}),be+=`${ee}_indices[${U-2}] = 0u;
                     ${ee}_indices[${U-1}] = 0u;`,be},j=()=>{let ie=`var a_data: ${I.type.value};`;for(let R=0;R<m;R++)ie+=`
              let b_data${R} = b[(b_offset + (k + ${R}) * uniforms.N + col) / ${u}];`;for(let R=0;R<$;R++){ie+=`a_data = a[(a_offset + (row + ${R}) * uniforms.K + k) / ${m}];`;for(let U=0;U<m;U++)ie+=`
            values[${R}] = fma(${C.type.value}(a_data${m===1?"":`[${U}]`}), b_data${U}, values[${R}]);
`}return ie};return`
  ${T.registerUniforms(de).registerInternalVariables(E).declareVariables(...X,P)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${u})) * ${u};
    var index1 = global_idx / (uniforms.N / ${u});
    let stride1 = uniforms.M / ${$};
    let row = (index1 % stride1) * ${$};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}
    ${oe(I,ue)}
    let a_offset = ${I.indicesToOffset("a_indices")};
    ${oe(C,L)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${P.type.value}, ${$}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${j()}
    }
    for (var i = 0u; i < ${$}u; i++) {
      var value = values[i];
      ${Z}
      ${W}
      let cur_indices = ${P.type.indices}(batch, row + i, col);
      let offset = ${P.indicesToOffset("cur_indices")};
      ${P.setByOffset(`offset / ${u}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${u};${m};${$};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:S}},Po=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},qp=e=>{Po(e.inputs);let t=Dt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&i<8?e.compute(ua(e.inputs,{activation:""},t)):e.compute(Da(e.inputs,{activation:""},t))}}),Do,vr,Uo,br,la,Ii,No,Wo,da,um=D(()=>{"use strict";te(),nm(),sm(),Wr(),om(),gt(),Vp(),mt(),Do=(e,t,r,i,a,n)=>{let s=e[0],l=e.slice(n?1:2,n?3:4),d=l.length,p=t[0],f=t.slice(2).map((m,$)=>m+(m-1)*(r[$]-1)),u=l.map((m,$)=>m+i[$]+i[$+d]).map((m,$)=>Math.floor((m-f[$]+a[$])/a[$]));return u.splice(0,0,s),u.splice(n?3:1,0,p),u},vr=[2,3,1,0],Uo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},br=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Rr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},la=e=>{let t=Ba(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Ii=(e,t,r,i)=>{let a=r.format==="NHWC",n=Do(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let I=[t[0]];if(a){let C=e.kernelCustomData.wT??e.compute(Me(t[1],vr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),I.push(C)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Wp(I,r,n,i),{inputs:I}):e.compute(Np(I,r,n,i),{inputs:I});return}let s=t.length===3,l=t[0].dims[a?1:2],d=t[0].dims[a?2:3],p=t[0].dims[a?3:1],f=t[1].dims[2],u=t[1].dims[3],m=n[a?1:2],$=n[a?2:3],g=n[a?3:1],y=a&&f===l&&u===d&&r.pads[0]===0&&r.pads[1]===0;if(y||f===1&&u===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=n[0],C,P,V,W=[];if(a){let J=e.kernelCustomData.wT??e.compute(Me(t[1],vr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=J),y){let se=l*d*p;C=t[0].reshape([1,I,se]),P=J.reshape([1,se,g]),V=[1,I,g]}else C=t[0].reshape([I,l*d,p]),P=J.reshape([1,p,g]),V=[I,m*$,g];W.push(C),W.push(P)}else C=t[0].reshape([I,p,l*d]),P=t[1].reshape([1,g,p]),V=[I,g,m*$],W.push(P),W.push(C);s&&W.push(t[2]);let X=V[2],Z=W[0].dims[W[0].dims.length-1];X<8&&Z<8?e.compute(ua(W,r,n,V,a,i),{inputs:W}):e.compute(Da(W,r,n,V,a,i),{inputs:W});return}let x=!0,b=e.kernelCustomData.wT??e.compute(Me(t[1],vr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let _=[t[0],b];s&&_.push(t[2]);let S=a?m*$:g,T=a?g:m*$,E=f*u*p;e.compute(Pp(_,r,n,S,T,E,s,x,i),{inputs:_})},No=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=br({...t,pads:a,strides:n,dilations:s,kernelShape:l},i);Ii(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Wo=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=br(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Dp(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Up(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},da=(e,t)=>{if(Uo(e.inputs,t),e.inputs[0].dims.length===3)No(e,t);else if(e.inputs[0].dims.length===5)Wo(e,e.inputs,t);else{let r=br(t,e.inputs);Ii(e,e.inputs,r)}}}),qo,Lp,lm=D(()=>{"use strict";Q(),tt(),re(),gt(),Nr(),Mp(),Wr(),qo=(e,t=!1,r,i,a=4)=>{let n=x=>{switch(x){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${i}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${x} is not supported.`)}},s=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,l=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,d=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",p=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",f=e?"row":"col",u=e?"col":"row",m=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${f} / outWidth;
      let outCol = ${f} % outWidth;

      let WRow = ${u} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${u} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${d}) || fract(xR) > 0.0) {
        return ${i}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${p}) || fract(xC) > 0.0) {
        return ${i}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${u} % inChannels;
      ${s}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${a}];`,$=e?`
      let col = colIn * ${a};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${m}
      }
      return ${i}(0.0);`:`
      let col = colIn * ${a};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${m}
      }
      return ${i}(0.0);`,g=`
      let col = colIn * ${a};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${n(a)}
      }
      return ${i}(0.0);
      `,y=ct(r,i);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?$:g}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?g:$}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${i}) {
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${l}
      ${Ma(t)}
      ${y}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${a}] = value;
    }
  }`},Lp=(e,t,r,i,a,n,s,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],u=d?r[2]:r[3],m=d?r[1]:r[2],$=d?r[3]:r[1],g=d&&p%4===0&&p%3&&$%4===0,y=d?$:u*m,x=d?u*m:$,b=[8,8,1],_=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(y/b[0]/_[0]),Math.ceil(x/b[1]/_[1]),Math.ceil(f/b[2]/_[2])];ce("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${S}`);let T=g?4:1,E=Math.max(b[0]*T,b[1]),I=g?4:1,C=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],P=[C[0]+(t.dilations[0]<=1?0:(C[0]-1)*(t.dilations[0]-1)),C[1]+(t.dilations[1]<=1?0:(C[1]-1)*(t.dilations[1]-1))],V=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],W=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:C},{type:6,data:V}];ht(t,W),W.push(...F(e[0].dims,e[1].dims));let X=["rank","rank"];s&&(W.push(...F(e[2].dims)),X.push("rank")),W.push(...F(r));let Z=J=>{let se=B("x",e[0].dataType,e[0].dims.length,I),ue=B("w",e[1].dataType,e[1].dims.length,1),L=H("result",e[0].dataType,r.length,I),de=[se,ue],oe="";if(s){let R=B("bias",e[2].dataType,e[2].dims.length,I);de.push(R),oe+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${R.type.value} {
            return bias[coords.${d?"w":"y"}${g?"/ 4":""}];
          }`}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:C.length},{name:"pads",type:"i32",length:V.length}];ft(t,j);let ie=xe(e[0].dataType,1);if(ie!=="f16"&&ie!=="f32")throw new Error(`elemType ${ie} is not supported.`);return`
        ${Pa("uniforms.result_strides")}
        ${J.registerUniforms(j).declareVariables(...de,L)};
        ${oe}
        ${qo(d,s,t,se.type.value,T)}
        ${g?Mr(_,b,ie,void 0,!d,E):Pr(_,b,ie,void 0,!d,E,!1,void 0,l)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${_};${b};${g}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:W}),getShaderSource:Z}}}),Vo,pa,dm=D(()=>{"use strict";Q(),tt(),te(),re(),Vo=(e,t,r,i,a,n=!1,s,l,d=!1)=>{let p=d?1:2,f=d?2:3,u=d?3:1,m=n?2:1,$=`
  fn setOutputAtIndex(flatIndex : u32, value : ${n?`vec4<${s}>`:s}) {
    result[flatIndex] = ${n?`vec4<${s}>`:s}(value);
  }`;i&&($+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${n?`vec4<${s}>`:s} {
      return bias[coords.${d?"w":"y"}${n?"/ 4":""}];
    }`);let g=n?4:1,y=B("W",t[1].dataType,t[1].dims.length,g),x=B("Dy",t[0].dataType,t[0].dims.length,g),b=[x,y];i&&b.push(B("bias",t[2].dataType,[r[u]].length,g));let _=H("result",t[0].dataType,r.length,g),S=`{
        let batch: u32 = ${a?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${a?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${a?"global_id.y":"workgroup_id.y"} * ${m};
        let d1: u32 = ${a?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${s}>, ${m}>;
        for (var i = 0; i < ${m}; i++) {
          dotProd[i] = vec4<${s}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${s}(dyCorner.x) + ${s}(wR)) / ${s}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${s}(dyCorner.y) + ${s}(wC)) / ${s}(uniforms.strides.y);
            let dyC2 = (${s}(dyCorner.y) + 1.0 + ${s}(wC)) / ${s}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${x.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${s}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${u}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${m}; i = i + 1) {
          let value = dotProd[i] + ${i?"bias[c+i]":`vec4<${s}>(0.0)`};
          ${_.set("batch","r","c + i","d1","value")};
        }
      }`,T=`
          let outputIndices = ${_.offsetToIndices("global_idx")};
          let batch = ${_.indicesGet("outputIndices",0)};
          let d1 = ${_.indicesGet("outputIndices",u)};
          let r = ${_.indicesGet("outputIndices",p)};
          let c = ${_.indicesGet("outputIndices",f)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${s}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${s}(dyRCorner) + ${s}(wR)) / ${s}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[${p}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${s}(dyCCorner) + ${s}(wC)) / ${s}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[${f}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${d?x.get("batch","idyR","idyC","inputChannel"):x.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${y.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${i?"bias[d1]":`${s}(0.0)`};
          ${_.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(l).declareVariables(...b,_)}
  ${$}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${n?S:T}}`},pa=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=A.size(a),s=[Math.ceil(n/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${s}`);let l=t.format==="NHWC",d=["rank","rank"],p=[t.strides[0],t.strides[1]],f=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],u=[t.dilations[0],t.dilations[1]],m=[f[0]+(t.dilations[0]<=1?0:(t.kernelShape[l?1:2]-1)*(t.dilations[0]-1)),f[1]+(t.dilations[1]<=1?0:(t.kernelShape[l?2:3]-1)*(t.dilations[1]-1))],$=[m[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),m[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],g=!1,y=t.group,x=e[1].dims,b=x[0]/y,_=x[1],S=[{type:12,data:n},{type:12,data:p},{type:12,data:f},{type:12,data:u},{type:12,data:m},{type:6,data:$},{type:12,data:b},{type:12,data:_},...F(e[0].dims,e[1].dims)];i&&(S.push(...F(e[2].dims)),d.push("rank")),S.push(...F(a));let T=s[1]===1&&s[2]===1,E=I=>{let C=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:p.length},{name:"filter_dims",type:"u32",length:f.length},{name:"dilations",type:"u32",length:f.length},{name:"effective_filter_dims",type:"u32",length:m.length},{name:"pads",type:"i32",length:$.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=xe(e[0].dataType);return`${Vo(I,e,a,i,T,g,P,C,l)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:d},getRunData:()=>({dispatchGroup:{x:s[0],y:s[1],z:s[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:E}}}),Lo,jo,Fo,zi,jp,Go,Ho,Ko,Yo,Fp,pm=D(()=>{"use strict";lm(),dm(),gt(),mt(),Lo=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,jo=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Fo=(e,t,r,i,a,n,s,l,d,p)=>{let f=e.length-2,u=p.length===0;d.length<f&&d.push(...Array(f-d.length).fill(0));let m=e[0],$=t[l?3:1]*a;for(let g=0,y=e.length-f-(l?1:0);g<f;++g,++y){let x=e[y],b=u?x*s[g]:p[g],_=Lo(x,s[g],n[g],t[y],r[g],b);jo(_,i,n,g,g+f),u&&p.push(s[g]*(x-1)+d[g]+(t[y]-1)*r[g]+1-n[g]-n[g+f])}p.splice(0,0,m),p.splice(l?3:1,0,$)},zi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((u,m)=>u*m,1)===0){r.length=0;for(let u=2;u<t[1].dims.length;++u)r.push(t[1].dims[u])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;d=new Array(u).fill(1)}let p=e.strides.slice();if(p.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;p=new Array(u).fill(1)}Fo(l,r,d,e.autoPad,e.group,a,p,i,s,n);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:d,strides:p}),f},jp=e=>{let t=Ba(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),f=e.outputPadding,u=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:f,outputShape:u,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Go=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ho=[2,3,1,0],Ko=(e,t,r)=>{let i=zi(r,t),a=r.format==="NHWC",n=i.outputShape,s=n[a?3:1],l=t[0].dims[a?3:1];if(i.group!==1||s===1&&l===1){e.compute(pa(t,i));return}let d=n[a?1:2],p=n[a?2:3],f=t[1].dims[2],u=t[1].dims[3],m=a?d*p:s,$=a?s:d*p,g=f*u*l,y=!0,x=e.kernelCustomData.wT??e.compute(Me(t[1],Ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let b=[t[0],x],_=t.length===3;_&&(!a&&t[2].dims.length===1?b.push(t[2].reshape([t[2].dims[0],1,1])):b.push(t[2])),e.compute(Lp(b,i,n,m,$,g,_,y),{inputs:b})},Yo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let d=zi({...t,pads:l,strides:s,dilations:n,kernelShape:a},i);e.compute(pa(i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]]))},Fp=(e,t)=>{Go(e.inputs,t),e.inputs[0].dims.length===3?Yo(e,t):Ko(e,e.inputs,t)}}),Zo,Gp,Hp,cm=D(()=>{"use strict";Q(),te(),ve(),re(),Zo=(e,t,r,i)=>{let a=A.size(t),n=t.length,s=B("input",e,n),l=H("output",e,n),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=A.normalizeAxis(d,n),f=u=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,$=G("uniforms.input_shape","uniforms.axis",n),g=i.reverse?m+(i.exclusive?" + 1":""):"0",y=i.reverse?$:m+(i.exclusive?"":" + 1");return`
                ${u.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${u.mainStart()}
                  ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...F(t,t)]}),getShaderSource:f}},Gp=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Zo(i,r,a,t),{inputs:[0]})},Hp=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),Qo,Xo,Jo,Kp,Yp,hm=D(()=>{"use strict";Q(),te(),ve(),re(),Qo=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Xo=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},Jo=(e,t)=>{let r,i,a,n,s,l,d=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";d?([r,i,a,n]=e.dims,s=f?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let u=e.reshape(s),m=u.dims.length,$=e.dataType,g=B("a",$,m),y=H("output",$,m),x=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Xo(l,m,g,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let _=d?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],S=A.size(_),T=u.dims,E=A.sortBasedOnPerm(T,l);return{outputs:[{dims:_,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...F(T,E)]}},getShaderSource:x}},Kp=(e,t)=>{Qo(e.inputs),e.compute(Jo(e.inputs[0],t))},Yp=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),xr,Lt,Ai,eu,tu,ru,iu,Oi,au,Zp,Qp,fm=D(()=>{"use strict";Q(),te(),ve(),re(),xr="[a-zA-Z]|\\.\\.\\.",Lt="("+xr+")+",Ai="^"+Lt+"$",eu="("+Lt+",)*"+Lt,tu="^"+eu+"$",ru=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},iu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(tu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Ai)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,s,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Lt)))throw new Error("Invalid RHS");i.match(RegExp(xr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],l=0;if(!e.match(RegExp(Ai))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(xr,"g")),p=new ru(i);return d?.forEach((f,u)=>{if(f==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-d.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let $=0;$<s.length;$++){let g=String.fromCharCode(48+$);p.addSymbol(g,u+$),this.addSymbol(g,r[l++],i)}}else p.addSymbol(f,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],i)}),p}},Oi=e=>e+"_max",au=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,f)=>B(`input${f}`,t,p)),n=A.size(i),s=H("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let f=[],u="var prod = 1.0;",m="var sum = 0.0;",$="sum += prod;",g=[],y=[],x=[],b=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,E)=>{if(r.rhs.symbolToIndices.has(E)){let I=r.rhs.symbolToIndices.get(E)?.[0];I!==void 0&&r.lhs.forEach((C,P)=>{if(T.inputIndices.includes(P)){let V=C.symbolToIndices.get(E);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(W=>{f.push(`${a[P].indicesSet(`input${P}Indices`,W,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,C)=>{if(T.inputIndices.includes(C)){let P=I.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(V=>{g.push(`${a[C].indicesSet(`input${C}Indices`,V,`${E}`)}`)}),b.push(`prod *= ${a[C].getByIndices(`input${C}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Oi(E)}; ${E}++) {`),x.push("}")});let S=_?[...f,`let sum = ${a.map((T,E)=>T.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...f,m,...y,...g,u,...b,$,...x];return`
            ${p.registerUniforms(l.map(T=>({name:`${Oi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((T,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(u=>r.symbolToInfo.has(u)).map(u=>({type:12,data:r.symbolToInfo.get(u)?.dimValue||0}));p.push({type:12,data:n});let f=e.map((u,m)=>[...F(u)]).reduce((u,m)=>u.concat(m),p);return f.push(...F(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}},getShaderSource:d}},Zp=(e,t)=>{let r=new iu(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(au(a,e.inputs[0].dataType,r,i))},Qp=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),nu,Ri,su,ou,Xp,mm=D(()=>{"use strict";Q(),te(),re(),nu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ri=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},su=(e,t)=>e.length>t.length?Ri(e,t):Ri(t,e),ou=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=su(t,r),a=e[0].dataType,n=a===9?4:1,s=Math.ceil(A.size(i)/n),l=p=>{let f=B("input",a,t.length,n),u=H("output",a,i.length,n),m;if(a===9){let $=(g,y,x="")=>`
          let outputIndices${y} = ${u.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${f.broadcastedIndicesToOffset(`outputIndices${y}`,u)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${g}[${y}] = ${x}(${f.getByOffset(`index${y}`)}[component${y}]);
        `;m=`
        let outputOffset = global_idx * ${n};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${u.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${u.offsetToIndices("global_idx")};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",u)};
        ${u.setByOffset("global_idx",f.getByOffset("inputOffset"))}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(f,u)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:s},...F(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d})}},Xp=e=>{nu(e.inputs),e.compute(ou(e.inputs),{inputs:[0]})}}),uu,Jp,gm=D(()=>{"use strict";Q(),te(),re(),Ra(),uu=e=>{let t=e[0].dataType,r=A.size(e[0].dims),i=A.size(e[1].dims),a=i%4===0,n=s=>{let l=B("x",t,[1],4),d=B("bias",t,[1],4),p=H("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=$=>`
      let bias${$}_offset: u32 = (global_idx * 4 + ${$}) % uniforms.bias_size;
      let bias${$} = ${d.getByOffset(`bias${$}_offset / 4`)}[bias${$}_offset % 4];`,m=a?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(l,d,p)}

    ${sa(Ie(t))}

    ${s.mainStart(Ut)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",oa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Ut/4)}})}},Jp=e=>{e.inputs.length<2||A.size(e.inputs[1].dims)===0?wp(e):e.compute(uu(e.inputs))}}),lu,du,ec,tc,ym=D(()=>{"use strict";Q(),te(),ve(),re(),lu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},du=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=A.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let l=r[n],d=e[0].dataType===9?4:1,p=Math.ceil(A.size(s)/d),f=[{type:12,data:p},{type:6,data:l},{type:12,data:n},...F(e[0].dims,e[1].dims,s)],u=m=>{let $=B("data",e[0].dataType,e[0].dims.length,d),g=B("inputIndices",e[1].dataType,e[1].dims.length),y=H("output",e[0].dataType,s.length,d),x=_=>{let S=i.length,T=`var indicesIndices${_}  = ${g.type.indices}(0);`;for(let E=0;E<S;E++)T+=`${S>1?`indicesIndices${_}[${E}]`:`indicesIndices${_}`} = ${s.length>1?`outputIndices${_}[uniforms.axis + ${E}]`:`outputIndices${_}`};`;T+=`
          var idx${_} = ${g.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${$.type.indices};
        `;for(let E=0,I=0;E<a;E++)E===n?(T+=`${a>1?`dataIndices${_}[${E}]`:`dataIndices${_}`} = u32(idx${_});`,I+=S):(T+=`${a>1?`dataIndices${_}[${E}]`:`dataIndices${_}`} = ${s.length>1?`outputIndices${_}[${I}]`:`outputIndices${_}`};`,I++);return T},b;if(e[0].dataType===9){let _=(S,T,E="")=>`
          let outputIndices${T} = ${y.offsetToIndices(`outputOffset + ${T}u`)};
          ${x(T)};
          let offset${T} = ${$.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${S}[${T}] = ${E}(${$.getByOffset(`index${T}`)}[component${T}]);
        `;b=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else b=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${$.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables($,g,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:u}},ec=e=>he({axis:e.axis}),tc=(e,t)=>{let r=e.inputs;lu(r),e.compute(du(e.inputs,t))}}),pu,cu,rc,ic,wm=D(()=>{"use strict";Q(),te(),ve(),re(),pu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=A.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((l,d)=>d===r?Math.ceil(l/i)===n.dims[d]:l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((l,d)=>l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},cu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=A.normalizeAxis(t.gatherAxis,a),s=A.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(n,1,...i);let d=A.size(l),p=e[2].dataType,f=e[0].dataType===22,u=[{type:12,data:d},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...F(...e.map(($,g)=>$.dims),l)],m=$=>{let g=B("data",e[0].dataType,e[0].dims.length),y=B("inputIndices",e[1].dataType,e[1].dims.length),x=B("scales",e[2].dataType,e[2].dims.length),b=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=H("output",p,l.length),S=[g,y,x];b&&S.push(b);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${$.registerUniforms(T).declareVariables(...S,_)}
        ${$.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${b?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${b.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${b.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ie(p)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter(($,g)=>g!==1).map($=>$.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},($,g)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:u}),getShaderSource:m}},rc=(e,t)=>{let r=e.inputs;pu(r,t),e.compute(cu(e.inputs,t))},ic=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hu,fu,ac,nc,$m=D(()=>{"use strict";Q(),te(),ve(),re(),hu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},fu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,l=A.normalizeAxis(t.axis,a),d=r[l],p=n.slice(0),f=A.size(p),u=B("input",i,a),m=B("indicesInput",s,n.length),$=H("output",i,p.length),g=[{type:12,data:f},{type:6,data:d},{type:12,data:l}];return g.push(...F(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(u,m,$)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${$.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${u.type.indices}(outputIndices);
      ${u.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${u.getByIndices("inputIndices")};

      ${$.setByOffset("global_idx","value")};
  }`}},ac=e=>he({axis:e.axis}),nc=(e,t)=>{let r=e.inputs;hu(r),e.compute(fu(e.inputs,t))}}),mu,gu,sc,oc,_m=D(()=>{"use strict";Q(),te(),re(),mu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},gu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=dd.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[a,n];if(!l)throw new Error("Can't use gemm on the given tensors");let d=A.size(l),p=[{type:12,data:d},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],f=["type","type"];e.length===3&&(p.push(...F(e[2].dims)),f.push("rank")),p.push(...F(l));let u=m=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let g=t.alpha===1?"":"value *= uniforms.alpha;",y=B("a",e[0].dataType,e[0].dims),x=B("b",e[1].dataType,e[1].dims),b=y.type.value,_=null,S=[y,x];e.length===3&&(_=B("c",e[2].dataType,e[2].dims.length),S.push(_));let T=H("output",e[0].dataType,l.length);S.push(T);let E=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${m.registerUniforms(E).declareVariables(...S)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${b}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${g}
    ${_!=null?`let cOffset = ${_.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${b}(uniforms.beta) * ${_.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:u}},sc=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},oc=(e,t)=>{mu(e.inputs),e.compute(gu(e.inputs,t))}}),Ae,yu,uc,Bi,wu,Xt,lc,dc=D(()=>{"use strict";Q(),te(),ve(),Ia(),Oa(),re(),mt(),Ae=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,yu=(e,t)=>{let r=e[0],i=Ae(e,1),a=Ae(e,2),n=Ae(e,3),s=Ae(e,4),l=Ae(e,5),d=Ae(e,6),p=Ae(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],u=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],$=u,g=0,y=0,x=Math.floor(m/t.numHeads);if(d&&p&&A.size(d.dims)&&A.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=d.dims[2],y=d.dims[2]}else if(d&&A.size(d.dims)||p&&A.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(i&&A.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,$=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,$=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,$=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(n&&A.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=g+$,S=0;if(s&&A.size(s.dims)>0){S=8;let C=s.dims;throw C.length===1?C[0]===f?S=1:C[0]===3*f+2&&(S=3):C.length===2&&C[0]===f&&C[1]===_&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,E=m;if(a&&A.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if($!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if($!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],T=!0}}let I=!1;if(s&&A.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&A.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==u||l.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:u,pastSequenceLength:g,kvSequenceLength:$,totalSequenceLength:_,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:m,vHiddenSize:E,headSize:x,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:I,passPastInKv:T,qkvFormat:b}},uc=e=>he({...e}),Bi=he({perm:[0,2,1,3]}),wu=(e,t,r,i,a,n,s)=>{let l=[i,a,n],d=A.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:n}],f=u=>{let m=H("qkv_with_bias",t.dataType,l),$=B("qkv",t.dataType,l),g=B("bias",r.dataType,l),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${u.registerUniforms(y).declareVariables($,g,m)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},Xt=(e,t,r,i,a,n,s,l)=>{let d=n;if(s&&A.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=wu(e,n,s,t,i,r*a,l),d=d.reshape([t,i,r,a]),r===1||i===1?d:e.compute(Me(d,Bi.perm),{inputs:[d],outputs:[-1]})[0]}else return n.dims.length===3&&(d=n.reshape([t,i,r,a])),r===1||i===1?d:e.compute(Me(d,Bi.perm),{inputs:[d],outputs:[-1]})[0]},lc=(e,t)=>{let r=yu(e.inputs,t),i=e.inputs[0],a=Ae(e.inputs,1),n=Ae(e.inputs,2),s=Ae(e.inputs,3),l=Ae(e.inputs,4),d=Ae(e.inputs,5),p=Ae(e.inputs,6),f=Ae(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let u=a&&n&&a.dims.length===4&&n.dims.length===4,m=Xt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(u)return er(e,m,a,n,l,void 0,p,f,d,r,t);if(!a||!n)throw new Error("key and value must be provided");let $=Xt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),g=Xt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);er(e,m,$,g,l,void 0,p,f,d,r,t)}}),Mi,$u,_u,ca,pc,cc=D(()=>{"use strict";Q(),te(),re(),Mi=e=>Array.from(e.getBigInt64Array(),Number),$u=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Mi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},_u=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},ca=(e,t)=>{let r=e[0].dims,i=t??Mi(e[1]),a=_u(r,i),n=A.size(a),s=e[0].dataType,l=B("input",s,r.length),d=H("output",s,a.length),p=f=>`
      const inputShape = ${l.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(l,d)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...F(e[0].dims,a)]}),getShaderSource:p}},pc=e=>{$u(e.inputs),e.compute(ca(e.inputs),{inputs:[0]})}}),vu,Pi,hc,bu,Di,fc,vm=D(()=>{"use strict";Q(),te(),ve(),Oa(),re(),dc(),cc(),mt(),vu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],u=p,m=0,$=0,g=Math.floor(f/t.numHeads),y=n&&n.dims.length!==0,x=s&&s.dims.length!==0,b=!0;if(y&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b?(m=n.dims[1],$=n.dims[1]):(m=n.dims[2],$=n.dims[2])}else if(y||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');_=2,u=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,u=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,u=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let S=0,T=!1,E=f;if(a){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(u!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(u!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],T=!0}}let I=m+u;return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:u,totalSequenceLength:I,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:f,vHiddenSize:E,headSize:g,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:S,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:_,isPastkvBSNH:b}},Pi=(e,t,r,i)=>{let a=[i.batchSize,i.totalSequenceLength,i.kvNumHeads,i.headSize],n=4,s=A.size(a)/n,l=i.totalSequenceLength,d=H("present_kv",r,a.length,n),p=B("new_kv",e.dataType,e.dims.length,n),f=t?B("past_kv",t.dataType,t.dims.length,n):void 0,u=Math.ceil(i.headSize/n),m={x:l,y:e.dims[0],z:1},$=t?["rank","rank"]:["rank"],g=[{type:12,data:s},{type:12,data:i.pastSequenceLength},{type:12,data:i.kvSequenceLength},{type:12,data:i.totalSequenceLength}],y=[p];f?(g.push(...F(e.dims),...F(t.dims),...F(a)),y.push(f)):g.push(...F(e.dims),...F(a));let x=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],b=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,_=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,S=t?`if (s < past_seqlen) {
        ${b}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${_}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${_}
        }`,T=E=>`

  ${E.registerUniforms(x).declareVariables(...y,d)}
  ${E.mainStart([u,i.kvNumHeads,1])}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${d.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${i.kvNumHeads}u;
    let H = ${u}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${i.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${S}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${i.kvNumHeads}${u}${!!t}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:m,programUniforms:g}),getShaderSource:T}},hc=e=>he({...e}),bu=he({perm:[0,2,1,3]}),Di=(e,t,r,i,a)=>{let n=t,s=i.kvNumHeads,l=i.nReps;return t.dims.length===3&&i.kvSequenceLength!==0&&(n=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize])),r?n=e.compute(Pi(n,r,n.dataType,i),{inputs:[n,r],outputs:[i.isPastkvBSNH?a:-1]})[0]:n=e.compute(Pi(n,void 0,n.dataType,i),{inputs:[n],outputs:[i.isPastkvBSNH?a:-1]})[0],l!==1&&(n=e.compute(ca([n],[1,1,1,l]),{inputs:[n],outputs:[-1]})[0],n=n.reshape([i.batchSize,i.totalSequenceLength,s*l,i.headSize])),e.compute(Me(n,bu.perm),{inputs:[n],outputs:[-1]})[0]},fc=(e,t)=>{let r=vu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=Xt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,n=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,s=Di(e,e.inputs[1],a,r,1),l=Di(e,e.inputs[2],n,r,2);er(e,i,s,l,void 0,void 0,void 0,void 0,void 0,r,t)}}),Ui,xu,Su,mc,bm=D(()=>{"use strict";Q(),te(),mt(),re(),Ui=(e,t,r,i,a,n,s,l)=>{let d=_e(n),p=d===1?"f32":`vec${d}f`,f=d===1?"vec2f":`mat2x${d}f`,u=a*s,m=[a,s,n/d],$=[a,s,2],g=["rank","type","type"],y=[];y.push(...F(m,$));let x=b=>{let _=B("x",t.dataType,3,d),S=B("scale",r.dataType,r.dims),T=B("bias",i.dataType,i.dims),E=H("output",1,3,2),I=[_,S,T,E],C=64;return`
  var<workgroup> workgroup_shared : array<${f}, ${C}>;
  const workgroup_size = ${C}u;
  ${b.declareVariables(...I)}
  ${b.mainStart(C)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${_.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${pt("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${pt("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:u},programUniforms:y}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},xu=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],l=i[1],d=A.sizeFromDimension(i,n),p=_e(d),f=A.size(a)/p,u=Ui(e,t[0],t[1],t[2],s,d,l,r.epsilon),m=[s,l,d/p],$=[s,l],g=["type","none"],y=x=>{let b=B("x",t[0].dataType,m.length,p),_=B("scale_shift",1,$.length,2),S=H("output",t[0].dataType,m.length,p),T=[b,_,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...T)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...F(m,$,m)]}),getShaderSource:y},{inputs:[t[0],u]})},Su=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],l=A.sizeFromDimension(i,1)/s,d=_e(s),p=A.size(a)/d,f=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],u=["type","type"],m=[0,i.length-1];for(let x=0;x<i.length-2;x++)m.push(x+1);let $=e.compute(Me(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0],g=Ui(e,$,t[1],t[2],n,l,s,r.epsilon),y=x=>{let b=xe(t[0].dataType),_=d===1?"vec2f":`mat${d}x2f`,S=I=>{let C=I===0?"x":"y",P=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${b}(${P}(scale.${C}))`;case 2:return`vec2<${b}>(${P}(scale[0].${C}, scale[1].${C}))`;case 4:return`vec4<${b}>(${P}(scale[0].${C}, scale[1].${C}, scale[2].${C}, scale[3].${C}))`;default:throw new Error(`Not supported compoents ${d}`)}},T=B("input",t[0].dataType,t[0].dims,d),E=H("output",t[0].dataType,a,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${_}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y},{inputs:[t[0],g]})},mc=(e,t)=>{t.format==="NHWC"?Su(e,e.inputs,t):xu(e,e.inputs,t)}}),ku,Tu,gc,xm=D(()=>{"use strict";Q(),te(),re(),ku=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Tu=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],l=a,d=A.normalizeAxis(t.axis,a.length),p=A.sizeToDimension(a,d),f=A.sizeFromDimension(a,d),u=A.size(n.dims),m=s?A.size(s.dims):0;if(u!==f||s&&m!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${u} and bias size of ${m}`);let $=[];for(let E=0;E<a.length;++E)E<d?$.push(a[E]):$.push(1);let g=_e(f),y=["type","type"],x=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/g)},{type:1,data:t.epsilon}];s&&y.push("type");let b=r>1,_=r>2,S=E=>{let I=xe(e[0].dataType),C=[B("x",e[0].dataType,e[0].dims,g),B("scale",n.dataType,n.dims,g)];s&&C.push(B("bias",s.dataType,s.dims,g)),C.push(H("output",e[0].dataType,l,g)),b&&C.push(H("mean_data_output",1,$)),_&&C.push(H("inv_std_output",1,$));let P=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(P).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ia("f32",g)};
    var mean_square_vector = ${ia("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Pt(I,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${pt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${pt("mean_square_vector",g)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Pt(I,g,"x[j + offset]")};
      let f32scale = ${Pt(I,g,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Pt(I,g,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return b&&T.push({dims:$,dataType:1}),_&&T.push({dims:$,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:S}},gc=(e,t)=>{ku(e.inputs),e.compute(Tu(e.inputs,t,e.outputCount))}}),Eu,Cu,Iu,yc,wc,Sm=D(()=>{"use strict";Q(),te(),ve(),re(),Eu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!A.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(A.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(A.size(d)!==p)throw new Error("zeroPoints input size error.")}},Cu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=A.size(l),p=e[1].dims[2]/4,f=e[0].dataType,u=_e(t.k),m=_e(p),$=_e(s),g=l.concat([a,s]),y=a>1&&s/$%2===0?2:1,x=A.size(g)/$/y,b=64,_=[],S=[d,a,n/u],T=A.convertShape(e[1].dims).slice();T.splice(-1,1,p/m),_.push(...F(S)),_.push(...F(T)),_.push(...F(e[2].dims)),e.length===4&&_.push(...F(A.convertShape(e[3].dims)));let E=[d,a,s/$];_.push(...F(E));let I=C=>{let P=S.length,V=B("a",e[0].dataType,P,u),W=B("b",12,T.length,m),X=B("scales",e[2].dataType,e[2].dims.length),Z=[V,W,X],J=e.length===4?B("zero_points",12,e[3].dims.length):void 0;J&&Z.push(J);let se=E.length,ue=H("output",e[0].dataType,se,$),L=xe(e[0].dataType),de=(()=>{switch(u){case 1:return`array<${L}, 8>`;case 2:return`mat4x2<${L}>`;case 4:return`mat2x4<${L}>`;default:throw new Error(`${u}-component is not supported.`)}})(),oe=()=>{let R=`
          // reuse a data
            var input_offset = ${V.indicesToOffset(`${V.type.indices}(batch, row, word_offset)`)};
            var a_data: ${de};
            for (var j: u32 = 0; j < ${8/u}; j++) {
              a_data[j] = ${V.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<$*y;U++)R+=`
            b_value = ${m===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${de}(${Array.from({length:4},(ee,fe)=>`${L}(b_value_lower[${fe}]), ${L}(b_value_upper[${fe}])`).join(", ")});
            b_dequantized_values = ${u===1?`${de}(${Array.from({length:8},(ee,fe)=>`(b_quantized_values[${fe}] - ${J?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${de}(${Array(8).fill(`${J?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(U/$)}]${$>1?`[${U%$}]`:""} += ${Array.from({length:8/u},(ee,fe)=>`${u===1?`a_data[${fe}] * b_dequantized_values[${fe}]`:`dot(a_data[${fe}], b_dequantized_values[${fe}])`}`).join(" + ")};
          `;return R},j=()=>{let R=`
            var col_index = col * ${$};
            ${J?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${L}(8);`}
            `;for(let U=0;U<$*y;U++)R+=`
            let scale${U} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${J?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${L}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return R},ie=()=>{let R=`col_index = col * ${$};`;for(let U=0;U<$*y;U++)R+=`
            let b${U}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return R+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${de};
            var b_dequantized_values: ${de};`,R};return`
        var<workgroup> workgroup_shared: array<${ue.type.value}, ${y*b}>;
        ${C.declareVariables(...Z,ue)}
        ${C.mainStart([b,1,1])}
          let output_indices = ${ue.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/u};
            ${j()}
            for (var word: u32 = 0; word < ${p}; word += ${m}) {
              ${ie()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${oe()}
                word_offset += ${8/u};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${ue.type.value} = ${ue.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${ue.setByIndices(`${ue.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${u};${m};${$};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:f}],dispatchGroup:{x},programUniforms:_}),getShaderSource:I}},Iu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=A.size(l),p=e[1].dims[2]/4,f=e[0].dataType,u=_e(t.k),m=_e(p),$=l.concat([a,s]),g=128,y=s%8===0?8:s%4===0?4:1,x=g/y,b=x*m*8,_=b/u,S=b/t.blockSize,T=A.size($)/y,E=[],I=[d,a,n/u],C=A.convertShape(e[1].dims).slice();C.splice(-1,1,p/m),E.push(...F(I)),E.push(...F(C)),E.push(...F(e[2].dims)),e.length===4&&E.push(...F(A.convertShape(e[3].dims)));let P=[d,a,s];E.push(...F(P));let V=W=>{let X=I.length,Z=B("a",e[0].dataType,X,u),J=B("b",12,C.length,m),se=B("scales",e[2].dataType,e[2].dims.length),ue=[Z,J,se],L=e.length===4?B("zero_points",12,e[3].dims.length):void 0;L&&ue.push(L);let de=P.length,oe=H("output",e[0].dataType,de),j=xe(e[0].dataType),ie=()=>{switch(u){case 1:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${u}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Z.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${oe.type.value}, ${x}>, ${y}>;
        ${W.declareVariables(...ue,oe)}
        ${W.mainStart([x,y,1])}
          let output_indices = ${oe.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Z.getByIndices(`${Z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Z.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${L?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${L.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${j}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${j}(8);`}
            let scale = ${se.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${J.getByIndices(`${J.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/u};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${ie()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${j}>(${Array.from({length:4},(R,U)=>`${j}(b_value_lower[${U}]), ${j}(b_value_upper[${U}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${j}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(R,U)=>`${`dot(a_data${U}, b_dequantized_values[${U}])`}`).join(" + ")};
              word_offset += ${8/u};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${u};${m};${x};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:f}],dispatchGroup:{x:T},programUniforms:E}),getShaderSource:V}},yc=(e,t)=>{Eu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Iu(e.inputs,t)):e.compute(Cu(e.inputs,t))},wc=e=>he(e)}),zu,Au,Ou,Ru,Bu,Mu,Pu,Du,$c,km=D(()=>{"use strict";Q(),te(),re(),zu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Au=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${G("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${G("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${G("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Ou=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${G("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${G("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${G("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${G("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Ru=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${G("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${G("uniforms.x_shape",a,t)})) {
                  k = i32(${G("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${G("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Bu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${G("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${G("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${G("uniforms.x_shape",a,t)})) {
                  k -= i32(${G("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${G("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Mu=(e,t,r)=>{switch(r.mode){case 0:return Au(e,t,r.pads.length);case 1:return Ou(e,t,r.pads.length);case 2:return Ru(e,t,r.pads.length);case 3:return Bu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Pu=(e,t)=>{let r=A.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=A.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...F(e[0].dims,r));let l=["rank"],d=p=>{let f=H("output",e[0].dataType,r.length),u=B("x",e[0].dataType,i.length),m=u.type.value,$=Mu(f,i.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?m:"f32"}),`
            ${p.registerUniforms(g).declareVariables(u,f)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${$}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(A.size(r)/64)},programUniforms:n}),getShaderSource:d}},Du=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)n[Number(l[d])]=Number(r[d]),n[Number(l[d])+a]=Number(r[d+l.length])}else r.forEach((l,d)=>n[Number(d)]=Number(l));let s=[];return n.forEach(l=>s.push(l)),{mode:t.mode,value:i,pads:s}}else return t},$c=(e,t)=>{zu(e.inputs);let r=Du(e.inputs,t);e.compute(Pu(e.inputs,r),{inputs:[0]})}}),jt,Ni,Wi,qi,Vi,Uu,Nu,Li,ji,_c,vc,Fi,bc,xc,Gi,Sc,kc,Tc,Ec,Tm=D(()=>{"use strict";He(),Q(),te(),re(),jt=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ni=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=n?t.dilations.slice():[],p=t.pads.slice();Rr.adjustPoolAttributes(r,a,s,l,d,p);let f=Rr.computePoolOutputShape(r,a,l,d,s,p,t.autoPad),u=Object.assign({},t);n?Object.assign(u,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let m=f.slice();return m.push(m.splice(1,1)[0]),[u,i?m:f]},Wi=(e,t)=>{let r=t.format==="NHWC",i=A.size(e),a=A.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],u=!!(p+f);n.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let $=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(y+x),n.push({type:12,data:$},{type:12,data:g},{type:12,data:y},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,u,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=A.computeStrides(t.kernelShape);n.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,f)=>p+f);return[n,s,!!d,!1,!1]}},qi=(e,t,r,i,a,n,s,l,d,p,f,u)=>{let m=a.format==="NHWC",$=t.type.value,g=H("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",x="",b="",_=r-(m?2:1);if(f?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let S=r-(m?3:2);u?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,b=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${$}(${l});
              var pad = 0;
              ${x}
              ${y}
              ${b}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,x=a.pads.length,b="";return p?b=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(d).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${$}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${G("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${G("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${G("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${G("uniforms.pads","j - 2u",x)};
                  ${b}
              }
              ${s}

              output[global_idx] = value;
            }`}},Vi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Uu=e=>`${Vi(e)};${e.countIncludePad}`,Nu=e=>`${Vi(e)};${e.storageOrder};${e.dilations}`,Li=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ji=(e,t,r,i)=>{let[a,n]=Ni(t,i,r),s=B("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";a.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,u,m,$,g]=Wi(n,a);f.push(...F(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${$};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(A.size(n)/64)},programUniforms:f}),getShaderSource:x=>qi(x,s,t.dims.length,n.length,a,d,p,0,u,m,$,g)}},_c=e=>{let t=e.count_include_pad!==0,r=Li(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Uu(i)}},vc=(e,t)=>{jt(e.inputs),e.compute(ji("AveragePool",e.inputs[0],!1,t))},Fi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},bc=e=>{let t=e.format;return{format:t,...Fi,cacheKey:t}},xc=(e,t)=>{jt(e.inputs),e.compute(ji("GlobalAveragePool",e.inputs[0],!0,t))},Gi=(e,t,r,i)=>{let[a,n]=Ni(t,i,r),s=`
      value = max(x_val, value);
    `,l="",d=B("x",t.dataType,t.dims.length),p=["rank"],[f,u,m,$,g]=Wi(n,a);return f.push(...F(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${$};${g}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(A.size(n)/64)},programUniforms:f}),getShaderSource:y=>qi(y,d,t.dims.length,n.length,a,s,l,t.dataType===10?-65504:-1e5,u,m,$,g)}},Sc=(e,t)=>{jt(e.inputs),e.compute(Gi("MaxPool",e.inputs[0],!1,t))},kc=e=>{let t=e.storage_order,r=e.dilations,i=Li(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Nu(a)}},Tc=e=>{let t=e.format;return{format:t,...Fi,cacheKey:t}},Ec=(e,t)=>{jt(e.inputs),e.compute(Gi("GlobalMaxPool",e.inputs[0],!0,t))}}),Wu,qu,Cc,Ic,Em=D(()=>{"use strict";Q(),te(),ve(),re(),Wu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},qu=(e,t)=>{let r=A.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,l=A.size(n),d=i===3||i===2,p=d?[Math.ceil(A.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,u=e.length>2?e[2]:void 0,m=u?d?[Math.ceil(A.size(u.dims)/4)]:u.dims:void 0,$=f.length===0||f.length===1&&f[0]===1,g=$===!1&&f.length===1,y=_e(l),x=$&&(!d||y===4),b=x?y:1,_=x&&!d?y:1,S=B("input",d?12:i,p.length,_),T=B("scale",s,f.length),E=u?B("zero_point",d?12:i,m.length):void 0,I=H("output",s,n.length,b),C=[S,T];E&&C.push(E);let P=[p,f];u&&P.push(m);let V=[{type:12,data:l/b},{type:12,data:r},{type:12,data:t.blockSize},...F(...P,n)],W=X=>{let Z=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(Z).declareVariables(...C,I)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${$?`let scale_value= ${T.getByOffset("0")}`:g?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?$?d?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:g?d?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${d?a?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(l/b/64),y:1,z:1},programUniforms:V})}},Cc=(e,t)=>{Wu(e.inputs,t),e.compute(qu(e.inputs,t))},Ic=e=>he({axis:e.axis,blockSize:e.blockSize})}),Vu,Lu,zc,Cm=D(()=>{"use strict";He(),Q(),re(),Vu=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Lu=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,l=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...F(n)],d=p=>{let f=H("output",i,n.length),u=f.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:u},{name:"delta",type:u}];return`
        ${p.registerUniforms(m).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${u}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},zc=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&Vu(t,r,i),e.compute(Lu(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),ju,Fu,Gu,Hu,Ku,Yu,Zu,Qu,Xu,Ju,el,Hi,tl,rl,il,al,nl,Ac,Oc,Im=D(()=>{"use strict";Q(),te(),ve(),re(),ju=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Fu=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Gu=(e,t,r,i,a,n)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>n.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>i.push(f)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ju(i,t),t.axes.length>0&&Fu(i,t.axes,p).forEach((f,u)=>i[u]=f)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Hu=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ku=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Yu=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Zu=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Qu=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Xu=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${G("uniforms.scales","i",i)};
        var roi_low = ${G("uniforms.roi","i",a)};
        var roi_hi = ${G("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${G("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${G("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ju=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${G("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${G("uniforms.roi","i",n)};
          var roi_hi = ${G("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${G("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${G("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,el=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${G("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Hi=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",tl=(e,t,r,i,a)=>{let[n,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Hi(e,d,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},rl=(e,t,r,i,a,n,s,l,d,p)=>{let f=r.length===2,u=!0,[m,$]=f?[0,1]:u?[2,3]:[1,2],g=e.type.value,y=x=>{let b=x===m?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",x)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[x]},
        ${i[x]}, ${r[x]}, ${n[x]}, ${n[x]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[x]} - 1))) {
          return ${d};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${g} = originalIdx + ${g}(i);
          if (${b} < 0 || ${b} >= ${r[x]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${b} = max(0, min(${b}, ${r[x]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",x,`u32(${b})`)};
          data[i + 1] = ${x===m?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(m)};
    ${y($)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},il=(e,t,r,i,a)=>{let[n,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Hi(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},al=(e,t,r,i,a,n)=>{let s=e.dims,l=Yu(n,t.axes,s.length),d=Zu(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map((_,S)=>_===0?1:d[S]/_),t.keepAspectRatioPolicy!=="stretch"&&(d=Qu(s,p,t)));let f=H("output",e.dataType,d.length),u=B("input",e.dataType,s.length),m=A.size(d),$=s.length===d.length&&s.every((_,S)=>_===d[S]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,x=u.type.value,b=_=>`
      ${$?"":`
      ${Hu(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${el(u,s)};
              ${Ku(t.nearestMode,r,x)};
              ${Ju(u,f,s,d,p.length,l.length,g)};
              `;case"linear":return`
              ${Xu(f,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${tl(u,f,s,g,y)}`;if(s.length===3||s.length===5)return`${il(u,f,s,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${rl(u,f,s,d,p,l,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(u,f)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${$?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${u.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${u.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?p:""}|${a.length>0?a:""}|${l.length>0?l:""}|${$}|${s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:p},{type:1,data:l},...F(s,d)]})}},nl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ac=(e,t)=>{let r=[],i=[],a=[],n=nl(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Gu(e.inputs,t,n,r,i,a),e.compute(al(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Oc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),sl,ol,Rc,zm=D(()=>{"use strict";Q(),te(),ve(),re(),sl=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!A.areEqual(i.dims,[])&&!A.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!A.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],f=a.dims[0],u=A.sizeFromDimension(r.dims,1)/p,m=l===0?a.dims[1]*2:u/s;if(l>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ol=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],l=A.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,f=e[2].dims[1],u=a===0?f*2:p/i,m=new Array(s,d,p/u,u-f),$=A.computeStrides(m),g=[{type:1,data:n},{type:12,data:m},{type:12,data:$},...e[0].dims.length===3?new Array({type:12,data:[l,p,u,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,u,d*u,1]}):[],...F(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=x=>{let b=B("input",e[0].dataType,e[0].dims.length),_=B("position_ids",e[1].dataType,e[1].dims.length),S=B("cos_cache",e[2].dataType,e[2].dims.length),T=B("sin_cache",e[3].dataType,e[3].dims.length),E=H("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:$.length},{name:"input_output_strides",type:"u32",length:$.length}]),`
        ${x.declareVariables(b,_,S,T,E)}

        ${x.mainStart(Ut)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",H("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(A.size(m)/Ut)},programUniforms:g})}},Rc=(e,t)=>{sl(e.inputs,t),e.compute(ol(e.inputs,t))}}),ul,ll,Bc,Am=D(()=>{"use strict";Q(),te(),re(),ul=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},ll=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=A.size(n),l=n,d=s,p=n.slice(-1)[0],f=i?n.slice(0,-1).concat(1):[],u=!a&&e.length>3,m=e.length>4,$=i&&r>1,g=i&&r>2,y=r>3,x=64,b=_e(p),_=[{type:12,data:d},{type:12,data:b},{type:12,data:p},{type:1,data:t.epsilon}],S=E=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[B("x",e[0].dataType,e[0].dims,b),B("skip",e[1].dataType,e[1].dims,b),B("gamma",e[2].dataType,e[2].dims,b)];u&&C.push(B("beta",e[3].dataType,e[3].dims,b)),m&&C.push(B("bias",e[4].dataType,e[4].dims,b)),C.push(H("output",e[0].dataType,l,b)),$&&C.push(H("mean_output",1,f)),g&&C.push(H("inv_std_output",1,f)),y&&C.push(H("input_skip_bias_sum",e[0].dataType,l,b));let P=xe(e[0].dataType),V=xe(1,b);return`

      ${E.registerUniforms(I).declareVariables(...C)}
      var<workgroup> sum_shared : array<${V}, ${x}>;
      var<workgroup> sum_squared_shared : array<${V}, ${x}>;

      ${E.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":P+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Pt(P,b,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${pt("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${pt("square_sum",b)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${$?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${P}(mean)`}) *
            ${P}(inv_std_dev) * gamma[offset1d + i]
            ${u?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:f,dataType:1}),r>2&&T.push({dims:f,dataType:1}),r>3&&T.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${$};${g};${y}`,inputDependencies:e.map((E,I)=>"type")},getShaderSource:S,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:_})}},Bc=(e,t)=>{ul(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(ll(e.inputs,t,e.outputCount,!1),{outputs:r})}}),dl,Ft,pl,Ki,cl,hl,Mc,Pc,Om=D(()=>{"use strict";Q(),te(),ve(),re(),dl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Ft=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},pl=(e,t)=>{if(e.length>1){let r=Ft(e,1),i=Ft(e,2),a=Ft(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:a})}else return t},Ki=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},cl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${G("uniforms.input_shape","i",r.length)};
            let steps_i = ${G("uniforms.steps","i",r.length)};
            let signs_i = ${G("uniforms.signs","i",r.length)};
            let starts_i = ${G("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,hl=(e,t)=>{let r=e[0].dims,i=A.size(r),a=t.axes.length>0?A.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Ft(e,4);n.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((b,_)=>Ki(b,_,r,a,n)),l=t.ends.map((b,_)=>Ki(b,_,r,a,n));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let b=0;b<r.length;++b)a.includes(b)||(s.splice(b,0,0),l.splice(b,0,r[b]),n.splice(b,0,1));let d=n.map(b=>Math.sign(b));n.forEach((b,_,S)=>{if(b<0){let T=(l[_]-s[_])/b,E=s[_],I=E+T*n[_];s[_]=I,l[_]=E,S[_]=-b}});let p=r.slice(0);a.forEach((b,_)=>{p[b]=Math.ceil((l[b]-s[b])/n[b])});let f={dims:p,dataType:e[0].dataType},u=H("output",e[0].dataType,p.length),m=B("input",e[0].dataType,e[0].dims.length),$=A.size(p),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:$},{type:12,data:s},{type:6,data:d},{type:12,data:n},...F(e[0].dims,p)],x=b=>`
      ${b.registerUniforms(g).declareVariables(m,u)}
        ${cl(m,u,r)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${u.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${u.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Mc=(e,t)=>{dl(e.inputs,t);let r=pl(e.inputs,t);e.compute(hl(e.inputs,r),{inputs:[0]})},Pc=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),fl,ml,Dc,Uc,Rm=D(()=>{"use strict";Q(),te(),ve(),mt(),re(),fl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ml=(e,t)=>{let r=e.inputs[0],i=r.dims,a=A.size(i),n=64,s=i.length,l=A.normalizeAxis(t.axis,s),d=l<i.length-1,p,f=[];d?(f=Array.from({length:s},(C,P)=>P),f[l]=s-1,f[s-1]=l,p=e.compute(Me(r,f),{inputs:[r],outputs:[-1]})[0]):p=r;let u=p.dims,m=u[s-1],$=a/m,g=_e(m),y=m/g,x=(C,P)=>P===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:P===2?`max(${C}.x, ${C}.y)`:P===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,b=B("x",p.dataType,p.dims,g),_=H("result",p.dataType,p.dims,g),S=b.type.value,T=xe(p.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${n}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(b,_)}
      ${C.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${n};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${x("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${pt("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:u,dataType:p.dataType}],dispatchGroup:{x:$},programUniforms:[{type:6,data:y}]}),getShaderSource:E},{inputs:[p],outputs:[d?-1:0]})[0];d&&e.compute(Me(I,f),{inputs:[I]})},Dc=(e,t)=>{fl(e.inputs),ml(e,t)},Uc=e=>he({axis:e.axis})}),gl,yl,wl,$l,_l,Nc,Wc,Bm=D(()=>{"use strict";Q(),te(),ve(),re(),gl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},yl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},wl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${G("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,$l=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},_l=(e,t)=>{let r=e[0].dims,i=A.size(r),a=e[0].dataType,n=A.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=B("input",a,r.length),d=new Array(t.numOutputs),p=[],f=[],u=0,m=[{type:12,data:i}];for(let g=0;g<t.numOutputs;g++){u+=t.splitSizes[g],d[g]=u;let y=r.slice();y[n]=t.splitSizes[g],f.push(y),s[g]=H(`output${g}`,a,y.length),p.push({dims:f[g],dataType:e[0].dataType})}m.push({type:12,data:d},...F(r,...f));let $=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${wl(d.length)}
  ${$l(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${G("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},Nc=(e,t)=>{gl(e.inputs);let r=e.inputs.length===1?t:yl(e.inputs,t);e.compute(_l(e.inputs,r),{inputs:[0]})},Wc=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),vl,bl,qc,Mm=D(()=>{"use strict";Q(),te(),re(),vl=(e,t,r,i,a)=>{let n=H("output_data",a,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),l=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),p,f=(u,m,$)=>`select(${m}, ${u}, ${$})`;if(!i)p=n.setByOffset("global_idx",f(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let u=(m,$,g="")=>{let y=`a_data[index_a${$}][component_a${$}]`,x=`b_data[index_b${$}][component_b${$}]`,b=`bool(c_data[index_c${$}] & (0xffu << (component_c${$} * 8)))`;return`
            let output_indices${$} = ${n.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offset_a${$} = ${s.broadcastedIndicesToOffset(`output_indices${$}`,n)};
            let offset_b${$} = ${l.broadcastedIndicesToOffset(`output_indices${$}`,n)};
            let offset_c${$} = ${d.broadcastedIndicesToOffset(`output_indices${$}`,n)};
            let index_a${$} = offset_a${$} / 4u;
            let index_b${$} = offset_b${$} / 4u;
            let index_c${$} = offset_c${$} / 4u;
            let component_a${$} = offset_a${$} % 4u;
            let component_b${$} = offset_b${$} % 4u;
            let component_c${$} = offset_c${$} % 4u;
            ${m}[${$}] = ${g}(${f(y,x,b)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${u("data",0,"u32")}
            ${u("data",1,"u32")}
            ${u("data",2,"u32")}
            ${u("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${u("output_data[global_idx]",0)}
            ${u("output_data[global_idx]",1)}
            ${u("output_data[global_idx]",2)}
            ${u("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},bl=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(A.areEqual(t,r)&&A.areEqual(r,i)),s=t,l=A.size(t);if(n){let p=Dt.calcShape(Dt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=A.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>vl(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...F(i,t,r,s)]})}},qc=e=>{e.compute(bl(e.inputs))}}),Vc,Pm=D(()=>{"use strict";Jf(),Oa(),em(),tm(),rm(),im(),am(),um(),pm(),cm(),hm(),fm(),mm(),gm(),ym(),wm(),$m(),_m(),vm(),bm(),xm(),Vp(),Sm(),dc(),km(),Tm(),Em(),Cm(),Aa(),Im(),zm(),Am(),Om(),Rm(),Bm(),cc(),mt(),Ra(),Mm(),Vc=new Map([["Abs",[qd]],["Acos",[Vd]],["Acosh",[Ld]],["Add",[xp]],["ArgMax",[Dd,na]],["ArgMin",[Pd,na]],["Asin",[jd]],["Asinh",[Fd]],["Atan",[Gd]],["Atanh",[Hd]],["Attention",[Ud]],["AveragePool",[vc,_c]],["BatchNormalization",[Nd]],["BiasAdd",[Wd]],["BiasSplitGelu",[bp]],["Cast",[Yd,Kd]],["Ceil",[Qd]],["Clip",[Zd]],["Concat",[Rp,Bp]],["Conv",[da,la]],["ConvTranspose",[Fp,jp]],["Cos",[Xd]],["Cosh",[Jd]],["CumSum",[Gp,Hp]],["DepthToSpace",[Kp,Yp]],["DequantizeLinear",[Cc,Ic]],["Div",[Sp]],["Einsum",[Zp,Qp]],["Elu",[ep,Qt]],["Equal",[kp]],["Erf",[tp]],["Exp",[rp]],["Expand",[Xp]],["FastGelu",[Jp]],["Floor",[ip]],["FusedConv",[da,la]],["Gather",[tc,ec]],["GatherElements",[nc,ac]],["GatherBlockQuantized",[rc,ic]],["Gelu",[ap]],["Gemm",[oc,sc]],["GlobalAveragePool",[xc,bc]],["GlobalMaxPool",[Ec,Tc]],["Greater",[Ip]],["GreaterOrEqual",[Ap]],["GroupQueryAttention",[fc,hc]],["HardSigmoid",[cp,pp]],["InstanceNormalization",[mc]],["LayerNormalization",[gc]],["LeakyRelu",[np,Qt]],["Less",[zp]],["LessOrEqual",[Op]],["Log",[_p]],["MatMul",[qp]],["MatMulNBits",[yc,wc]],["MaxPool",[Sc,kc]],["Mul",[Tp]],["MultiHeadAttention",[lc,uc]],["Neg",[op]],["Not",[sp]],["Pad",[$c]],["Pow",[Ep]],["QuickGelu",[vp,Qt]],["Range",[zc]],["Reciprocal",[up]],["ReduceMin",[Ad]],["ReduceMean",[Td]],["ReduceMax",[zd]],["ReduceSum",[Rd]],["ReduceProd",[Od]],["ReduceL1",[Ed]],["ReduceL2",[Cd]],["ReduceLogSum",[Md]],["ReduceLogSumExp",[Id]],["ReduceSumSquare",[Bd]],["Relu",[lp]],["Resize",[Ac,Oc]],["RotaryEmbedding",[Rc]],["Sigmoid",[dp]],["Sin",[hp]],["Sinh",[fp]],["Slice",[Mc,Pc]],["SkipLayerNormalization",[Bc]],["Split",[Nc,Wc]],["Sqrt",[mp]],["Softmax",[Dc,Uc]],["Sub",[Cp]],["Tan",[gp]],["Tanh",[yp]],["ThresholdedRelu",[$p,Qt]],["Tile",[pc]],["Transpose",[fd,md]],["Where",[qc]]])}),Lc,Dm=D(()=>{"use strict";He(),tt(),re(),Lc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){et(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});a&&l.push({binding:l.length,resource:a});let d=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(e.programInfo.name)}dispose(){}build(e,t){et(e.name);let r=this.backend.device,i=[];r.features.has("shader-f16")&&i.push("enable f16;");let a=hd(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,l=r.createShaderModule({code:s,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Ge(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),xl,Sl,kl,jc,Um=D(()=>{"use strict";He(),Q(),tt(),ud(),Qf(),Pm(),Dm(),xl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Sl=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${xl(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},kl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},jc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(i),this.adapterInfo=new kl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=ld(this),this.programManager=new Lc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ea(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;et(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),l=s.kernelType,d=s.kernelName,p=a.programName,f=a.inputTensorViews,u=a.outputTensorViews,m=t[i*2],$=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let g=Number(m-this.queryTimeBase),y=Number($-this.queryTimeBase);if(!Number.isSafeInteger(g)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(x=>({dims:x.dims,dataType:kt(x.dataType)})),outputsMetadata:u.map(x=>({dims:x.dims,dataType:kt(x.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:p,startTime:g,endTime:y});else{let x="";f.forEach((_,S)=>{x+=`input[${S}]: [${_.dims}] | ${kt(_.dataType)}, `});let b="";u.forEach((_,S)=>{b+=`output[${S}]: [${_.dims}] | ${kt(_.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${d}|${p}" ${x}${b}execution time: ${y-g} ns`)}zr("GPU",`${p}::${m}::${$}`)}e.unmap(),this.pendingQueries.delete(e)}),Ge()}run(e,t,r,i,a,n){et(e.name);let s=[];for(let _=0;_<t.length;++_){let S=t[_].data;if(S===0)continue;let T=this.gpuDataManager.get(S);if(!T)throw new Error(`no GPU data for input: ${S}`);s.push(T)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),f=r.length===0?l.map((_,S)=>S):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let u=[],m=[];for(let _=0;_<l.length;++_){if(!Number.isInteger(f[_])||f[_]<-3||f[_]>=n)throw new Error(`Invalid output index: ${f[_]}`);if(f[_]===-3)continue;let S=f[_]===-1,T=f[_]===-2,E=S||T?a(l[_].dataType,l[_].dims):i(f[_],l[_].dataType,l[_].dims);if(u.push(E),E.data===0)continue;let I=this.gpuDataManager.get(E.data);if(!I)throw new Error(`no GPU data for output: ${E.data}`);if(S&&this.temporaryData.push(I),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(I)}m.push(I)}if(s.length!==t.length||m.length!==u.length){if(m.length===0)return Ge(e.name),u;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let $;if(p){let _=0,S=[];p.forEach(C=>{let P=typeof C.data=="number"?[C.data]:C.data;if(P.length===0)return;let V=C.type===10?2:4,W,X;C.type===10?(X=P.length>4?16:P.length>2?8:P.length*V,W=P.length>4?16:V*P.length):(X=P.length<=2?P.length*V:16,W=16),_=Math.ceil(_/X)*X,S.push(_);let Z=C.type===10?8:4;_+=P.length>4?Math.ceil(P.length/Z)*W:P.length*V});let T=16;_=Math.ceil(_/T)*T;let E=new ArrayBuffer(_);p.forEach((C,P)=>{let V=S[P],W=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,V,W.length).set(W);else if(C.type===12)new Uint32Array(E,V,W.length).set(W);else if(C.type===10)new Uint16Array(E,V,W.length).set(W);else if(C.type===1)new Float32Array(E,V,W.length).set(W);else throw new Error(`Unsupported uniform type: ${kt(C.type)}`)});let I=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,E,0,_),this.gpuDataManager.release(I.id),$={offset:0,size:_,buffer:I.buffer}}let g=this.programManager.normalizeDispatchGroupSize(d),y=g[1]===1&&g[2]===1,x=Sl(e,t,y),b=this.programManager.getArtifact(x);if(b||(b=this.programManager.build(e,g),this.programManager.setArtifact(x,b),ce("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),p&&b.uniformVariablesInfo){if(p.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${p.length} in program "${b.programInfo.name}".`);for(let _=0;_<p.length;_++){let S=p[_],T=S.type,E=typeof S.data=="number"?1:S.data.length,[I,C]=b.uniformVariablesInfo[_];if(T!==I||E!==C)throw new Error(`Uniform variable ${_} mismatch: expect type ${I} with size ${C}, got type ${T} with size ${E} in program "${b.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:u};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(b,s,m,g,$),Ge(e.name),u}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Vc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ra(this,e,t);return Ca(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Tl,Yi,Zi,El,Fc,Nm=D(()=>{"use strict";tt(),Tl=1,Yi=()=>Tl++,Zi=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){return this.tensorEntry?.[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(let[r,i,a]of this.tensorCache)if(t===r){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[r,i,a],!0}return!1}async ensureTensor(e,t,r){if(this.tensorEntry){let[n,s,l]=this.tensorEntry;if(s===e&&l.every((d,p)=>d===t[p]))return n}for(let[n,s,l]of this.tensorCache)if(s===e&&l.every((d,p)=>d===t[p])){if(r&&this.tensorEntry){ce("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);let d=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(n,d)}return this.tensorEntry=[n,s,l],n}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let i=MLTensorUsage.READ|MLTensorUsage.WRITE,a=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:i});return this.tensorEntry=[a,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&(this.mlContext?.writeTensor(a,this.activeUpload),this.activeUpload=void 0),a}upload(e){if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}this.mlContext?.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},El=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Yi();return this.tensorsById.set(e,new Zi),e}releaseTensorId(e){let t=this.tensorsById.get(e);if(t){t.destroy(),this.tensorsById.delete(e);for(let[r,i]of this.tensorIdsByContext)if(i.has(e)){i.delete(e),i.size===0&&this.tensorIdsByContext.delete(r);break}}}async ensureTensor(e,t,r,i){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorsById.get(e);if(!a)throw new Error("Tensor not found.");return a.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),this.tensorIdsByContext.get(this.backend.currentContext)?.add(e),a.ensureTensor(t,r,i)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){let t=this.tensorIdsByContext.get(e);if(t){for(let r of t)this.tensorsById.get(r).destroy(),this.tensorsById.delete(r);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,r,i){for(let[s,l]of this.tensorsById)if(l.trySelectTensor(e,t))return s;let a=Yi();this.tensorsById.set(a,new Zi(e,[t,r,i]));let n=this.tensorIdsByContext.get(e);return n||(n=new Set,this.tensorIdsByContext.set(e,n)),n.add(a),a}},Fc=(...e)=>new El(...e)}),Qi,Gc,Wm=D(()=>{"use strict";Q(),Tt(),ud(),Nm(),tt(),Qi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Gc=class{constructor(e){this.tensorManager=Fc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,Ea(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);r.delete(e),r.size===0&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i){let a=Qi.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,a,r,i)}uploadTensor(e,t){if(!Se().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ca(r,t)}}registerMLTensor(e,t,r){let i=Qi.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(this.currentContext,e,i,r);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}flush(){}}}),Hc={};tr(Hc,{init:()=>Kc});var Sr,Cl,Kc,qm=D(()=>{"use strict";Q(),Um(),tt(),te(),Wm(),Sr=class Yc{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=A.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(A.size(t)!==A.size(this.dims))throw new Error("Invalid new shape");return new Yc(this.module,this.dataType,this.data,t)}},Cl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.HEAPU32,a=r>>>2;this.opKernelContext=i[a++];let n=i[a++];this.outputCount=i[a++],this.customDataOffset=i[a++],this.customDataSize=i[a++];let s=[];for(let l=0;l<n;l++){let d=i[a++],p=i[a++],f=i[a++],u=[];for(let m=0;m<f;m++)u.push(i[a++]);s.push(new Sr(e,d,p,u))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,l,d)=>new Sr(this.module,l,this.output(s,d),d),n=(s,l)=>{let d=Mt(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new Sr(this.module,s,p,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.stackAlloc((1+t.length)*4),a=i>>2;this.module.HEAPU32[a++]=t.length;for(let n=0;n<t.length;n++)this.module.HEAPU32[a++]=t[n];return this.module._JsepOutput(this.opKernelContext,e,i)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Kc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new jc;await n.initialize(r,i),a("webgpu",[n,s=>n.alloc(s),s=>n.free(s),(s,l,d,p=!1)=>{if(p)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${s}, dst=${l}, size=${d}`),n.memcpy(s,l);else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${s}, gpuDataId=${l}, size=${d}`);let f=t.HEAPU8.subarray(s>>>0,(s>>>0)+d);n.upload(l,f)}},async(s,l,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await n.download(s,()=>t.HEAPU8.subarray(l>>>0,(l>>>0)+d))},(s,l,d)=>n.createKernel(s,l,d,t.UTF8ToString(t._JsepGetNodeName(l))),s=>n.releaseKernel(s),(s,l,d,p)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let f=new Cl(t,n,l);return n.computeKernel(s,f,p)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let n=new Gc(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,l,d,p)=>n.ensureTensor(s,l,d,p),(s,l)=>{n.uploadTensor(s,l)},async(s,l)=>n.downloadTensor(s,l)])}}}),Il,Ua,Na,lt,zl,Dr,Wa,qa,Xi,Va,La,ja,Zc=D(()=>{"use strict";Yf(),Zf(),Q(),Tt(),ba(),od(),Il=(e,t)=>{Se()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Ua=async e=>{Il(e.wasm.numThreads,Or(e.logLevel))},Na=async(e,t)=>{{let r=(qm(),Ir(Hc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Se(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Se(),e)}}},lt=new Map,zl=e=>{let t=Se(),r=t.stackSave();try{let i=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,i,i+4)!==0&&$e("Can't get session input/output count."),[t.HEAP32[i/4],t.HEAP32[i/4+1]]}finally{t.stackRestore(r)}},Dr=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Wa=async(e,t)=>{let r,i,a=Se();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Dr(e);let n=0,s=0,l=0,d=[],p=[],f=[];try{if([s,d]=sd(t),t?.externalData&&a.mountExternalData){let _=[];for(let S of t.externalData){let T=typeof S=="string"?S:S.path;_.push(Ta(typeof S=="string"?S:S.data).then(E=>{a.mountExternalData(T,E)}))}await Promise.all(_)}for(let _ of t?.executionProviders??[])if((typeof _=="string"?_:_.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,a.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof _!="string"){let S=_,T=S?.context,E=S?.gpuDevice,I=S?.deviceType,C=S?.numThreads,P=S?.powerPreference;T?a.currentContext=T:E?a.currentContext=await navigator.ml.createContext(E):a.currentContext=await navigator.ml.createContext({deviceType:I,numThreads:C,powerPreference:P})}else a.currentContext=await navigator.ml.createContext();break}n=await a._OrtCreateSession(r,i,s),n===0&&$e("Can't create a session."),a.currentContext&&(a.jsepRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[u,m]=zl(n),$=!!t?.enableGraphCapture,g=[],y=[],x=[];for(let _=0;_<u;_++){let S=a._OrtGetInputName(n,_);S===0&&$e("Can't get an input name."),p.push(S),g.push(a.UTF8ToString(S))}for(let _=0;_<m;_++){let S=a._OrtGetOutputName(n,_);S===0&&$e("Can't get an output name."),f.push(S);let T=a.UTF8ToString(S);y.push(T);{if($&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let E=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[T]??"cpu";if(E!=="cpu"&&E!=="cpu-pinned"&&E!=="gpu-buffer"&&E!=="ml-tensor")throw new Error(`Not supported preferred output location: ${E}.`);if($&&E!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${E}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(E)}}let b=null;return x.some(_=>_==="gpu-buffer"||_==="ml-tensor")&&(l=a._OrtCreateBinding(n),l===0&&$e("Can't create IO binding."),b={handle:l,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(_=>ta(_))}),lt.set(n,[n,p,f,b,$,!1]),[n,g,y]}catch(u){throw p.forEach(m=>a._OrtFree(m)),f.forEach(m=>a._OrtFree(m)),l!==0&&a._OrtReleaseBinding(l),n!==0&&a._OrtReleaseSession(n),u}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s),d.forEach(u=>a._free(u)),a.unmountExternalData?.()}},qa=e=>{let t=Se(),r=lt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle),t._OrtReleaseBinding(s.handle)),t.jsepOnReleaseSession?.(e),a.forEach(d=>t._OrtFree(d)),n.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(i),lt.delete(e)},Xi=(e,t,r,i,a,n=!1)=>{if(!e){t.push(0);return}let s=Se(),l=e[0],d=e[1],p=e[3],f,u;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let g=e[2].gpuBuffer;u=Mt(Yt(l),d);let y=s.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=y(i,a,g,u)}else if(p==="ml-tensor"){let g=e[2].mlTensor;u=Mt(Yt(l),d);let y=s.jsepRegisterMLTensor;if(!y)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=y(g,Yt(l),d)}else{let g=e[2];if(Array.isArray(g)){u=4*g.length,f=s._malloc(u),r.push(f);let y=f/4;for(let x=0;x<g.length;x++){if(typeof g[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.HEAPU32[y++]=Ce(g[x],r)}}else u=g.byteLength,f=s._malloc(u),r.push(f),s.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,u),f)}let m=s.stackSave(),$=s.stackAlloc(4*d.length);try{let g=$/4;d.forEach(x=>s.HEAP32[g++]=x);let y=s._OrtCreateTensor(Yt(l),f,u,$,d.length,ta(p));y===0&&$e(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(y)}finally{s.stackRestore(m)}},Va=async(e,t,r,i,a,n)=>{let s=Se(),l=lt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],f=l[2],u=l[3],m=l[4],$=l[5],g=t.length,y=i.length,x=0,b=[],_=[],S=[],T=[],E=s.stackSave(),I=s.stackAlloc(g*4),C=s.stackAlloc(g*4),P=s.stackAlloc(y*4),V=s.stackAlloc(y*4);try{s.jsepOnRunStart?.(d),[x,b]=nd(n);for(let L=0;L<g;L++)Xi(r[L],_,T,e,t[L],m);for(let L=0;L<y;L++)Xi(a[L],S,T,e,g+i[L],m);let W=I/4,X=C/4,Z=P/4,J=V/4;for(let L=0;L<g;L++)s.HEAPU32[W++]=_[L],s.HEAPU32[X++]=p[t[L]];for(let L=0;L<y;L++)s.HEAPU32[Z++]=S[L],s.HEAPU32[J++]=f[i[L]];if(u&&!$){let{handle:L,outputPreferredLocations:de,outputPreferredLocationsEncoded:oe}=u;if(p.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${p.length}).`);for(let j=0;j<g;j++){let ie=t[j];await s._OrtBindInput(L,p[ie],_[j])!==0&&$e(`Can't bind input[${j}] for session=${e}.`)}for(let j=0;j<y;j++){let ie=i[j];a[j]?.[3]?s._OrtBindOutput(L,f[ie],S[j],0)!==0&&$e(`Can't bind pre-allocated output[${j}] for session=${e}.`):s._OrtBindOutput(L,f[ie],0,oe[ie])!==0&&$e(`Can't bind output[${j}] to ${de[j]} for session=${e}.`)}lt.set(e,[d,p,f,u,m,!0])}let se;u?se=await s._OrtRunWithBinding(d,u.handle,y,P,x):se=await s._OrtRun(d,C,I,g,V,y,P,x),se!==0&&$e("failed to call OrtRun().");let ue=[];for(let L=0;L<y;L++){let de=s.HEAPU32[P/4+L];if(de===S[L]){ue.push(a[L]);continue}let oe=s.stackSave(),j=s.stackAlloc(16),ie=!1,R,U=0;try{s._OrtGetTensorData(de,j,j+4,j+8,j+12)!==0&&$e(`Can't access output tensor data on index ${L}.`);let ee=j/4,fe=s.HEAPU32[ee++];U=s.HEAPU32[ee++];let be=s.HEAPU32[ee++],ke=s.HEAPU32[ee++],Re=[];for(let me=0;me<ke;me++)Re.push(s.HEAPU32[be/4+me]);s._OrtFree(be);let Ke=Re.reduce((me,Te)=>me*Te,1);R=kt(fe);let Pe=u?.outputPreferredLocations[i[L]];if(R==="string"){if(Pe==="gpu-buffer"||Pe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[],Te=U/4;for(let Ye=0;Ye<Ke;Ye++){let rr=s.HEAPU32[Te++],yt=Ye===Ke-1?void 0:s.HEAPU32[Te]-rr;me.push(s.UTF8ToString(rr,yt))}ue.push([R,Re,me,"cpu"])}else if(Pe==="gpu-buffer"&&Ke>0){let me=s.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Te=me(U),Ye=Mt(fe,Ke);if(Ye===void 0||!Sa(R))throw new Error(`Unsupported data type: ${R}`);ie=!0,ue.push([R,Re,{gpuBuffer:Te,download:s.jsepCreateDownloader(Te,Ye,R),dispose:()=>{s._OrtReleaseTensor(de)}},"gpu-buffer"])}else if(Pe==="ml-tensor"&&Ke>0){let me=s.jsepEnsureTensor;if(!me)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Mt(fe,Ke)===void 0||!ka(R))throw new Error(`Unsupported data type: ${R}`);let Te=await me(U,fe,Re,!1);ie=!0,ue.push([R,Re,{mlTensor:Te,download:s.jsepCreateMLTensorDownloader(U,R),dispose:()=>{s.jsepReleaseTensorId(U),s._OrtReleaseTensor(de)}},"ml-tensor"])}else{let me=xa(R),Te=new me(Ke);new Uint8Array(Te.buffer,Te.byteOffset,Te.byteLength).set(s.HEAPU8.subarray(U,U+Te.byteLength)),ue.push([R,Re,Te,"cpu"])}}finally{s.stackRestore(oe),R==="string"&&U&&s._free(U),ie||s._OrtReleaseTensor(de)}}return u&&!m&&(s._OrtClearBoundOutputs(u.handle),lt.set(e,[d,p,f,u,m,!1])),ue}finally{s.stackRestore(E),_.forEach(W=>s._OrtReleaseTensor(W)),S.forEach(W=>s._OrtReleaseTensor(W)),T.forEach(W=>s._free(W)),x!==0&&s._OrtReleaseRunOptions(x),b.forEach(W=>s._free(W))}},La=e=>{let t=Se(),r=lt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&$e("Can't get an profile file name."),t._OrtFree(a)},ja=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),dt,Ne,Ot,Gt,Ht,kr,Ji,Tr,bt,xt,Al,Qc,Xc,Jc,eh,th,rh,ih,ah=D(()=>{"use strict";He(),Zc(),Tt(),Ur(),dt=()=>!!ge.wasm.proxy&&typeof document<"u",Ot=!1,Gt=!1,Ht=!1,Tr=new Map,bt=(e,t)=>{let r=Tr.get(e);r?r.push(t):Tr.set(e,[t])},xt=()=>{if(Ot||!Gt||Ht||!Ne)throw new Error("worker not ready")},Al=e=>{switch(e.data.type){case"init-wasm":Ot=!1,e.data.err?(Ht=!0,Ji[1](e.data.err)):(Gt=!0,Ji[0]()),kr&&(URL.revokeObjectURL(kr),kr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Tr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Qc=async()=>{if(!Gt){if(Ot)throw new Error("multiple calls to 'initWasm()' detected.");if(Ht)throw new Error("previous call to 'initWasm()' failed.");if(Ot=!0,dt())return new Promise((e,t)=>{Ne?.terminate(),id().then(([r,i])=>{try{Ne=i,Ne.onerror=n=>t(n),Ne.onmessage=Al,Ji=[e,t];let a={type:"init-wasm",in:ge};Ne.postMessage(a),kr=r}catch(a){t(a)}},t)});try{await va(ge.wasm),await Ua(ge),Gt=!0}catch(e){throw Ht=!0,e}finally{Ot=!1}}},Xc=async e=>{if(dt())return xt(),new Promise((t,r)=>{bt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Ne.postMessage(i)});await Na(ge,e)},Jc=async e=>dt()?(xt(),new Promise((t,r)=>{bt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ne.postMessage(i,[e.buffer])})):Dr(e),eh=async(e,t)=>{if(dt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return xt(),new Promise((r,i)=>{bt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ne.postMessage(a,n)})}else return Wa(e,t)},th=async e=>{if(dt())return xt(),new Promise((t,r)=>{bt("release",[t,r]);let i={type:"release",in:e};Ne.postMessage(i)});qa(e)},rh=async(e,t,r,i,a,n)=>{if(dt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return xt(),new Promise((s,l)=>{bt("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:n}};Ne.postMessage(p,ja(d))})}else return Va(e,t,r,i,a,n)},ih=async e=>{if(dt())return xt(),new Promise((t,r)=>{bt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ne.postMessage(i)});La(e)}}),ea,Ol,nh,Vm=D(()=>{"use strict";He(),ah(),Q(),_a(),od(),ea=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ol=e=>{switch(e[3]){case"cpu":return new Oe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Sa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Oe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!ka(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Oe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},nh=class{async fetchModelAndCopyToWasmMemory(e){return Jc(await Ta(e))}async loadModel(e,t){et();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await eh(r,t),Ge()}async dispose(){return th(this.sessionId)}async run(e,t,r){et();let i=[],a=[];Object.entries(e).forEach(u=>{let m=u[0],$=u[1],g=this.inputNames.indexOf(m);if(g===-1)throw new Error(`invalid input '${m}'`);i.push($),a.push(g)});let n=[],s=[];Object.entries(t).forEach(u=>{let m=u[0],$=u[1],g=this.outputNames.indexOf(m);if(g===-1)throw new Error(`invalid output '${m}'`);n.push($),s.push(g)});let l=i.map((u,m)=>ea(u,()=>`input "${this.inputNames[a[m]]}"`)),d=n.map((u,m)=>u?ea(u,()=>`output "${this.outputNames[s[m]]}"`):null),p=await rh(this.sessionId,a,l,s,d,r),f={};for(let u=0;u<p.length;u++)f[this.outputNames[s[u]]]=n[u]??Ol(p[u]);return Ge(),f}startProfiling(){}endProfiling(){ih(this.sessionId)}}}),sh={};tr(sh,{OnnxruntimeWebAssemblyBackend:()=>fa,initializeFlags:()=>ha,wasmBackend:()=>oh});var ha,fa,oh,Lm=D(()=>{"use strict";He(),ah(),Vm(),Ur(),ha=()=>{if((typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0),ge.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let e=typeof navigator>"u"?zf("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},fa=class{async init(e){ha(),await Qc(),await Xc(e)}async createInferenceSessionHandler(e,t){let r=new nh;return await r.loadModel(e,t),Promise.resolve(r)}},oh=new fa});He();He();He();var jm="1.20.1",Gm=Xl;{let e=(Lm(),Ir(sh)).wasmBackend;Bt("webgpu",e,5),Bt("webnn",e,5),Bt("cpu",e,10),Bt("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:jm,enumerable:!0});export{Kl as InferenceSession,zr as TRACE,et as TRACE_FUNC_BEGIN,Ge as TRACE_FUNC_END,Oe as Tensor,Ql as TrainingSession,Gm as default,ge as env,Bt as registerBackend};
/*! Bundled license information:

onnxruntime-web/dist/ort.webgpu.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.20.1
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.webgpu.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
//# sourceMappingURL=webgpu.mjs.map