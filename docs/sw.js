if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"favicon.8d5abb46.ico",revision:"0e6b6ffda1c3c1d29667c44bd1d71e49"},{url:"index.html",revision:"d91b66227acaae6d597382368dc06885"},{url:"last-update.35bc7dbb.css",revision:"4bbe329ebe82a75bda90ace5aec4fd0e"},{url:"last-update.de3bfbca.js",revision:"e141c2ec3d50a2679a63dd3f67958a8d"},{url:"manifest.webmanifest",revision:"9078d771922e52de7dd48097135579e4"}],{})}));