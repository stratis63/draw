(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{468:function(e,t,n){"use strict";t.a=(e=>String.fromCharCode(65+e))},469:function(e,t,n){"use strict";const a=n(2).b.div`
  border: #aaa solid 1px;
  margin: 0px 5px 10px 5px;
  width: 150px;
  min-width: 0;

  @media (max-width: 999px) {
    margin: 0px 3px 6px 3px;
  }
`;t.a=a},471:function(e,t,n){"use strict";const a=n(2).b.div`
`;t.a=a},472:function(e,t,n){"use strict";const a=n(2).b.div`
  display: flex;
  align-items: center;

  height: 21px;
  margin: -1px -1px -1px -1px;
  border: #aaa solid 1px;

  text-align: center;
  text-decoration: none;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;

  @media (max-width: 999px) {
    height: 14px;
    font-family: Roboto, sans-serif;
    font-size: 10px;
  }
`;t.a=a},473:function(e,t,n){"use strict";const a=n(2).b.div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  margin: 0px 5px 10px 5px;
`;t.a=a},474:function(e,t,n){"use strict";const a=n(2).b.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    align-items: center;
  }
`;t.a=a},475:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),i=n(485);const c=o.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`,l=Object(o.b)(i.a)`
  background: ${({selected:e,notSelected:t})=>e?"#004":t?"#ddd":"radial-gradient(#fff, #004)"};
`;t.a=Object(a.memo)(({forceNoSelect:e,display:t,pot:n,selectedTeam:o,onPick:i})=>{const s=Object(a.useCallback)(e=>{const t=e.target,a=n.findIndex(e=>e.id===t.dataset.teamid);i(a,n)},[n,i]),d=e||o;return r.a.createElement(c,null,t&&n&&n.map(t=>r.a.createElement(l,{key:t.id,"data-teamid":t.id,selected:t===o,notSelected:e||o&&t!==o,noHover:d,onClick:d?void 0:s},t.shortName||t.name)))})},476:function(e,t,n){"use strict";const a=n(2).b.div`
  display: flex;
  margin: auto;
  width: 1000px;

  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;t.a=a},477:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),i=n(483),c=n(469),l=n(471),s=n(484);const d=o.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`,u=o.a`
  color: #f70;
`;var p=Object(o.b)(s.a)`
  ${e=>e.depleted&&d}
  ${e=>e.highlighted&&u}
`,m=n(481);const f=o.a`
  color: blue;
`,b=o.a`
  filter: grayscale(0.5);
  opacity: 0.4;
`;var x=Object(o.b)(m.a)`
  ${e=>e.selected&&f}
  ${e=>e.picked&&b}
`;const g=Object(o.b)(c.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`;var h=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,depleted:i,background:c,color:s})=>r.a.createElement(g,{highlighted:e},r.a.createElement(p,{highlighted:e,depleted:i,background:c,color:s},"Pot ",t+1),r.a.createElement(l.a,null,n&&n.map(e=>{const{name:t,country:n,shortName:i,pairing:c}=e;return r.a.createElement(x,{key:e.id,"data-cellid":e.id,title:c&&`paired with ${c.shortName||c.name}`,selected:o&&o.includes(e),picked:a.includes(e),country:n},i||t)})))),w=n(198);const v=Object(o.b)(c.a)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&"\n  "}
`,y=o.b.div`
  display: flex;
  border: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: -1px;

  &:last-child {
    margin-bottom: 0px;
  }
`,E=Object(o.b)(x)`
  width: 50%;
  margin-right: 0px;
`;var k=Object(a.memo)(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeams:o,depleted:i,background:c,color:s})=>r.a.createElement(v,{highlighted:e},r.a.createElement(p,{highlighted:e,depleted:i,background:c,color:s},"Pot ",t+1),r.a.createElement(l.a,null,w(n.length/2).map(e=>{const t=[n[2*e],n[2*e+1]];return r.a.createElement(y,{key:e},t.map(e=>{const{name:t,country:n,shortName:i,pairing:c}=e;return r.a.createElement(E,{key:e.id,"data-cellid":e.id,title:c&&`paired with ${c.shortName||c.name}`,selected:o&&o.includes(e),picked:a.includes(e),country:n},i||t)}))}))));const j=o.b.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  justify-content: center;
  & > * {
    flex: 1;
    flex-basis: 22%;
    ${e=>e.limitWidth?"max-width: 160px":""};

    @media (max-width: 999px) {
      max-width: initial;
    }
  }
`;t.a=Object(a.memo)(({initialPots:e,pots:t,selectedTeams:n,currentPotNum:a,split:o})=>r.a.createElement(j,{limitWidth:!o},e&&e.map((c,l)=>{const s=o?k:h,d=l===a,u=i(e[l],t[l],n||[]);return r.a.createElement(s,{key:c[0].id,potNum:l,isCurrent:d,teams:c,pickedTeams:u,selectedTeams:n,depleted:!c||u.length===c.length,background:"rgba(0, 0, 0, 0.75)",color:"#fff"})})))},478:function(e,t,n){"use strict";var a=n(0),r=n(491),o=n(199),i=n.n(o),c=n(488),l=n(492),s=n(489);let d;var u=(e,...t)=>{d||(d=document.createElement("style"),document.head.appendChild(d));const n=Object(s.a)("styled-element-"),a=((e,...t)=>e.reduce((e,n,a)=>`${e}${n}${l(t[a])?"":t[a]}`,""))(e,...t);return d.textContent+=`.${n}{${a}}`,n};const p=e=>((e,t)=>new Promise(n=>{e.addEventListener(t,function a(r){e.removeEventListener(t,a),n(r)})}))(e,"transitionend"),m=1,f=1,b=u`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`,x=u`
  color: initial;
  position: fixed;
  border: 1px solid transparent;
  user-select: none;
  box-sizing: border-box;
`,g=document.createElement("div");function h(e,{left:t,top:n}){const a=t+m,r=n+f;e.style.transform=`translate3d(${a}px, ${r}px, 0px)`}g.classList.add(b),document.body.insertBefore(g,document.getElementById("app"));var w=async(e,t,n)=>{const a=function(e){const{width:t,fontFamily:n}=getComputedStyle(e),a=e.cloneNode(!0);a.classList.add(x);const{style:r}=a;return r.width=t,r.fontFamily=n,a.textContent=e.textContent,h(a,e.getBoundingClientRect()),a}(e);g.appendChild(a);const r=t.getBoundingClientRect();a.style.transition=`transform ${n}ms ease-in-out`,h(a,r),await p(a),c.a&&await i()(0),g.removeChild(a)};t.a=Object(a.memo)(({from:e,to:t,duration:n,data:o,onAnimationEnd:i})=>{const c=Object(a.useRef)(!1),l=Object(a.useCallback)(()=>{(i||r)(o)},[o,i]);if(!c.current){c.current=!0;const a=document.querySelector(e),r=document.querySelector(t);a instanceof HTMLElement&&r instanceof HTMLElement&&w(a,r,n).then(l)}return null})},479:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),i=n(482),c=n(487),l=n(468),s=n(198);var d=o.b.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  margin: 2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  font-size: 18px;

  ${e=>e.possible?o.a`
    color: ${e.color};
  `:o.a`
    color: #000;
    border-color: rgba(0,0,0,0);
    filter: opacity(0.25);
  `}
`;const u=o.b.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;var p=Object(a.memo)(({numGroups:e,possibleGroups:t})=>{const n=e>>1;return r.a.createElement(u,null,s(e).map(e=>{const a=Object(l.a)(e);return r.a.createElement(d,{key:a,color:e<n?"red":"blue",possible:t.includes(e)},a)}))});const m=o.b.div`
  width: 100%;
  font-size: 1.25em;
  line-height: 150%;
  vertical-align: middle;

  margin-top: 30px;
  margin-bottom: 30px;

  user-select: none;

  @media (max-width: 999px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`,f=o.b.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,b=o.b.span`
  display: inline-block;
`,x=o.b.strong`
  font-weight: 600;
`,g=o.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.a=Object(a.memo)(({long:e,calculating:t,completed:n,selectedTeam:o,pickedGroup:s,possibleGroups:d,numGroups:u,reset:h})=>{const w=Object(a.useRef)(null),v=Object(a.useRef)(null);Object(a.useEffect)(()=>{v.current=n?null:o},[n,o]);const y=v.current||o;return t?r.a.createElement(m,null,r.a.createElement(f,null,r.a.createElement("div",null,"Calculation is taking too long."),r.a.createElement("div",null,"And ",r.a.createElement(i.a,{href:"https://github.com/inker/draw/issues/14",target:"_blank",rel:"noopener"},"here's why"),"."))):n?r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement("div",null,"Draw completed!"),r.a.createElement(c.a,{onClick:h},"Restart"))):null!==s?(w.current=r.a.createElement(m,null,r.a.createElement("div",null,e&&y?r.a.createElement("span",null,r.a.createElement(x,null,y.shortName||y.name)," goes to group"):r.a.createElement("span",null,"Group")," ",r.a.createElement(x,null,Object(l.a)(s)),"!")),w.current):y?r.a.createElement(m,null,d?r.a.createElement("div",null,"Possible groups for ",r.a.createElement(b,null,r.a.createElement(x,null,y.name),":"),r.a.createElement(p,{numGroups:u,possibleGroups:d})):w.current):r.a.createElement(m,null,"Pick a ball")})},480:function(e,t,n){"use strict";var a=n(0);const r=[],o=Object.freeze({add:"COLLECTION_ADD",remove:"COLLECTION_REMOVE"});function i(e,t){switch(t.type){case o.add:return[...e,t.payload];case o.remove:return e.filter(e=>e!==t.payload);default:throw new Error(`Unknown action: ${t.type}`)}}t.a=(()=>{const[e,t]=(()=>Object(a.useReducer)(i,r))(),n=Object(a.useCallback)(e=>{t({type:o.add,payload:e})},[]),c=Object(a.useCallback)(e=>{t({type:o.remove,payload:e})},[]);return[e,Object(a.useMemo)(()=>({add:n,remove:c}),[])]})},481:function(e,t,n){"use strict";var a=n(2),r=n(472);var o=Object(a.b)(r.a)`
  padding-left: 3px;
  padding-right: 3px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 999px) {
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, sans-serif;
  }
`,i=n(490);const c=Object(a.b)(o)`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 2px;
    background-size: 12px;
    padding-left: 16px;
  }
`,l=Object(a.b)(c)`
  ${({country:e})=>e&&a.a`
    background-image: url('${Object(i.a)(e)}');
  `}
`;t.a=l},483:function(e,t,n){var a=n(493),r=n(496),o=n(70),i=n(498),c=o(function(e,t){return i(e)?a(e,r(t,1,i,!0)):[]});e.exports=c},484:function(e,t,n){"use strict";var a=n(2),r=n(472);const o=Object(a.b)(r.a)`
  justify-content: center;
  font-weight: 600;
  background-color: ${e=>e.background};
  color: ${e=>e.color};
`;t.a=o},485:function(e,t,n){"use strict";const a=n(2).b.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */

  width: 67px;
  height: 67px;

  margin: 2px;
  padding: 10px;

  font-size: ${e=>e.selected?.8:0}em;
  font-family: 'Arial Narrow', 'Ubuntu Condensed', sans-serif;
  font-weight: ${e=>e.selected?"bold":""};
  text-align: center;
  text-overflow: ellipsis;
  color: ${e=>e.selected?"white":""};

  background: ${e=>e.selected?"":"radial-gradient(#004, #002, #002)"};
  border-radius: 100%;
  cursor: ${e=>e.noHover?"not-allowed":"pointer"};
  user-select: none;

  &:hover {
    ${({noHover:e})=>!e&&"background: radial-gradient(#ccf, #ccf)"};
  }

  @media (max-width: 999px) {
    flex-flow: row wrap;

    & > * {
      flex: 1;
      flex-basis: 22%;
    }

    width: 21px;
    height: 21px;

    font-size: ${e=>e.selected?8:0}px;
  }
`;t.a=a},491:function(e,t){e.exports=function(){}},492:function(e,t){e.exports=function(e){return null==e}},493:function(e,t,n){var a=n(72),r=n(494),o=n(495),i=n(26),c=n(40),l=n(73),s=200;e.exports=function(e,t,n,d){var u=-1,p=r,m=!0,f=e.length,b=[],x=t.length;if(!f)return b;n&&(t=i(t,c(n))),d?(p=o,m=!1):t.length>=s&&(p=l,m=!1,t=new a(t));e:for(;++u<f;){var g=e[u],h=null==n?g:n(g);if(g=d||0!==g?g:0,m&&h==h){for(var w=x;w--;)if(t[w]===h)continue e;b.push(g)}else p(t,h,d)||b.push(g)}return b}},494:function(e,t,n){var a=n(71);e.exports=function(e,t){return!(null==e||!e.length)&&a(e,t,0)>-1}},495:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},496:function(e,t,n){var a=n(74),r=n(497);e.exports=function e(t,n,o,i,c){var l=-1,s=t.length;for(o||(o=r),c||(c=[]);++l<s;){var d=t[l];n>0&&o(d)?n>1?e(d,n-1,o,i,c):a(c,d):i||(c[c.length]=d)}return c}},497:function(e,t,n){var a=n(17),r=n(42),o=n(6),i=a?a.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||r(e)||!!(i&&e&&e[i])}},498:function(e,t,n){var a=n(41),r=n(11);e.exports=function(e){return r(e)&&a(e)}},504:function(e,t,n){"use strict";const a=n(2).b.div`
  margin-top: 10px;
  margin-bottom: 5px;
  user-select: none;
`;t.a=a},505:function(e,t,n){"use strict";var a=n(75);const r=(e,t)=>e.country!==t.country&&e.group!==t.group&&!(e=>"ru"===e.country?e=>"ua"===e.country:"ua"===e.country?e=>"ru"===e.country:a)(e)(t);var o=(e,t,n,a)=>((e,t)=>0===e.length||1===e.length&&r(t,e[0]))(a[t],e);t.a=(([e,t],n,a)=>{function r(a,i){const c=e[a];if(!o(c,i,0,n))return!1;const l=n[i];e.splice(a,1),l.push(c);const s=i+1,d=s===n.length||function(a){const o=n[a],i=t.pop();o.push(i);const c=e.some((e,t)=>r(t,a));return o.pop(),t.push(i),c}(s);return l.pop(),e.splice(a,0,c),d}return e.map((e,t)=>t).filter(e=>r(e,a))})},506:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),i=n(472),c=n(481);const l=o.c`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,s=o.c`
  from {
    background-color: #ff8;
  }
  to {}
`,d=o.a`
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${l} 1s ease;
  box-shadow: 0 0 5px #6af;
`,u=o.a`
  animation: ${s} 5s normal forwards;
`;var p=Object(o.b)(c.a)`
  width: 150px;
  ${e=>e.possible&&d}
  ${e=>e.picked&&u}
`;const m=Object(o.b)(i.a)`
  display: flex;
`,f=o.b.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  height: 19px;
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;
  color: #444;

  &:before {
    content: "v";
  }
`,b=Object(o.b)(p)`
  border-right: 1px solid rgba(0, 0, 0, 0);
`,x=Object(o.b)(p)`
  border-left: 1px solid rgba(0, 0, 0, 0);
`;var g=Object(a.memo)(({index:e,teams:t,airborneTeams:n})=>{const[a,o]=t||[],i=a&&!n.includes(a),c=o&&!n.includes(o);return r.a.createElement(m,null,r.a.createElement(b,{country:i&&a.country,picked:i,"data-cellid":`${e}ru`},i&&(a.shortName||a.name)),r.a.createElement(f,null),r.a.createElement(x,{country:c&&o.country,picked:c,"data-cellid":`${e}gw`},c&&(o.shortName||o.name)))}),h=n(469);const w=Object(o.b)(h.a)`
  width: auto;
  align-self: center;
  max-width: initial;
`;t.a=Object(a.memo)(({matchups:e,airborneTeams:t})=>r.a.createElement(w,null,e&&e.map((e,n)=>r.a.createElement(g,{key:n,index:n,teams:e,airborneTeams:t}))))}}]);