!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/idm-output"]=t():e["video/download/idm-output"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{plugin:function(){return r}});var o=coreApis.download,n=coreApis.utils.constants,i=coreApis.utils.title;const r={name:"downloadVideo.outputs.idm",displayName:"下载视频 - IDM 输出支持",description:"为下载视频增加 IDM 输出支持.",setup:({addData:e})=>{e("downloadVideo.outputs",(e=>{e.push({name:"idm",displayName:"IDM",description:"使用 IDM 的 .ef2 格式导出, 可以在 IDM 中使用导入开始下载.",runAction:async e=>{const{infos:t}=e,r=document.URL.replace(window.location.search,""),d=t.map((e=>e.titledFragments.map((e=>`<\n${e.url}\nreferer: ${r}\nUser-Agent: ${n.UserAgent}\nfilename: ${e.title}\n>`.trim())))).flat().concat("").join("\n").replace(/([^\r])\n/g,"$1\r\n");await o.DownloadPackage.single(`${(0,i.getFriendlyTitle)()}.ef2`,d)}})}))},commitHash:"c5921fb3ba951864c44828fd9364dd043f37d441",coreVersion:"2.1.5"};return t=t.plugin}()}));