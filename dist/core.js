(()=>{"use strict";var e={835:(e,r,o)=>{const t=o(147),{promisify:s}=o(837),n=s(t.access);e.exports=async e=>{try{return await n(e),!0}catch(e){return!1}},e.exports.sync=e=>{try{return t.accessSync(e),!0}catch(e){return!1}}},147:e=>{e.exports=require("fs")},837:e=>{e.exports=require("util")}},r={};function o(t){var s=r[t];if(void 0!==s)return s.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{const e=require("path");var r=o.n(e),t=o(835),s=o.n(t);console.log(r().resolve("."));const n=(c=r().resolve("."),console.log(s(),"pathExists"),s()(c)).then((e=>{console.log(e,"exist")}));var c;console.log(n),async function(){await new Promise((e=>setTimeout(e,2e3))),console.log("ok")}()})()})();