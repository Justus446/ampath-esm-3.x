"use strict";(globalThis.webpackChunk_openmrs_esm_patient_medications_app=globalThis.webpackChunk_openmrs_esm_patient_medications_app||[]).push([[245],{6804:(t,r,e)=>{var n;e.d(r,{Z:()=>f});var o=new Uint8Array(16);function u(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));const s=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(i[t[r+0]]+i[t[r+1]]+i[t[r+2]]+i[t[r+3]]+"-"+i[t[r+4]]+i[t[r+5]]+"-"+i[t[r+6]]+i[t[r+7]]+"-"+i[t[r+8]]+i[t[r+9]]+"-"+i[t[r+10]]+i[t[r+11]]+i[t[r+12]]+i[t[r+13]]+i[t[r+14]]+i[t[r+15]]).toLowerCase();if(!function(t){return"string"==typeof t&&a.test(t)}(e))throw TypeError("Stringified UUID is invalid");return e},f=function(t,r,e){var n=(t=t||{}).random||(t.rng||u)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var o=0;o<16;++o)r[e+o]=n[o];return r}return s(n)}},8896:(t,r,e)=>{e.d(r,{Z:()=>u});var n=e(2411),o=e(3221);const u=(0,n.Z)(o.Z,"Map")},7459:(t,r,e)=>{e.d(r,{Z:()=>u});var n=e(2411),o=e(3221);const u=(0,n.Z)(o.Z,"Set")},5986:(t,r,e)=>{e.d(r,{Z:()=>c});var n=e(5441);const o=(u=Object.keys,a=Object,function(t){return u(a(t))});var u,a,i=Object.prototype.hasOwnProperty;const c=function(t){if(!(0,n.Z)(t))return o(t);var r=[];for(var e in Object(t))i.call(t,e)&&"constructor"!=e&&r.push(e);return r}},2411:(t,r,e)=>{e.d(r,{Z:()=>y});var n=e(8936);const o=e(3221).Z["__core-js_shared__"];var u,a=(u=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";var i=e(3122),c=e(6682),s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,v=l.hasOwnProperty,h=RegExp("^"+p.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const _=function(t){return!(!(0,i.Z)(t)||(r=t,a&&a in r))&&((0,n.Z)(t)?h:s).test((0,c.Z)(t));var r},y=function(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return _(e)?e:void 0}},2064:(t,r,e)=>{e.d(r,{Z:()=>w});var n=e(2411),o=e(3221);const u=(0,n.Z)(o.Z,"DataView");var a=e(8896);const i=(0,n.Z)(o.Z,"Promise");var c=e(7459);const s=(0,n.Z)(o.Z,"WeakMap");var f=e(8147),l=e(6682),p="[object Map]",v="[object Promise]",h="[object Set]",_="[object WeakMap]",y="[object DataView]",d=(0,l.Z)(u),b=(0,l.Z)(a.Z),Z=(0,l.Z)(i),g=(0,l.Z)(c.Z),j=(0,l.Z)(s),m=f.Z;(u&&m(new u(new ArrayBuffer(1)))!=y||a.Z&&m(new a.Z)!=p||i&&m(i.resolve())!=v||c.Z&&m(new c.Z)!=h||s&&m(new s)!=_)&&(m=function(t){var r=(0,f.Z)(t),e="[object Object]"==r?t.constructor:void 0,n=e?(0,l.Z)(e):"";if(n)switch(n){case d:return y;case b:return p;case Z:return v;case g:return h;case j:return _}return r});const w=m},5441:(t,r,e)=>{e.d(r,{Z:()=>o});var n=Object.prototype;const o=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||n)}},6682:(t,r,e)=>{e.d(r,{Z:()=>o});var n=Function.prototype.toString;const o=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},4405:(t,r,e)=>{e.d(r,{Z:()=>s});var n=e(8147),o=e(3391);const u=function(t){return(0,o.Z)(t)&&"[object Arguments]"==(0,n.Z)(t)};var a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable;const s=u(function(){return arguments}())?u:function(t){return(0,o.Z)(t)&&i.call(t,"callee")&&!c.call(t,"callee")}},3282:(t,r,e)=>{e.d(r,{Z:()=>u});var n=e(8936),o=e(1164);const u=function(t){return null!=t&&(0,o.Z)(t.length)&&!(0,n.Z)(t)}},2143:(t,r,e)=>{e.d(r,{Z:()=>i});var n=e(3221);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=o&&"object"==typeof module&&module&&!module.nodeType&&module,a=u&&u.exports===o?n.Z.Buffer:void 0;const i=(a?a.isBuffer:void 0)||function(){return!1}},7279:(t,r,e)=>{e.d(r,{Z:()=>p});var n=e(5986),o=e(2064),u=e(4405),a=e(7885),i=e(3282),c=e(2143),s=e(5441),f=e(2663),l=Object.prototype.hasOwnProperty;const p=function(t){if(null==t)return!0;if((0,i.Z)(t)&&((0,a.Z)(t)||"string"==typeof t||"function"==typeof t.splice||(0,c.Z)(t)||(0,f.Z)(t)||(0,u.Z)(t)))return!t.length;var r=(0,o.Z)(t);if("[object Map]"==r||"[object Set]"==r)return!t.size;if((0,s.Z)(t))return!(0,n.Z)(t).length;for(var e in t)if(l.call(t,e))return!1;return!0}},8936:(t,r,e)=>{e.d(r,{Z:()=>u});var n=e(8147),o=e(3122);const u=function(t){if(!(0,o.Z)(t))return!1;var r=(0,n.Z)(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},1164:(t,r,e)=>{e.d(r,{Z:()=>n});const n=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3122:(t,r,e)=>{e.d(r,{Z:()=>n});const n=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},2663:(t,r,e)=>{e.d(r,{Z:()=>v});var n=e(8147),o=e(1164),u=e(3391),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1;var i=e(2168),c="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=c&&"object"==typeof module&&module&&!module.nodeType&&module,f=s&&s.exports===c&&i.Z.process,l=function(){try{return s&&s.require&&s.require("util").types||f&&f.binding&&f.binding("util")}catch(t){}}(),p=l&&l.isTypedArray;const v=p?(h=p,function(t){return h(t)}):function(t){return(0,u.Z)(t)&&(0,o.Z)(t.length)&&!!a[(0,n.Z)(t)]};var h},2228:(t,r,e)=>{e.d(r,{Z:()=>n});const n=function(t){var r=null==t?0:t.length;return r?t[r-1]:void 0}},6002:(t,r,e)=>{e.d(r,{Z:()=>kt});const n=function(t,r){return t===r||t!=t&&r!=r},o=function(t,r){for(var e=t.length;e--;)if(n(t[e][0],r))return e;return-1};var u=Array.prototype.splice;function a(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}a.prototype.clear=function(){this.__data__=[],this.size=0},a.prototype.delete=function(t){var r=this.__data__,e=o(r,t);return!(e<0||(e==r.length-1?r.pop():u.call(r,e,1),--this.size,0))},a.prototype.get=function(t){var r=this.__data__,e=o(r,t);return e<0?void 0:r[e][1]},a.prototype.has=function(t){return o(this.__data__,t)>-1},a.prototype.set=function(t,r){var e=this.__data__,n=o(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};const i=a;var c=e(8896);const s=(0,e(2411).Z)(Object,"create");var f=Object.prototype.hasOwnProperty;var l=Object.prototype.hasOwnProperty;function p(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}p.prototype.clear=function(){this.__data__=s?s(null):{},this.size=0},p.prototype.delete=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},p.prototype.get=function(t){var r=this.__data__;if(s){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return f.call(r,t)?r[t]:void 0},p.prototype.has=function(t){var r=this.__data__;return s?void 0!==r[t]:l.call(r,t)},p.prototype.set=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=s&&void 0===r?"__lodash_hash_undefined__":r,this};const v=p,h=function(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map};function _(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}_.prototype.clear=function(){this.size=0,this.__data__={hash:new v,map:new(c.Z||i),string:new v}},_.prototype.delete=function(t){var r=h(this,t).delete(t);return this.size-=r?1:0,r},_.prototype.get=function(t){return h(this,t).get(t)},_.prototype.has=function(t){return h(this,t).has(t)},_.prototype.set=function(t,r){var e=h(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};const y=_;function d(t){var r=this.__data__=new i(t);this.size=r.size}d.prototype.clear=function(){this.__data__=new i,this.size=0},d.prototype.delete=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e},d.prototype.get=function(t){return this.__data__.get(t)},d.prototype.has=function(t){return this.__data__.has(t)},d.prototype.set=function(t,r){var e=this.__data__;if(e instanceof i){var n=e.__data__;if(!c.Z||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new y(n)}return e.set(t,r),this.size=e.size,this};const b=d;function Z(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new y;++r<e;)this.add(t[r])}Z.prototype.add=Z.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Z.prototype.has=function(t){return this.__data__.has(t)};const g=Z,j=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1},m=function(t,r){return t.has(r)},w=function(t,r,e,n,o,u){var a=1&e,i=t.length,c=r.length;if(i!=c&&!(a&&c>i))return!1;var s=u.get(t),f=u.get(r);if(s&&f)return s==r&&f==t;var l=-1,p=!0,v=2&e?new g:void 0;for(u.set(t,r),u.set(r,t);++l<i;){var h=t[l],_=r[l];if(n)var y=a?n(_,h,l,r,t,u):n(h,_,l,t,r,u);if(void 0!==y){if(y)continue;p=!1;break}if(v){if(!j(r,(function(t,r){if(!m(v,r)&&(h===t||o(h,t,e,n,u)))return v.push(r)}))){p=!1;break}}else if(h!==_&&!o(h,_,e,n,u)){p=!1;break}}return u.delete(t),u.delete(r),p};var O=e(187);const z=e(3221).Z.Uint8Array,A=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e},x=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e};var S=O.Z?O.Z.prototype:void 0,k=S?S.valueOf:void 0;var P=e(7885);var E=Object.prototype.propertyIsEnumerable,C=Object.getOwnPropertySymbols;const $=C?function(t){return null==t?[]:(t=Object(t),function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,u=[];++e<n;){var a=t[e];r(a,e,t)&&(u[o++]=a)}return u}(C(t),(function(r){return E.call(t,r)})))}:function(){return[]};var T=e(4405),R=e(2143),V=/^(?:0|[1-9]\d*)$/;const F=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&V.test(t))&&t>-1&&t%1==0&&t<r};var M=e(2663),U=Object.prototype.hasOwnProperty;const B=function(t,r){var e=(0,P.Z)(t),n=!e&&(0,T.Z)(t),o=!e&&!n&&(0,R.Z)(t),u=!e&&!n&&!o&&(0,M.Z)(t),a=e||n||o||u,i=a?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],c=i.length;for(var s in t)!r&&!U.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||u&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||F(s,c))||i.push(s);return i};var D=e(5986),I=e(3282);const L=function(t){return(0,I.Z)(t)?B(t):(0,D.Z)(t)},W=function(t){return function(t,r,e){var n=r(t);return(0,P.Z)(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,L,$)};var q=Object.prototype.hasOwnProperty;var N=e(2064),G="[object Arguments]",H="[object Array]",J="[object Object]",K=Object.prototype.hasOwnProperty;const Q=function(t,r,e,o,u,a){var i=(0,P.Z)(t),c=(0,P.Z)(r),s=i?H:(0,N.Z)(t),f=c?H:(0,N.Z)(r),l=(s=s==G?J:s)==J,p=(f=f==G?J:f)==J,v=s==f;if(v&&(0,R.Z)(t)){if(!(0,R.Z)(r))return!1;i=!0,l=!1}if(v&&!l)return a||(a=new b),i||(0,M.Z)(t)?w(t,r,e,o,u,a):function(t,r,e,o,u,a,i){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new z(t),new z(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return n(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var c=A;case"[object Set]":var s=1&o;if(c||(c=x),t.size!=r.size&&!s)return!1;var f=i.get(t);if(f)return f==r;o|=2,i.set(t,r);var l=w(c(t),c(r),o,u,a,i);return i.delete(t),l;case"[object Symbol]":if(k)return k.call(t)==k.call(r)}return!1}(t,r,s,e,o,u,a);if(!(1&e)){var h=l&&K.call(t,"__wrapped__"),_=p&&K.call(r,"__wrapped__");if(h||_){var y=h?t.value():t,d=_?r.value():r;return a||(a=new b),u(y,d,e,o,a)}}return!!v&&(a||(a=new b),function(t,r,e,n,o,u){var a=1&e,i=W(t),c=i.length;if(c!=W(r).length&&!a)return!1;for(var s=c;s--;){var f=i[s];if(!(a?f in r:q.call(r,f)))return!1}var l=u.get(t),p=u.get(r);if(l&&p)return l==r&&p==t;var v=!0;u.set(t,r),u.set(r,t);for(var h=a;++s<c;){var _=t[f=i[s]],y=r[f];if(n)var d=a?n(y,_,f,r,t,u):n(_,y,f,t,r,u);if(!(void 0===d?_===y||o(_,y,e,n,u):d)){v=!1;break}h||(h="constructor"==f)}if(v&&!h){var b=t.constructor,Z=r.constructor;b==Z||!("constructor"in t)||!("constructor"in r)||"function"==typeof b&&b instanceof b&&"function"==typeof Z&&Z instanceof Z||(v=!1)}return u.delete(t),u.delete(r),v}(t,r,e,o,u,a))};var X=e(3391);const Y=function t(r,e,n,o,u){return r===e||(null==r||null==e||!(0,X.Z)(r)&&!(0,X.Z)(e)?r!=r&&e!=e:Q(r,e,n,o,t,u))};var tt=e(3122);const rt=function(t){return t==t&&!(0,tt.Z)(t)},et=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},nt=function(t){var r=function(t){for(var r=L(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,rt(o)]}return r}(t);return 1==r.length&&r[0][2]?et(r[0][0],r[0][1]):function(e){return e===t||function(t,r,e,n){var o=e.length,u=o,a=!n;if(null==t)return!u;for(t=Object(t);o--;){var i=e[o];if(a&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<u;){var c=(i=e[o])[0],s=t[c],f=i[1];if(a&&i[2]){if(void 0===s&&!(c in t))return!1}else{var l=new b;if(n)var p=n(s,f,c,t,r,l);if(!(void 0===p?Y(f,s,3,n,l):p))return!1}}return!0}(e,t,r)}};var ot=e(2758),ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,at=/^\w*$/;const it=function(t,r){if((0,P.Z)(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!(0,ot.Z)(t))||at.test(t)||!ut.test(t)||null!=r&&t in Object(r)};function ct(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return e.cache=u.set(o,a)||u,a};return e.cache=new(ct.Cache||y),e}ct.Cache=y;var st=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g;const lt=(pt=ct((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(st,(function(t,e,n,o){r.push(n?o.replace(ft,"$1"):e||t)})),r}),(function(t){return 500===vt.size&&vt.clear(),t})),vt=pt.cache,pt);var pt,vt,ht=e(4020);const _t=function(t,r){return(0,P.Z)(t)?t:it(t,r)?[t]:lt((0,ht.Z)(t))},yt=function(t){if("string"==typeof t||(0,ot.Z)(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},dt=function(t,r){for(var e=0,n=(r=_t(r,t)).length;null!=t&&e<n;)t=t[yt(r[e++])];return e&&e==n?t:void 0},bt=function(t,r){return null!=t&&r in Object(t)};var Zt=e(1164);const gt=function(t,r){return null!=t&&function(t,r,e){for(var n=-1,o=(r=_t(r,t)).length,u=!1;++n<o;){var a=yt(r[n]);if(!(u=null!=t&&e(t,a)))break;t=t[a]}return u||++n!=o?u:!!(o=null==t?0:t.length)&&(0,Zt.Z)(o)&&F(a,o)&&((0,P.Z)(t)||(0,T.Z)(t))}(t,r,bt)},jt=function(t,r){return it(t)&&rt(r)?et(yt(t),r):function(e){var n=function(t,r,e){var n=null==t?void 0:dt(t,r);return void 0===n?e:n}(e,t);return void 0===n&&n===r?gt(e,t):Y(r,n,3)}},mt=function(t){return t},wt=function(t){return it(t)?(r=yt(t),function(t){return null==t?void 0:t[r]}):function(t){return function(r){return dt(r,t)}}(t);var r},Ot=function(t){return t!=t},zt=function(t,r){return!(null==t||!t.length)&&function(t,r,e){return r==r?function(t,r,e){for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}(t,r,e):function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,Ot,e)}(t,r,0)>-1},At=function(t,r,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(r,t[n]))return!0;return!1};var xt=e(7459);const St=xt.Z&&1/x(new xt.Z([,-0]))[1]==1/0?function(t){return new xt.Z(t)}:function(){},kt=function(t,r){return t&&t.length?function(t,r,e){var n=-1,o=zt,u=t.length,a=!0,i=[],c=i;if(e)a=!1,o=At;else if(u>=200){var s=r?null:St(t);if(s)return x(s);a=!1,o=m,c=new g}else c=r?[]:i;t:for(;++n<u;){var f=t[n],l=r?r(f):f;if(f=e||0!==f?f:0,a&&l==l){for(var p=c.length;p--;)if(c[p]===l)continue t;r&&c.push(l),i.push(f)}else o(c,l,e)||(c!==i&&c.push(l),i.push(f))}return i}(t,"function"==typeof(e=r)?e:null==e?mt:"object"==typeof e?(0,P.Z)(e)?jt(e[0],e[1]):nt(e):wt(e)):[];var e}}}]);