(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{16:function(e,t,n){"use strict";var a=n(0),i=n(63);t.a=(e=>{let t=e;const n=[];return()=>{const e=Object(a.useState)(t)[1];Object(a.useEffect)(()=>(n.push(e),()=>{i(n,e)}),[]);const l=Object(a.useCallback)(e=>{t=Object.assign({},t,e);for(const e of n)e(t)},[t,n]);return[t,l]}})({initial:!0,waiting:!0,error:null})},196:function(e,t,n){"use strict";n.r(t);n(76);var a=n(0),i=n.n(a),l=n(25),o=n.n(l),r=n(2),c=n(16);var s=r.b.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${1e8};
`;const m=r.c`
  from {
    opacity: 0;
  }
  to {}
`,u=Object(r.b)(s)`
  background-color: white;
  opacity: 0.75;
  ${e=>e.animate&&r.a`
    animation: ${m} 0.25s ease-out;
  `}
`,b=Object(r.b)(s)`
  display: flex;
  justify-content: center;
  align-items: center;
`;var d=Object(a.memo)(({noAnimation:e,children:t})=>i.a.createElement("div",null,i.a.createElement(u,{animate:!e}),i.a.createElement(b,null,t)));const f=r.b.div`
  font-size: 5vw;
  color: #808080;
  user-select: none;

  @media (max-width: 999px) {
    font-size: 8vw;
  }
`;var p=Object(a.memo)(({noAnimation:e,children:t})=>i.a.createElement(d,{noAnimation:e},i.a.createElement(f,null,t)));var E=Object(a.memo)(()=>{const[e]=Object(c.a)(),t=Object(a.useCallback)(t=>i.a.createElement(p,Object.assign({},t,{noAnimation:e.initial})),[e.initial]),{error:n,waiting:l}=e;return navigator.onLine?n?i.a.createElement(t,null,n):l?i.a.createElement(t,null,"wait..."):null:i.a.createElement(t,null,"you're offline")});const j=Object(a.lazy)(()=>Promise.all([n.e("routes~version"),n.e("vendor"),n.e("routes")]).then(n.bind(null,529))),v=Object(a.lazy)(()=>Promise.all([n.e("routes~version"),n.e("version")]).then(n.bind(null,528))),O=r.b.div`
  font-family: Tahoma, Arial, sans-serif;

  & * {
    box-sizing: border-box;
  }
`;var w=Object(a.memo)(()=>{const[e,t]=Object(c.a)(),n=Object(a.useCallback)(e=>{const{message:n}=e;t({initial:!1,waiting:!1,error:n.startsWith("Cannot find module")?"Could not load site":n})},[]);return Object(a.useEffect)(()=>{e.initial&&!e.waiting&&t({initial:!1})},[e.waiting]),i.a.createElement(O,null,i.a.createElement(E,null),i.a.createElement(a.Suspense,{fallback:!1},i.a.createElement(j,{onError:n})),i.a.createElement(a.Suspense,{fallback:!1},i.a.createElement(v,null)))});o.a.render(i.a.createElement(w,null),document.getElementById("app"))}},[[196,"runtime~app","react","vendor"]]]);