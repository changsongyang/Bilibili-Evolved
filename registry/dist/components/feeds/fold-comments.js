!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/fold-comments"]=t():e["feeds/fold-comments"]=t()}(globalThis,(()=>(()=>{var e,t,n={749:(e,t,n)=>{var o=n(355)((function(e){return e[1]}));o.push([e.id,".bb-comment .fold-comment {\n  position: sticky;\n  bottom: 0;\n  height: 40px;\n  width: calc(100% + 48px);\n  font-size: 14px;\n  transform: translateX(-24px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: #99a2aa;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  z-index: 110;\n  border-radius: 4px;\n}\n.bb-comment .fold-comment:hover {\n  color: black;\n}\nbody.dark .bb-comment .fold-comment {\n  background-color: #444;\n  color: #eee;\n}\nbody.dark .bb-comment .fold-comment:hover {\n  color: var(--theme-color);\n}",""]),e.exports=o},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){
// eslint-disable-next-line prefer-destructuring
var s=this[c][0];null!=s&&(r[s]=!0)}for(var i=0;i<e.length;i++){var a=[].concat(e[i]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},17:(e,t,n)=>{var o=n(749);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api},391:e=>{"use strict";e.exports=coreApis.observer}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={id:e,exports:{}};return n[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var c=Object.create(null);r.r(c);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>s[e]=()=>n[e]));return s.default=()=>n,r.d(c,s),c},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";r.d(c,{component:()=>i});const e=coreApis.componentApis.styledComponent,t=coreApis.utils.urls;var n=r(799);const o=coreApis.spinQuery;var s=r(391);const i={name:"foldComments",displayName:"快速收起评论",description:{"zh-CN":"动态里查看评论区时, 在底部添加一个`收起评论`按钮, 这样就不用再回到上面收起了."},urlInclude:t.feedsUrlsWithoutDetail,tags:[componentsTags.feeds],entry:(0,e.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,17,23))),(async()=>{const{forEachFeedsCard:e}=await Promise.resolve().then(r.t.bind(r,799,23)),{childList:t}=await Promise.resolve().then(r.t.bind(r,391,23)),c=".bb-comment";e({added:e=>(e=>{const r=async(t,n)=>{const r=await(0,o.select)((()=>dq(t,c)));if(null!==r.querySelector(".fold-comment"))return;if(null===r)return void console.error("未找到评论区");const s=document.createElement("div");s.classList.add("fold-comment"),s.innerHTML="收起评论",s.addEventListener("click",(()=>{n(),e.scrollIntoView()})),r.insertAdjacentElement("beforeend",s)};if("v2"!==n.feedsCardsManager.managerType)if("v1"!==n.feedsCardsManager.managerType)console.warn("unrecognized card type",e);else{const n=e.querySelector(".panel-area");if(null===n)return void console.warn("panelArea not found",e);const o=()=>{e.querySelector(".button-bar").children[1]?.click()};if(0===n.childElementCount){const[e]=t(n,(t=>{t.length>0&&(r(n,o),e.disconnect())}))}else r(n,o)}else{const t=dq(e,c),n=()=>{dq(e,".bili-dyn-action.comment")?.click()};t?r(t,n):(0,s.childListSubtree)(e,(()=>{dq(e,c)&&r(e,n)}))}})(e.element)})})),commitHash:"19330b8cbbf48ae96fd5e00f3ab4983bd06bd60f",coreVersion:"2.5.2"}})(),c=c.component})()));