"use strict";(globalThis.webpackChunk_openmrs_esm_active_visits_app=globalThis.webpackChunk_openmrs_esm_active_visits_app||[]).push([[382,635],{6635:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,infinite:()=>d,unstable_serialize:()=>o});var n=r(5206),a=r(3255),i=r(3325),s=r(3100);const l="$inf$",u=Promise.resolve(),c=e=>(0,i.serialize)(e?e(0,null):null)[0],o=e=>l+c(e),d=e=>(t,r,a)=>{const o=(0,n.useRef)(!1),d=(0,n.useRef)(),{cache:f,initialSize:_=1,revalidateAll:p=!1,persistSize:h=!1,revalidateFirstPage:v=!0,revalidateOnMount:b=!1}=a;let g;try{g=c(t),g&&(g=l+g)}catch(e){}const[m,k,C]=(0,i.createCacheHelper)(f,g),U=(0,n.useCallback)((()=>(0,i.isUndefined)(m()._l)?_:m()._l),[f,g,_]);(0,s.useSyncExternalStore)((0,n.useCallback)((e=>g?C(g,(()=>{e()})):()=>{}),[f,g]),U,U);const y=(0,n.useCallback)((()=>{const e=m()._l;return(0,i.isUndefined)(e)?_:e}),[g,_]),z=(0,n.useRef)(y());(0,i.useIsomorphicLayoutEffect)((()=>{o.current?g&&k({_l:h?z.current:_}):o.current=!0}),[g,f]);const E=b&&!o.current,w=e(g,(async()=>{const[e,n]=m()._i||[],s=[],l=y();let u=null;for(let c=0;c<l;++c){const[l,o]=(0,i.serialize)(t(c,u));if(!l)break;const[_,h]=(0,i.createCacheHelper)(f,l);let b=_().data;const g=p||e||(0,i.isUndefined)(b)||v&&!c&&!(0,i.isUndefined)(d.current)||E||n&&!(0,i.isUndefined)(n[c])&&!a.compare(n[c],b);r&&g&&(b=await r(o),h({data:b,_k:o})),s.push(b),u=b}return k({_i:i.UNDEFINED}),s}),a);(0,i.useIsomorphicLayoutEffect)((()=>{d.current=w.data}),[w.data]);const S=(0,n.useCallback)((function(e,t){const r="boolean"==typeof t?{revalidate:t}:t||{},n=!1!==r.revalidate;if(!g)return u;if(n)if((0,i.isUndefined)(e))k({_i:[!0]});else{const e=d.current;k({_i:[!1,e]})}return arguments.length?w.mutate(e,{...r,revalidate:n}):w.mutate()}),[g,f]),D=(0,n.useCallback)((e=>{if(!g)return u;let r;return(0,i.isFunction)(e)?r=e(y()):"number"==typeof e&&(r=e),"number"!=typeof r?u:(k({_l:r}),z.current=r,S((e=>{const r=[];let n=null;for(let s=0;s<e;++s){var a;const[e]=(0,i.serialize)(t(s,n)),l=e?null==(a=f.get(e))?void 0:a.data:i.UNDEFINED;if((0,i.isUndefined)(l))return d.current;r.push(l),n=l}return r})(r)))}),[g,y,S,f]);return{size:y(),setSize:D,mutate:S,get data(){return w.data},get error(){return w.error},get isValidating(){return w.isValidating},get isLoading(){return w.isLoading}}};var f=(0,i.withMiddleware)(a.ZP,d)}}]);