import{q as i,s as c,u as m,v as P,x as h,r as v,y as L,z as r,A as b,B as k,C as g,P as S,D as l,E as R,F as T,S as j,T as x,G as A,L as _,H as d}from"./Cq2_8FhX.js";const B=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const t=await r[e.name]().then(a=>a.default||a);return()=>l(t,e.layoutProps,o.slots)}}),H=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,o){const t=g(),a=c(S),n=a===m()?P():a,u=h(()=>{let s=d(e.name)??n.meta.layout??"default";return s&&!(s in r)&&e.fallback&&(s=d(e.fallback)),s}),y=v();o.expose({layoutRef:y});const p=t.deferHydration();if(t.isHydrating){const s=t.hooks.hookOnce("app:error",p);L().beforeEach(s)}return()=>{const s=u.value&&u.value in r,f=n.meta.layoutTransition??b;return k(x,s&&f,{default:()=>l(j,{suspensible:!0,onResolve:()=>{T(p)}},{default:()=>l(O,{layoutProps:R(o.attrs,{ref:y}),key:u.value||void 0,name:u.value,shouldProvide:!e.name,hasTransition:!!f},o.slots)})}).default()}}}),O=i({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const t=e.name;return e.shouldProvide&&A(_,{isCurrent:a=>t===(a.meta.layout??"default")}),()=>{var a,n;return!t||typeof t=="string"&&!(t in r)?(n=(a=o.slots).default)==null?void 0:n.call(a):l(B,{key:t,layoutProps:e.layoutProps,name:t},o.slots)}}});export{H as _};