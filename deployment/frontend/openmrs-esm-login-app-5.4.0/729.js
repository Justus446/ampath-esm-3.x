(globalThis.webpackChunk_openmrs_esm_login_app=globalThis.webpackChunk_openmrs_esm_login_app||[]).push([[729],{9729:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){var n=function(e,n){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(n)?n:String(n)}function a(e,n,t){return(n=i(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{I18nContext:()=>S,I18nextProvider:()=>ce,Trans:()=>Y,Translation:()=>ae,composeInitialProps:()=>T,date:()=>fe,getDefaults:()=>N,getI18n:()=>D,getInitialProps:()=>A,initReactI18next:()=>R,number:()=>ge,plural:()=>me,select:()=>ye,selectOrdinal:()=>be,setDefaults:()=>k,setI18n:()=>C,time:()=>de,useSSR:()=>se,useTranslation:()=>ee,withSSR:()=>pe,withTranslation:()=>oe});var c=t(5776),s=t(1432),u=t.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(u()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var f=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,g=Object.create(null);function y(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(y,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var m={parse:function(e,n){n||(n={}),n.components||(n.components=g);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(f,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),g=s+c.length,y=e.charAt(g);if(f){var m=p(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=p(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!y||"<"===y||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==y&&y)){u=-1===i?r:o[i].children;var b=e.indexOf("<",g),h=e.slice(g,-1===b?void 0:b);d.test(h)&&(h=" "),(b>-1&&i+u.length>=0||" "!==h)&&u.push({type:"text",content:h})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+y("",n)}),"")}};const b=m;function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}var v=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,O={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},j=function(e){return O[e]};function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x,E={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(v,j)}},S=(0,c.createContext)();function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E=P(P({},E),e)}function N(){return E}var I=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&h(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function C(e){x=e}function D(){return x}var R={type:"3rdParty",init:function(e){k(e.options.react),C(e)}};function T(e){return function(n){return new Promise((function(t){var r=A();e.getInitialProps?e.getInitialProps(n).then((function(e){t(P(P({},e),r))})):t(r)}))}}function A(){var e=D(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function L(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var z={};function B(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&z[n[0]]||("string"==typeof n[0]&&(z[n[0]]=new Date),L.apply(void 0,n))}function U(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function F(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var _=["format"],H=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function M(e){return e?e.props?e.props.children:e.children:[]}function $(e){return Array.isArray(e)?e:[e]}function q(e,n){if(!e)return"";var t="",i=$(e),a=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return i.forEach((function(e,i){if("string"==typeof e)t+="".concat(e);else if((0,c.isValidElement)(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=q(l,n);t+="<".concat(i,">").concat(p,"</").concat(i,">")}else t+="<".concat(i,"></").concat(i,">")}else if(null===e)L("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===o(e)){var f=e.format,d=r(e,_),g=Object.keys(d);if(1===g.length){var y=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(y,"}}")}else L("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else L("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function Y(e){var n=e.children,t=e.count,i=e.parent,a=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,m=e.t,h=e.shouldUnescape,v=r(e,H),O=(0,c.useContext)(S)||{},j=O.i18n,w=O.defaultNS,P=y||j||D();if(!P)return B("You will need to pass in an i18next instance by using i18nextReactModule"),n;var x=m||P.t.bind(P)||function(e){return e};s&&(l.context=s);var E=V(V({},N()),P.options&&P.options.react),k=g||x.ns||w||P.options&&P.options.defaultNS;k="string"==typeof k?[k]:k||["translation"];var I=f||q(n,E)||E.transEmptyNodeValue||a,C=E.hashTransKey,R=a||(C?C(I):I),T=p?l.interpolation:{interpolation:V(V({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=V(V(V(V({},l),{},{count:t},p),T),{},{defaultValue:I,ns:k}),L=function(e,n,t,r,i,a){if(""===n)return[];var s=r.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(s.join("|")).test(n);if(!e&&!u)return[n];var l={};!function e(n){$(n).forEach((function(n){"string"!=typeof n&&(W(n)?e(M(n)):"object"!==o(n)||(0,c.isValidElement)(n)||Object.assign(l,n))}))}(e);var p=b.parse("<0>".concat(n,"</0>")),f=V(V({},l),i);function d(e,n,t){var r=M(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,c.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push((0,c.cloneElement)(e,V(V({},e.props),{},{key:r}),o?void 0:n))}function y(n,i,l){var p=$(n);return $(i).reduce((function(n,i,m){var b,h,v,O=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){var j=p[parseInt(i.name,10)];!j&&1===l.length&&l[0][i.name]&&(j=l[0][i.name]),j||(j={});var w=0!==Object.keys(i.attrs).length?(b={props:i.attrs},(v=V({},h=j)).props=Object.assign(b.props,h.props),v):j,P=(0,c.isValidElement)(w),x=P&&W(i,!0)&&!i.voidElement,E=u&&"object"===o(w)&&w.dummy&&!P,S="object"===o(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof w){var k=t.services.interpolator.interpolate(w,f,t.language);n.push(k)}else if(W(w)||x)g(w,d(w,i,l),n,m);else if(E){var N=y(p,i.children,l);n.push((0,c.cloneElement)(w,V(V({},w.props),{},{key:m}),N))}else if(Number.isNaN(parseFloat(i.name)))if(S)g(w,d(w,i,l),n,m,i.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(i.name)>-1)if(i.voidElement)n.push((0,c.createElement)(i.name,{key:"".concat(i.name,"-").concat(m)}));else{var I=y(p,i.children,l);n.push((0,c.createElement)(i.name,{key:"".concat(i.name,"-").concat(m)},I))}else if(i.voidElement)n.push("<".concat(i.name," />"));else{var C=y(p,i.children,l);n.push("<".concat(i.name,">").concat(C,"</").concat(i.name,">"))}else if("object"!==o(w)||P)1===i.children.length&&O?n.push((0,c.cloneElement)(w,V(V({},w.props),{},{key:m}),O)):n.push((0,c.cloneElement)(w,V(V({},w.props),{},{key:m})));else{var D=i.children[0]?O:null;D&&n.push(D)}}else if("text"===i.type){var R=r.transWrapTextNodes,T=a?r.unescape(t.services.interpolator.interpolate(i.content,f,t.language)):t.services.interpolator.interpolate(i.content,f,t.language);R?n.push((0,c.createElement)(R,{key:"".concat(i.name,"-").concat(m)},T)):n.push(T)}return n}),[])}return M(y([{dummy:!0,children:e||[]}],p,$(e||[]))[0])}(d||n,R?x(R,A):I,P,E,A,h),z=void 0!==i?i:E.defaultTransParent;return z?(0,c.createElement)(z,v,L):L}function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,c=[],s=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var X=function(e,n){var t=(0,c.useRef)();return(0,c.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function ee(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,c.useContext)(S)||{},o=r.i18n,i=r.defaultNS,a=t||o||D();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new I),!a){B("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&B("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Q(Q(Q({},N()),a.options.react),n),p=l.useSuspense,f=l.keyPrefix,d=e||i||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var g=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}(e,n,t):(B("i18n.languages were undefined or empty",n.languages),!0)}(e,a,l)}));function y(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var m=Z((0,c.useState)(y),2),b=m[0],h=m[1],v=d.join(),O=X(v),j=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){j.current&&h(y)}return j.current=!0,g||p||U(a,d,(function(){j.current&&h(y)})),g&&O&&O!==v&&j.current&&h(y),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){j.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[a,v]);var w=(0,c.useRef)(!0);(0,c.useEffect)((function(){j.current&&!w.current&&h(y),w.current=!1}),[a,f]);var P=[b,a,g];if(P.t=b,P.i18n=a,P.ready=g,g)return P;if(!g&&!p)return P;throw new Promise((function(e){U(a,d,(function(){e()}))}))}var ne=["forwardedRef"];function te(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?te(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function oe(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function o(o){var i=o.forwardedRef,a=r(o,ne),s=Z(ee(e,re(re({},a),{},{keyPrefix:n.keyPrefix})),3),u=s[0],l=s[1],p=s[2],f=re(re({},a),{},{t:u,i18n:l,tReady:p});return n.withRef&&i?f.ref=i:!n.withRef&&i&&(f.forwardedRef=i),(0,c.createElement)(t,f)}return o.displayName="withI18nextTranslation(".concat(F(t),")"),o.WrappedComponent=t,n.withRef?(0,c.forwardRef)((function(e,n){return(0,c.createElement)(o,Object.assign({},e,{forwardedRef:n}))})):o}}var ie=["ns","children"];function ae(e){var n=e.ns,t=e.children,o=Z(ee(n,r(e,ie)),3),i=o[0],a=o[1],c=o[2];return t(i,{i18n:a,lng:a.language},c)}function ce(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,c.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,c.createElement)(S.Provider,{value:o},r)}function se(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,c.useContext)(S)||{}).i18n,o=t||r||D();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}var ue=["initialI18nStore","initialLanguage"];function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function pe(){return function(e){function n(n){var t=n.initialI18nStore,o=n.initialLanguage,i=r(n,ue);return se(t,o),(0,c.createElement)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))}return n.getInitialProps=T(e),n.displayName="withI18nextSSR(".concat(F(e),")"),n.WrappedComponent=e,n}}var fe=function(){return""},de=function(){return""},ge=function(){return""},ye=function(){return""},me=function(){return""},be=function(){return""}},1432:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);