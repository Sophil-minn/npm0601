(()=>{"use strict";var e={835:(e,r,t)=>{const o=t(147),{promisify:s}=t(837),n=s(o.access);e.exports=async e=>{try{return await n(e),!0}catch(e){return!1}},e.exports.sync=e=>{try{return o.accessSync(e),!0}catch(e){return!1}}},147:e=>{e.exports=require("fs")},837:e=>{e.exports=require("util")}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{const e=require("path");var r=t.n(e),o=t(835),s=t.n(o);console.log(r().resolve("."));const n=(c=r().resolve("."),console.log(s(),"pathExists"),s()(c)).then((e=>{console.log(e,"exist")}));var c;console.log(n)})()})();