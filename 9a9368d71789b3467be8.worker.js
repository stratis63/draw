!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allPossibleGroups=((e,t,n,u,i)=>r(t,n,u,i).filter(r=>o(e,t,n,r,u,i))),t.firstPossibleGroup=((e,t,n,u,i)=>r(t,n,u,i).find(r=>o(e,t,n,r,u,i)));const r=(e,t,n,r)=>e.map((e,t)=>t).filter(o=>r(t,o,n,e));function o(e,t,n,u,i,s){const c=t.slice(),f=c[u];return c[u]=[n,...f],function(e,t,n,u){if(0===e[n].length&&++n===e.length)return!0;const i=e.slice(),[s,...c]=i[n];return i[n]=c,r(t,s,n,u).some(e=>o(i,t,s,e,n,u))}(e,c,i,s)}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);var u=(e,t,n,r)=>{const u=r[t];if(u.length>n)return!1;const i=(e=>"ru"===e.country?e=>"ua"===e.country:"ua"===e.country?e=>"ru"===e.country:o)(e);if(u.some(t=>t.country===e.country||i(t)))return!1;const{pairing:s}=e;return!s||!function(e,t){const n=e.length>>1,r=t<n?0:n;return e.slice(r,r+n)}(r,t).some(e=>(function(e,t){const n=t.id;return e.some(e=>e.id===n)})(e,s))};addEventListener("message",e=>{const{messageId:t,data:{pots:n,groups:o,selectedTeam:i,currentPotNum:s}}=e.data,c=Object(r.firstPossibleGroup)(n,o,i,s,u);postMessage({messageId:t,data:{pickedGroup:c}})})}]);