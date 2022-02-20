!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/download/mpv-output"]=e():o["video/download/mpv-output"]=e()}(self,(function(){return function(){"use strict";var o={d:function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}},e={};o.d(e,{plugin:function(){return n}});var t=coreApis.toast;const n={name:"downloadVideo.outputs.mpv",displayName:"下载视频 - MPV 输出支持",author:{name:"diannaojiang",link:"https://github.com/diannaojiang"},description:"为下载视频增加 MPV 输出支持, 配置方式请参考 [Bilibili-Playin-Mpv](https://github.com/diannaojiang/Bilibili-Playin-Mpv)",setup:({addData:o})=>{o("downloadVideo.outputs",(o=>{o.push({name:"mpv",displayName:"MPV",description:"弹一条消息显示出播放按钮，点击即可使用MPV进行播放",runAction:async o=>{const e=o.infos.flatMap((o=>o.titledFragments)),n=e.map((o=>o.url)).join("\n"),i=`mpv://--http-header-fields="referer:https://www.bilibili.com/" "${e[0].url}" --audio-file="${e[1].url}"`;console.log(i),t.Toast.show(`<a class="link" href="${encodeURI(i)}" >播放</a>`,"MPV播放"),console.log(n),console.log(o)}})}))},commitHash:"c5921fb3ba951864c44828fd9364dd043f37d441",coreVersion:"2.1.5"};return e=e.plugin}()}));