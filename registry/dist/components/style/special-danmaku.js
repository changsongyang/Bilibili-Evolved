!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/special-danmaku"]=e():t["style/special-danmaku"]=e()}(globalThis,(()=>(()=>{var t,e,n={667:(t,e,n)=>{var o=n(355)((function(t){return t[1]}));o.push([t.id,"body.disable-highlight-danmaku-style .b-danmaku-high {\n  display: block !important;\n  padding: 0 !important;\n  line-height: 1.125 !important;\n}\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-icon {\n  display: none !important;\n}\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-text {\n  margin: 0 !important;\n  text-shadow: inherit;\n}\n\nbody.disable-up-danmaku-style .b-danmaku-up {\n  padding: 0 !important;\n  line-height: 1.125 !important;\n  background-color: transparent !important;\n  border-radius: 0 !important;\n}\nbody.disable-up-danmaku-style .b-danmaku-up .b-danmaku-up-tip {\n  display: none !important;\n}",""]),t.exports=o},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var r=this[i][0];null!=r&&(a[r]=!0)}for(var d=0;d<t.length;d++){var s=[].concat(t[d]);o&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},383:(t,e,n)=>{var o=n(667);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,a),i.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);a.r(i);var r={};t=t||[null,e({}),e([]),e(e)];for(var d=2&o&&n;"object"==typeof d&&!~t.indexOf(d);d=e(d))Object.getOwnPropertyNames(d).forEach((t=>r[t]=()=>n[t]));return r.default=()=>n,a.d(i,r),i},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";a.d(i,{component:()=>d});const t=coreApis.componentApis.define,e=coreApis.componentApis.styledComponent,n=coreApis.utils.urls,o=coreApis.settings,r=(0,t.defineOptionsMetadata)({highlight:{displayName:"禁用高赞弹幕",defaultValue:!0},up:{displayName:"禁用UP主弹幕",defaultValue:!0}}),d=(0,t.defineComponentMetadata)({displayName:"禁用特殊弹幕样式",tags:[componentsTags.style],...(0,e.toggleStyle)("disableSpecialDanmaku",(()=>Promise.resolve().then(a.t.bind(a,383,23))),(t=>{let{metadata:e,settings:n}=t;Object.keys(n.options).forEach((t=>{(0,o.addComponentListener)(`${e.name}.${t}`,(e=>{document.body.classList.toggle(`disable-${t}-danmaku-style`,e)}),!0)}))})),urlInclude:n.playerUrls,description:{"zh-CN":"移除高赞弹幕或 UP 主弹幕的特殊样式, 弹幕内容不会移除."},options:r,commitHash:"19330b8cbbf48ae96fd5e00f3ab4983bd06bd60f",coreVersion:"2.5.2"})})(),i=i.component})()));