!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/gift-box"]=t():n["live/gift-box"]=t()}(self,(function(){return function(){var n={894:function(n,t,e){var r=e(645)((function(n){return n[1]}));r.push([n.id,".full-win-gift-btn-wrapper.full-win-gift-btn-wrapper {\n  position: relative;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap {\n  right: -28px;\n  bottom: calc(100% + 3px);\n  color: #666;\n  font-size: 12px;\n  line-height: 1.4;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .text {\n  margin: auto;\n  padding: auto;\n  color: inherit;\n  cursor: inherit;\n  line-height: inherit;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .popup::before, .full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .popup::after {\n  left: auto;\n  right: calc(1em + 33px);\n  transform: translateX(50%);\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package {\n  margin: auto;\n  width: auto;\n  height: auto;\n  color: inherit;\n  fill: inherit;\n  background: inherit !important;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package .bag-icon {\n  display: none;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package span {\n  font-size: inherit;\n  line-height: 36px;\n  padding: 0 6px;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package span:hover {\n  color: #fff;\n}",""]),n.exports=r},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,r){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var l=this[o][0];null!=l&&(i[l]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);r&&i[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},564:function(n,t,e){var r=e(894);r&&r.__esModule&&(r=r.default),n.exports="string"==typeof r?r:r.toString()}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)};var r={};return function(){"use strict";e.d(r,{component:function(){return h}});var n=coreApis.componentApis.live.liveControlBar,t=coreApis.spinQuery,i=coreApis.style,o=coreApis.utils.urls,l=e(564),a=e.n(l);const u="player-full-win",f="full-win-gift-btn-wrapper",c="liveGiftBox";let p=null,s=null,d=null;function g(){return document.body.classList.contains(u)}function w(n,t){const e=dq(n,".right-area");if(e){const n=document.createElement("div");n.className=f,n.appendChild(t),e.appendChild(n)}else console.warn("[liveGiftBox] .right-area could not be found in control bar")}function b(n,t){return function(n){function t(n){const t=g();return t===n.oldValue.split(" ").includes(u)?null:t}const e=new MutationObserver((e=>{for(const r of e){const e=t(r);null!==e&&n(e)}}));return e?.observe(document.body,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0}),()=>e.disconnect()}((e=>{e?function(n){const t=dq(".control-area");t&&w(t,n)}(n):function(n,t){t.appendChild(n)}(n,t)}))}async function v(){(0,i.addStyle)(a(),c);const n=await async function(){const n=await(0,t.select)(".z-gift-package",{maxRetry:15,queryInterval:200});return n||console.warn("[liveGiftBox] the parent element of gift button not found"),n}();p=n?.children[0],n&&p&&(s=b(p,n),d=function(n){const t=dq("#live-player");if(!t)return console.warn("[liveGiftBox] live player not found"),null;function e(){dq(".full-win-gift-btn-wrapper .wrap")&&n.click()}return t.addEventListener("mouseleave",e),()=>t.removeEventListener("mouseleave",e)}(p))}const h={name:c,displayName:"直播全屏包裹",description:{"zh-CN":"在直播的网页全屏(不能是全屏)模式下往控制栏添加包裹按钮."},urlInclude:o.liveUrls,tags:[componentsTags.live],entry:function(){(0,n.waitForControlBar)({callback:function(n){const t=g();p&&t&&w(n,p)}}),v()},reload:v,unload:function(){d?.call(null),d=null,s?.call(null),s=null,p=null,(0,i.removeStyle)(c)},commitHash:"c5921fb3ba951864c44828fd9364dd043f37d441",coreVersion:"2.1.5"}}(),r=r.component}()}));