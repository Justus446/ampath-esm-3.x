(globalThis.webpackChunk_openmrs_esm_active_visits_app=globalThis.webpackChunk_openmrs_esm_active_visits_app||[]).push([[588],{6588:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{I18nContext:()=>E,I18nextProvider:()=>ae,Trans:()=>q,Translation:()=>ie,composeInitialProps:()=>R,date:()=>pe,getDefaults:()=>k,getI18n:()=>C,getInitialProps:()=>T,initReactI18next:()=>D,number:()=>de,plural:()=>ye,select:()=>ge,selectOrdinal:()=>me,setDefaults:()=>S,setI18n:()=>I,time:()=>fe,useSSR:()=>ce,useTranslation:()=>X,withSSR:()=>le,withTranslation:()=>re});var a=t(5206),c=t(4896),s=t.n(c),u=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function l(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(s()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(u),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,f=/^\s*$/,d=Object.create(null);function g(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(g,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var y={parse:function(e,n){n||(n={}),n.components||(n.components=d);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,p="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),g=s+c.length,y=e.charAt(g);if(d){var m=l(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(p&&(i++,"tag"===(t=l(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!y||"<"===y||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!p||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==y&&y)){u=-1===i?r:o[i].children;var h=e.indexOf("<",g),b=e.slice(g,-1===h?void 0:h);f.test(b)&&(b=" "),(h>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+g("",n)}),"")}};const m=y;function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,v={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},O=function(e){return v[e]};function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P,x={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(b,O)}},E=(0,a.createContext)();function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x=w(w({},x),e)}function k(){return x}var N=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&h(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function I(e){P=e}function C(){return P}var D={type:"3rdParty",init:function(e){S(e.options.react),I(e)}};function R(e){return function(n){return new Promise((function(t){var r=T();e.getInitialProps?e.getInitialProps(n).then((function(e){t(w(w({},e),r))})):t(r)}))}}function T(){var e=C(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function A(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var L={};function z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&L[n[0]]||("string"==typeof n[0]&&(L[n[0]]=new Date),A.apply(void 0,n))}function B(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function _(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var U=["format"],F=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function W(e){return e?e.props?e.props.children:e.children:[]}function M(e){return Array.isArray(e)?e:[e]}function $(e,n){if(!e)return"";var t="",i=M(e),c=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return i.forEach((function(e,i){if("string"==typeof e)t+="".concat(e);else if((0,a.isValidElement)(e)){var s=Object.keys(e.props).length,u=c.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=$(l,n);t+="<".concat(i,">").concat(p,"</").concat(i,">")}else t+="<".concat(i,"></").concat(i,">")}else if(null===e)A("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===o(e)){var f=e.format,d=r(e,U),g=Object.keys(d);if(1===g.length){var y=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(y,"}}")}else A("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else A("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function q(e){var n=e.children,t=e.count,i=e.parent,c=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,h=e.t,b=e.shouldUnescape,v=r(e,F),O=(0,a.useContext)(E)||{},j=O.i18n,w=O.defaultNS,P=y||j||C();if(!P)return z("You will need to pass in an i18next instance by using i18nextReactModule"),n;var x=h||P.t.bind(P)||function(e){return e};s&&(l.context=s);var S=K(K({},k()),P.options&&P.options.react),N=g||x.ns||w||P.options&&P.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];var I=f||$(n,S)||S.transEmptyNodeValue||c,D=S.hashTransKey,R=c||(D?D(I):I),T=p?l.interpolation:{interpolation:K(K({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=K(K(K(K({},l),{},{count:t},p),T),{},{defaultValue:I,ns:N}),L=function(e,n,t,r,i,c){if(""===n)return[];var s=r.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(s.join("|")).test(n);if(!e&&!u)return[n];var l={};!function e(n){M(n).forEach((function(n){"string"!=typeof n&&(V(n)?e(W(n)):"object"!==o(n)||(0,a.isValidElement)(n)||Object.assign(l,n))}))}(e);var p=m.parse("<0>".concat(n,"</0>")),f=K(K({},l),i);function d(e,n,t){var r=W(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,a.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push((0,a.cloneElement)(e,K(K({},e.props),{},{key:r}),o?void 0:n))}function y(n,i,l){var p=M(n);return M(i).reduce((function(n,i,m){var h,b,v,O=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){var j=p[parseInt(i.name,10)];!j&&1===l.length&&l[0][i.name]&&(j=l[0][i.name]),j||(j={});var w=0!==Object.keys(i.attrs).length?(h={props:i.attrs},(v=K({},b=j)).props=Object.assign(h.props,b.props),v):j,P=(0,a.isValidElement)(w),x=P&&V(i,!0)&&!i.voidElement,E=u&&"object"===o(w)&&w.dummy&&!P,S="object"===o(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof w){var k=t.services.interpolator.interpolate(w,f,t.language);n.push(k)}else if(V(w)||x)g(w,d(w,i,l),n,m);else if(E){var N=y(p,i.children,l);n.push((0,a.cloneElement)(w,K(K({},w.props),{},{key:m}),N))}else if(Number.isNaN(parseFloat(i.name)))if(S)g(w,d(w,i,l),n,m,i.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(i.name)>-1)if(i.voidElement)n.push((0,a.createElement)(i.name,{key:"".concat(i.name,"-").concat(m)}));else{var I=y(p,i.children,l);n.push((0,a.createElement)(i.name,{key:"".concat(i.name,"-").concat(m)},I))}else if(i.voidElement)n.push("<".concat(i.name," />"));else{var C=y(p,i.children,l);n.push("<".concat(i.name,">").concat(C,"</").concat(i.name,">"))}else if("object"!==o(w)||P)1===i.children.length&&O?n.push((0,a.cloneElement)(w,K(K({},w.props),{},{key:m}),O)):n.push((0,a.cloneElement)(w,K(K({},w.props),{},{key:m})));else{var D=i.children[0]?O:null;D&&n.push(D)}}else if("text"===i.type){var R=r.transWrapTextNodes,T=c?r.unescape(t.services.interpolator.interpolate(i.content,f,t.language)):t.services.interpolator.interpolate(i.content,f,t.language);R?n.push((0,a.createElement)(R,{key:"".concat(i.name,"-").concat(m)},T)):n.push(T)}return n}),[])}return W(y([{dummy:!0,children:e||[]}],p,M(e||[]))[0])}(d||n,R?x(R,A):I,P,S,A,b),B=void 0!==i?i:S.defaultTransParent;return B?(0,a.createElement)(B,v,L):L}function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Y(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Q=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function X(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(E)||{},o=r.i18n,i=r.defaultNS,c=t||o||C();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new N),!c){z("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=G(G(G({},k()),c.options.react),n),p=l.useSuspense,f=l.keyPrefix,d=e||i||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var g=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}(e,n,t):(z("i18n.languages were undefined or empty",n.languages),!0)}(e,c,l)}));function y(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var m=J((0,a.useState)(y),2),h=m[0],b=m[1],v=d.join(),O=Q(v),j=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){j.current&&b(y)}return j.current=!0,g||p||B(c,d,(function(){j.current&&b(y)})),g&&O&&O!==v&&j.current&&b(y),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){j.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,v]);var w=(0,a.useRef)(!0);(0,a.useEffect)((function(){j.current&&!w.current&&b(y),w.current=!1}),[c,f]);var P=[h,c,g];if(P.t=h,P.i18n=c,P.ready=g,g)return P;if(!g&&!p)return P;throw new Promise((function(e){B(c,d,(function(){e()}))}))}var ee=["forwardedRef"];function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function re(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function o(o){var i=o.forwardedRef,c=r(o,ee),s=J(X(e,te(te({},c),{},{keyPrefix:n.keyPrefix})),3),u=s[0],l=s[1],p=s[2],f=te(te({},c),{},{t:u,i18n:l,tReady:p});return n.withRef&&i?f.ref=i:!n.withRef&&i&&(f.forwardedRef=i),(0,a.createElement)(t,f)}return o.displayName="withI18nextTranslation(".concat(_(t),")"),o.WrappedComponent=t,n.withRef?(0,a.forwardRef)((function(e,n){return(0,a.createElement)(o,Object.assign({},e,{forwardedRef:n}))})):o}}var oe=["ns","children"];function ie(e){var n=e.ns,t=e.children,o=J(X(n,r(e,oe)),3),i=o[0],a=o[1],c=o[2];return t(i,{i18n:a,lng:a.language},c)}function ae(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,a.createElement)(E.Provider,{value:o},r)}function ce(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).i18n,r=((0,a.useContext)(E)||{}).i18n,o=t||r||C();o.options&&o.options.isClone||(e&&!o.initializedStoreOnce&&(o.services.resourceStore.data=e,o.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),o.options.ns),o.initializedStoreOnce=!0,o.isInitialized=!0),n&&!o.initializedLanguageOnce&&(o.changeLanguage(n),o.initializedLanguageOnce=!0))}var se=["initialI18nStore","initialLanguage"];function ue(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function le(){return function(e){function n(n){var t=n.initialI18nStore,o=n.initialLanguage,c=r(n,se);return ce(t,o),(0,a.createElement)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ue(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c))}return n.getInitialProps=R(e),n.displayName="withI18nextSSR(".concat(_(e),")"),n.WrappedComponent=e,n}}var pe=function(){return""},fe=function(){return""},de=function(){return""},ge=function(){return""},ye=function(){return""},me=function(){return""}},4896:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);