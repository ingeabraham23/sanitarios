if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),f={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BMiuln2I.css",revision:null},{url:"assets/index-IU1-6WNU.js",revision:null},{url:"index.html",revision:"a04355e0cbfc1a9b516f8b3831fd9e22"},{url:"registerSW.js",revision:"5c477e608ffcfee40ede4b15b0d54e5a"},{url:"maskable-icon-512x512.png",revision:"8841c9d7a0652d7734ddf2a6e1607916"},{url:"pwa-192x192.png",revision:"bf7c0fee4e92cd85d61f2c5b5e193fbd"},{url:"pwa-512x512.png",revision:"ffd439a339d93155489cd810041f8ef6"},{url:"pwa-64x64.png",revision:"994fa72682b1a543b9ab77b0c2a8032d"},{url:"manifest.webmanifest",revision:"ad7a0245a160c45ace5e5330a849cc45"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
