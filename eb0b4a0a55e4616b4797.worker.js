!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allPossibleGroups=((e,t,n,u,s)=>r(t,n,u,s).filter(r=>o(e,t,n,r,u,s))),t.firstPossibleGroup=((e,t,n,u,s)=>r(t,n,u,s).find(r=>o(e,t,n,r,u,s)));const r=(e,t,n,r)=>e.map((e,t)=>t).filter(o=>r(t,o,n,e));function o(e,t,n,u,s,i){const c=t.slice(),l=c[u];return c[u]=[n,...l],function(e,t,n,u){if(0===e[n].length&&++n===e.length)return!0;const s=e.slice(),[i,...c]=s[n];return s[n]=c,r(t,i,n,u).some(e=>o(s,t,i,e,n,u))}(e,c,s,i)}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);var u=(e,t,n,r)=>{const u=r[t];if(u.length>n)return!1;const s=(e=>"ru"===e.country?e=>"ua"===e.country:"ua"===e.country?e=>"ru"===e.country:o)(e);if(u.some(t=>t.country===e.country||s(t)))return!1;const{pairing:i}=e;return!i||!function(e,t){const n=e.length>>1,r=t<n?0:n;return e.slice(r,r+n)}(r,t).some(e=>(function(e,t){const n=t.id;return e.some(e=>e.id===n)})(e,i))};addEventListener("message",e=>{const{messageId:t,data:{pots:n,groups:o,selectedTeam:s,currentPotNum:i}}=e.data,c=Object(r.allPossibleGroups)(n,o,s,i,u);postMessage({messageId:t,data:{possibleGroups:c}})})}]);