(()=>{"use strict";var e={465:()=>{try{self["workbox:core:7.0.0"]&&_()}catch(e){}},565:()=>{try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},157:()=>{try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},329:()=>{try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}s(465);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||r(i.precache),o=e=>e||r(i.runtime);function h(e,t){const s=t();return e.waitUntil(s),s}s(565);function l(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),i=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:i.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(i):i,c=function(){if(void 0===d){const t=new Response("");if("body"in t)try{new Response(t.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,r)}function g(e,t){const s=new URL(e);for(const a of t)s.searchParams.delete(a);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(329);function v(e){return"string"==typeof e?new Request(e):e}class m{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new y,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=v(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new n("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const i=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:i,response:e});return e}catch(c){throw a&&await this.runCallbacks("fetchDidFail",{error:c,event:t,originalRequest:a.clone(),request:i.clone()}),c}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=v(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await c({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,t){const s=v(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const i=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=g(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const c of r)if(n===g(c.url,s))return e.match(c,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(d){if(d instanceof Error)throw"QuotaExceededError"===d.name&&await async function(){for(const e of w)await e()}(),d}for(const n of this.iterateCallbacks("cacheDidUpdate"))await n({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=v(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new m(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(i){if(i instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:i,event:s,request:t}),a)break;if(!a)throw i}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(r){r instanceof Error&&(i=r)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class b extends R{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(b.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,i=e.integrity,r=!i||i===n;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||n:void 0})),n&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==b.copyRedirectedCacheableResponsesPlugin&&(a===b.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(b.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}b.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},b.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new b({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=l(s),i="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,i),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return h(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[n,i]of this._urlsToCacheKeys){const t=this._cacheKeysToIntegrities.get(i),s=this._urlsToCacheModes.get(n),a=new Request(n,{integrity:t,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return h(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}s(157);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"84c801675eb5f47d5f1377b991d42a3d","url":"404.html"},{"revision":"7082082ad93d038d047145a5c4286563","url":"about/index.html"},{"revision":"44194a240b46c7bc112247faec272a27","url":"assets/css/styles.4d5fe24e.css"},{"revision":"c260eb59500a3735ac637f18cfe804a0","url":"assets/js/0058b4c6.5eee5bc4.js"},{"revision":"5ac5d06ed6aa98ab4a13babf7cd5ad19","url":"assets/js/01a85c17.79809c99.js"},{"revision":"628006b7ffd2ad2350dff53abc286f77","url":"assets/js/090c8ed1.1b11be13.js"},{"revision":"b0f5ae18f45f09bff8bdb4d8ea237850","url":"assets/js/0a3a2537.c2b922d2.js"},{"revision":"fce7c64cc6e6b195a20033b086bb00ec","url":"assets/js/0f48f2af.179b4fae.js"},{"revision":"4e3823a0557d3e34ac51a419c222c34b","url":"assets/js/14eb3368.ef933a32.js"},{"revision":"0c3a71d287ae3c30f3875b8f7d2391ad","url":"assets/js/17896441.782100c2.js"},{"revision":"28b74858de82b3f2b1ae2e662a455f46","url":"assets/js/1df93b7f.33b61431.js"},{"revision":"8edefaf5bff112015451d63c6f971be1","url":"assets/js/1e6d23b3.65717983.js"},{"revision":"3fd407a0668abaa8ffa591e46d0ff625","url":"assets/js/1f391b9e.cb2c27ba.js"},{"revision":"e236a611cafe60696b9dc8c1e1a8d643","url":"assets/js/2030.54141fb2.js"},{"revision":"af4ebbaee337bc93c49146e918fd3bac","url":"assets/js/22773185.dc5a6aef.js"},{"revision":"447cff298b89b0eb455509aef19fe97f","url":"assets/js/2374935c.bd39c473.js"},{"revision":"c00138a23c4098ee6949bd61acc2f1f1","url":"assets/js/2644.4cb41d06.js"},{"revision":"a10e0f918a6cfb9449a2281c2504e73d","url":"assets/js/3362281b.a07c4a51.js"},{"revision":"61ed2464bcfd488939967a4b9877b91f","url":"assets/js/36994c47.50dd2c5b.js"},{"revision":"604d8fb018d23fdbf2911b2503d17c7a","url":"assets/js/3720c009.b2978432.js"},{"revision":"0377f49c0971ad61d16aad547b5727ff","url":"assets/js/39e59957.6f405df3.js"},{"revision":"e6b9e0c0ff2c2f11bf462ddea2700463","url":"assets/js/3a2db09e.8d4987e8.js"},{"revision":"97be7df1f813a4a611d20f4d2b0d959d","url":"assets/js/46380173.d3c435ef.js"},{"revision":"f4adce40bc504a25a21712d82d53e77b","url":"assets/js/46d8b1aa.fd3ff071.js"},{"revision":"f76d9e4536c8a1706f9b74ed4d50d7f1","url":"assets/js/4707.1b12365b.js"},{"revision":"f6a1c068c118df3953eac2f1b19f34be","url":"assets/js/4827.009962de.js"},{"revision":"ddd1f4f19c02fb2648ec7b4e90e1abf2","url":"assets/js/48f45184.c5020fa7.js"},{"revision":"10879514626d362e011a5660d2adac90","url":"assets/js/4cf26a50.46fbcac8.js"},{"revision":"b4f96e497ba8ebfd1ba5b5181a3b1e51","url":"assets/js/532.1414cfd2.js"},{"revision":"31095a59cb32538492d72100485e11fc","url":"assets/js/53a5678a.db14d398.js"},{"revision":"5aada5184f06922080870be2e9ee45cd","url":"assets/js/5666.331430fc.js"},{"revision":"1b7d6e2b7e6c3f9df517beb414825657","url":"assets/js/5e95c892.e72d07f1.js"},{"revision":"4396ef3cff125c4eaca0a1df0bb4496e","url":"assets/js/621db11d.aeaa02ed.js"},{"revision":"c1a7185c94bec6961ad3f10e1c78ffa5","url":"assets/js/6356.1bf5621d.js"},{"revision":"3a50ac7b91105b6a8d2f97faee9c4c91","url":"assets/js/664cfde2.bfaeab10.js"},{"revision":"e3b9aeb5216d7759395c230b50e56e15","url":"assets/js/6875c492.3ba61af0.js"},{"revision":"321294918e97e43dff1c862c00f1b979","url":"assets/js/6d300e73.fcedb51d.js"},{"revision":"f5c56b19d36458355dc3f4b18be36d31","url":"assets/js/7144043e.d854f015.js"},{"revision":"dd8e53733991656edda5b69ca8fea500","url":"assets/js/756.4a270df3.js"},{"revision":"2770b4cc6dbce377c7265c048fe756a2","url":"assets/js/7cb62c81.67f83854.js"},{"revision":"7500ea3e376edc3ccb7d4adb1379a2d7","url":"assets/js/8070.3b028d27.js"},{"revision":"e241186ab95902769edae1ceb43c0e5d","url":"assets/js/814f3328.f0204f81.js"},{"revision":"7b27a42de184c3ba0c97016cd3859d72","url":"assets/js/8251.ddea1ad8.js"},{"revision":"61a68443ad134a91f12a7b0637c9b191","url":"assets/js/8688.4c3f3893.js"},{"revision":"38bd1e33eb1bd538f5fa43c1743f55c8","url":"assets/js/88899dff.ea0fd868.js"},{"revision":"7f6954a517a6f6492fa2adb933a0f612","url":"assets/js/896424e9.e746b1e5.js"},{"revision":"a0477ed01a03d5cc29327c0c1513f903","url":"assets/js/898514b1.00576ad2.js"},{"revision":"8e42a0b0218b7c495fdfc35c47550063","url":"assets/js/9768ff73.77983ad3.js"},{"revision":"4128a8ed77db270551cf8ff14dfc7b4f","url":"assets/js/9d5c7492.0b038bcb.js"},{"revision":"9796baa1dd08d78fad2ade0b811a2d84","url":"assets/js/9e4087bc.e3d2f35e.js"},{"revision":"a35e8ae99537c6f46779b65c7e8b0fef","url":"assets/js/a29f262d.8bbc591d.js"},{"revision":"fa034be276fbd8b47e5da8dc62e49292","url":"assets/js/a6aa9e1f.45e94382.js"},{"revision":"de396fc0af4bd83f2ffd53980959b965","url":"assets/js/a7456010.c28208f1.js"},{"revision":"63fbda6d8df889d8e45a6b789f21aecb","url":"assets/js/a7bd4aaa.c4b7afa8.js"},{"revision":"fec548eadaf71eecc80211ead32db153","url":"assets/js/a82aa344.109d0f01.js"},{"revision":"c2ba4fe40d196317c8d4d3512b8600fb","url":"assets/js/a8783f90.3a5677fe.js"},{"revision":"7f5762a4126efb579e34e181248ca0e2","url":"assets/js/a94703ab.f68d9af9.js"},{"revision":"a68c5896577ea333792723c6f708af79","url":"assets/js/aba21aa0.8422cbc2.js"},{"revision":"24ffd878d759a81f2f993af89c78ba4d","url":"assets/js/acc0782f.a02a2a67.js"},{"revision":"14984b3e3b01c0124e31d806bfe96a13","url":"assets/js/acecf23e.6906ac6f.js"},{"revision":"e6c407ad00a86d57e184f514df0cdc83","url":"assets/js/ae3304ee.aecef9e7.js"},{"revision":"a748a95a3fe5779c266b010e20cc9f36","url":"assets/js/b2273ae4.08881dda.js"},{"revision":"865ce36f12b55cbe4d5843fdee617e31","url":"assets/js/bd0053c4.ed39c5d5.js"},{"revision":"f04b913f3704739547ce85372368317a","url":"assets/js/bd1ad1c7.d2794299.js"},{"revision":"ce3f3f00251cf74b797c905d21ddeff9","url":"assets/js/beceb435.13a79d51.js"},{"revision":"59d700c3525b546b5c3851b532297a44","url":"assets/js/c15d9823.ea72090f.js"},{"revision":"9b74d512d1f93be81eb0993ee78b2940","url":"assets/js/c503a848.c93b1f7c.js"},{"revision":"1a91681a0a3c58bce05d37b22120d01e","url":"assets/js/c9f32de9.17940c5b.js"},{"revision":"314acde46e0e7610b38955cdea399795","url":"assets/js/ccc49370.393a528a.js"},{"revision":"cac4a1461fc5f1e9593b7686e4f323a0","url":"assets/js/d116049b.a6a8523a.js"},{"revision":"fa521431e67fad00664fd6477713b3ea","url":"assets/js/d1f05643.769fb4a0.js"},{"revision":"2be827cb42303eeb4234d488b2c02097","url":"assets/js/d9c7c902.f2a6fece.js"},{"revision":"f0b8801f0d6a498e62f8e758846fe358","url":"assets/js/db15e623.f1d64e61.js"},{"revision":"6af18ebd74558d0df13bbf9c02b0daaa","url":"assets/js/df203c0f.9980598f.js"},{"revision":"bdf5823b8a76daae4a89f098c549133e","url":"assets/js/df743714.0aae35ac.js"},{"revision":"2b664fd6d4f65e1bf0e59c3056457366","url":"assets/js/e00289c5.24695a0d.js"},{"revision":"64f79c06d0bf284fa4df87ba1ac10c6b","url":"assets/js/e6cd77b4.d99fa5e9.js"},{"revision":"e061f6ef7e38eab2570813792db7993b","url":"assets/js/ed987999.0c48270d.js"},{"revision":"aac2c9fd9a37705a5f1572b959c0b57c","url":"assets/js/ef8b811a.a98b6290.js"},{"revision":"a2c468b622fc448863f74c250af4b106","url":"assets/js/efbe55c5.aeaf1b54.js"},{"revision":"ec80e95d501cb34cddbb7566be6c92c5","url":"assets/js/f52348ad.16d5f378.js"},{"revision":"f949512e498a820a392bb906dd0afec3","url":"assets/js/f81c1134.ed01cad0.js"},{"revision":"6dcd7e0d417e087f7a63d44edd4e7c7b","url":"assets/js/main.8f336310.js"},{"revision":"767f588cbcc0e4994eb62bc2cdeedeb6","url":"assets/js/runtime~main.be36b864.js"},{"revision":"f995d8f7d324d5f591194cc8cc590aef","url":"blog/archive/index.html"},{"revision":"9ee11bf4801360c2d830b50ed4917f1d","url":"blog/authors/index.html"},{"revision":"17cea8a20fa1c9164056198c16354a60","url":"blog/env-package-selection/index.html"},{"revision":"fe2996173c96f7b80fdbdb1ea449db93","url":"blog/feed.json"},{"revision":"17e7e1e6be68ee69204c6295bcbdb76d","url":"blog/index.html"},{"revision":"29c2cc92655d4991252c66ab565d82cb","url":"blog/py-coding-standards/index.html"},{"revision":"73499bc178b171af93403dd5d76faec1","url":"blog/tags/index.html"},{"revision":"a066e63f7d8cecaa6d95a2d21a93f22b","url":"blog/tags/python/index.html"},{"revision":"6bc719be7847c47f238f4798a23d0d48","url":"blog/tags/包管理工具/index.html"},{"revision":"d01dd011f0efe6b72a681710cd24cb2b","url":"blog/zen-of-python/index.html"},{"revision":"53584ac893b71e762b537eb13ce0421d","url":"docs/category/modelops技术/index.html"},{"revision":"1f8445cdfdcbf61bbeb9ca33bd4287bd","url":"docs/category/python/index.html"},{"revision":"74cdf6ee854c7ebe1c3998aef6ec3289","url":"docs/category/python工程实践/index.html"},{"revision":"8c5f03ec3786cc01e5a9bbbddbc5ccc6","url":"docs/category/云原生技术/index.html"},{"revision":"339f7a88942210044d21e41ae86a0c30","url":"docs/category/开发类工具/index.html"},{"revision":"f971fe5cef414d8e5878e559df541591","url":"docs/category/编程语言/index.html"},{"revision":"ec93feca7485408bdb55cf1a9b934edf","url":"docs/chrome-plugins/index.html"},{"revision":"1327ea36a4f131dbaa7c231d55ad5f43","url":"docs/common-dev-tools-collection/index.html"},{"revision":"e1aec3d46320317d75c9fe23e1d00d4f","url":"docs/common-dev-tools-install/index.html"},{"revision":"46eec6dff8cfa338f8e1a7fe768afb2e","url":"docs/plugins-guide/index.html"},{"revision":"6ec8dff1dd8900b29365fb2a6657fb82","url":"docs/pypi-source-usage/index.html"},{"revision":"72ef183aaacef00aad56b4ad2d765f74","url":"docs/python/index.html"},{"revision":"07a872049867905215dcab0e49967e83","url":"docs/skill/cloudnative/ktconnect-usage/index.html"},{"revision":"805720a78518588051fda4802dec651b","url":"docs/skill/codelang/python/env-package-selection/index.html"},{"revision":"d58dcd1848bcd297494bf9ac70b4c46f","url":"docs/skill/index.html"},{"revision":"3b69be57133abe61b79b173fd988c0ab","url":"docs/skill/modelops/modelops-common-tech/index.html"},{"revision":"c63a91dd29c7e5dc2abd1a58dc51d6a3","url":"docs/tags/chrome/index.html"},{"revision":"c97b23ef852f0607710a2f317a909041","url":"docs/tags/docker-compose/index.html"},{"revision":"6f060f7123fb1e0ad6458105aeb36ee3","url":"docs/tags/docker/index.html"},{"revision":"c1ea9d61d8d548900ca9f84dd88ccade","url":"docs/tags/index.html"},{"revision":"2f1b499d5c0040b40c35fb744812a95a","url":"docs/tags/k-8-s/index.html"},{"revision":"b33b4782496e3417ec40bf992ae437f5","url":"docs/tags/kt-connect/index.html"},{"revision":"a19fc6e8ee24ae11325791120bd3c711","url":"docs/tags/model-ops/index.html"},{"revision":"c1e7d8a80316be5d7714e16dd6b9c495","url":"docs/tags/plugins/index.html"},{"revision":"7c2a04bd42788d5f62fa9f7be2aa618b","url":"docs/tags/pypi/index.html"},{"revision":"2e3ad98e70897da55271593452cc8352","url":"docs/tags/python/index.html"},{"revision":"5e3b79b2d06a96673926561c0fab4f8e","url":"docs/tags/tools/index.html"},{"revision":"3e1e13cc5cf10c84801eaf191846bfa7","url":"docs/tags/vscode/index.html"},{"revision":"f5d09ffcbabdb3e60264ec5cb4723725","url":"docs/tags/包管理工具/index.html"},{"revision":"4be253810126b049fcd489c0c21d4e9b","url":"docs/tags/开源工具/index.html"},{"revision":"a5e899655e99b4f3ab114e65654ede0c","url":"docs/tools/index.html"},{"revision":"6448513232563a233ea0fccb8cd8b556","url":"docs/vscode-plugins/index.html"},{"revision":"f225eca3347701a1bd2f25ce7cd45f01","url":"friends/index.html"},{"revision":"7cddfad52299e77928272be7ff27e37c","url":"index.html"},{"revision":"04819aee988485fc4ac7a5dd02309b66","url":"manifest.json"},{"revision":"a89759f6b99057d3b75f6ca04b2e555c","url":"project/index.html"},{"revision":"91f6c54ace99b438cc1b9e851f513f3c","url":"search-index-default.json"},{"revision":"3f2e65e3695a756ea9d7887167a89268","url":"search-index-docs-default-current.json"},{"revision":"0fde29e65532518b654d762694ec75ab","url":"img/buildwith.png"},{"revision":"1729f651768b3ba5457aa8e31e82924a","url":"img/favicon.ico"},{"revision":"58e205ab1e5728fe2e777103bc85ee72","url":"img/friend/alan.png"},{"revision":"e9d82843fc9657bfa3f935528626af4e","url":"img/friend/cworld.png"},{"revision":"2eb4be065c224ef92d705fa5a9e41172","url":"img/friend/disnox.png"},{"revision":"78da11e33856d54d5c861f0568d55684","url":"img/friend/faith&passion.png"},{"revision":"9a0ada7b147df9936ab5b7756f5386c0","url":"img/friend/innei.png"},{"revision":"03984b21e0b0e406218730411663f2a1","url":"img/friend/jetzihan.png"},{"revision":"1bbcd33e933240b335e98c19bd2379f1","url":"img/friend/knifer.png"},{"revision":"4df5fc36b9684aa9c13351b8d5fea749","url":"img/friend/licodeao.png"},{"revision":"39c1c200904006f03b6ce2f4e021611b","url":"img/friend/linexic.png"},{"revision":"4be74732b0ca6ab1038b5643763f1d2c","url":"img/friend/mas0n.png"},{"revision":"b0338eb9f9e967efddea1c4ac49c3cd4","url":"img/friend/meoo.png"},{"revision":"5cd933e9ee8cbd8f7301660b3faa7cae","url":"img/friend/old_monster.png"},{"revision":"c21c992476e17776e200eb0d07388a1d","url":"img/friend/opacity.png"},{"revision":"3c1c833797bcfbb55f9a52c3a4f6c7dd","url":"img/friend/pincman.png"},{"revision":"46a59f1054d965d90d2b87fb88eb049e","url":"img/friend/shake.png"},{"revision":"6800167e0633fd0550160fb9adaae143","url":"img/friend/simonme.png"},{"revision":"d726d41d89100ec0bad3647ff31fa605","url":"img/friend/skywt.png"},{"revision":"c786c54960d2c3c83882a5e0d16e6800","url":"img/friend/xiaojunnan.png"},{"revision":"721d7eed51573c535e94a1ea80f7bfbb","url":"img/friend/zxuqian.png"},{"revision":"cd4a5ecbd9cc330e7fdcb9bdc3e92796","url":"img/head.png"},{"revision":"ed6d71d8758e4d81a78fc68e4f95a1c2","url":"img/icons/icon-128.png"},{"revision":"933c014bc93d3b7b1e11be0b5b68eb88","url":"img/icons/icon-192.png"},{"revision":"92bc0cacbae1471d00465fa07d25cca5","url":"img/logo.png"},{"revision":"04d4146fb8e762d7774c10da2674df47","url":"img/og.png"},{"revision":"5c511d92a07aa061249aef3c32af5d16","url":"img/police.png"},{"revision":"656547ffed724b13f04b78579abfde3c","url":"img/project/blog.png"},{"revision":"34cc56c33df7c450753b9420f2dc27f5","url":"img/project/chaoxing-helper.png"},{"revision":"f886012d86129ad5bd2d8b65dab95577","url":"img/project/chaoxing-sign.png"},{"revision":"8f791d3fafd772d0a59961504f1dd58e","url":"img/project/example-website.png"},{"revision":"eb99a2d43dc8f74bac9404a0c69ae0ca","url":"img/project/hoppx.png"},{"revision":"63e7fcb942f257f9006794964a0974e3","url":"img/project/image-hosting.png"},{"revision":"b3c4a944f422a76cb65d1966b87d4458","url":"img/project/js-deobfuscator.png"},{"revision":"c667036796615c32886c529bb8e29979","url":"img/project/kz-api.png"},{"revision":"6e7f8204aba4497c455525905781aee2","url":"img/project/link-admin.png"},{"revision":"07979da0358644a1ee7fe6f75190ba2c","url":"img/project/link-maker.png"},{"revision":"f7bf23dab1b717773bc1cffb5e421307","url":"img/project/nest-vben-admin.png"},{"revision":"33f62698e7719ef244a1552eb9bc384f","url":"img/project/nuxt-naive-admin.png"},{"revision":"7fe3cfd32041981083c3a19d4bfd0f67","url":"img/project/ocr-admin.png"},{"revision":"e79b9fa3e4b1844666c9a001c84a7ad0","url":"img/project/online-tools.png"},{"revision":"c76c55fc95546340463f7594716cc9b6","url":"img/project/protocol.png"},{"revision":"f1c5a7433c91f1b2cd2f7a5e3e1c3c2d","url":"img/project/question-man.png"},{"revision":"213b7a66888406e2c32bba6119ab6a9b","url":"img/project/service.png"},{"revision":"1e9be5e62ab1fa80d3df1d607eec8230","url":"img/project/vitesse-nuxt3-strapi.png"},{"revision":"2a2a0be302da05d99d4677cbc8212c9c","url":"img/project/vscode-extension.png"},{"revision":"85e1b006138aab531c7f45393029953c","url":"img/project/vue-chrome-extension.png"},{"revision":"973680a4e370020ab6e6c2cc1f41d7c9","url":"img/project/youni.png"},{"revision":"a532e38da431500d56c6723bb785accf","url":"img/resource/antv.png"},{"revision":"f4bc27c77d6c694a8f102400b47a0f8c","url":"img/resource/any-rule.ico"},{"revision":"9add8f69e5fd853466d545af30c39c88","url":"img/resource/apifox.png"},{"revision":"b96c95e3c8bcbb9e7c4ee3d700f18e3e","url":"img/resource/atoolbox.ico"},{"revision":"f74ef9646e0ce62d91bd1f386ddea182","url":"img/resource/axios.ico"},{"revision":"f2d2896c488493e18c1b112cdd9bb1d9","url":"img/resource/bilibili.ico"},{"revision":"b26856c81cea82f651c3c66ccc7c0335","url":"img/resource/bootcdn.png"},{"revision":"46a4dee218eae406decc106f9172ad8f","url":"img/resource/bun.svg"},{"revision":"c5de2c1b2d4a25b3c3d0b2521deb2935","url":"img/resource/coding.png"},{"revision":"b052a4bef57c1aa73cd7cff5bc4fb61d","url":"img/resource/component party.svg"},{"revision":"b7c5833d7806e95fdbc1a3c71ce8dde0","url":"img/resource/coolify.png"},{"revision":"f29ce8e03185f245199879a3d8fc0c12","url":"img/resource/coolors.png"},{"revision":"808050b80ccd6183a6321c3aa4c92f9a","url":"img/resource/css-inspiration.png"},{"revision":"6011fc269b8777699f60ec9a97ee2bfe","url":"img/resource/cssfx.png"},{"revision":"1c43d44821c5ba994f4fc2be0132ccf3","url":"img/resource/cypress.png"},{"revision":"c4d953660c41f0899a763e020ed8661d","url":"img/resource/dbyun.png"},{"revision":"ddb429fa5a20c44429944cc756a7e535","url":"img/resource/digitalocean.png"},{"revision":"106e45640bf6465e840987f8d0809cac","url":"img/resource/docusaurus.svg"},{"revision":"fff84f43a8b8da380fc7f09a820b5cc1","url":"img/resource/electron.ico"},{"revision":"60a88e7ddf674b0945933dffb6f44d42","url":"img/resource/es6.png"},{"revision":"81d1730f850cbc1d88cff38abae22458","url":"img/resource/figma.png"},{"revision":"4cb055f312b13dbed3d215eb6c06e198","url":"img/resource/fresh.ico"},{"revision":"54a5811e46ae339fe0748c7e19ee13cf","url":"img/resource/gitee.ico"},{"revision":"7f969f62ee272a3be19966806fff4ad5","url":"img/resource/github.ico"},{"revision":"7c8d746a56fb25bcb657820decd2d55c","url":"img/resource/github.png"},{"revision":"42442ce03d1ed3af099667a09ae3d9bf","url":"img/resource/google_fonts.ico"},{"revision":"268d07772e674f7727b22d43feea87cd","url":"img/resource/graphQL.svg"},{"revision":"c1403617bee454cbc871d5a732b0f086","url":"img/resource/hoppscotch.png"},{"revision":"d1c7aa389a821f357dcce7e7b6ae49ef","url":"img/resource/igoutu.png"},{"revision":"0c1f700da144243c526f252e59362138","url":"img/resource/javascript.svg"},{"revision":"35e4d5afdd6e736d200012d7e5c3ec09","url":"img/resource/jest.png"},{"revision":"17e4e321a058f8b0909139af33f22044","url":"img/resource/juejin.png"},{"revision":"ee94dbce87dfc0bcdee0c8f526d75e75","url":"img/resource/loading.ico"},{"revision":"a25713fc9e37fc5ad32da2d8dba6b02e","url":"img/resource/mdn.png"},{"revision":"86e699e394c20125f4c0cc23d318dc57","url":"img/resource/naiveUI.svg"},{"revision":"b074eb934bb1a02c422d05677fdcc4ad","url":"img/resource/namae.png"},{"revision":"4ebaa8586aa8e994a4c9fd5ca2f5b55b","url":"img/resource/netlify.png"},{"revision":"f30aab085c20efcdee28b9d16750d3c5","url":"img/resource/nuxt.svg"},{"revision":"6d28840f7637b0b437f95bd66471eb47","url":"img/resource/ossinsight.png"},{"revision":"3a2e616a4c02faa220f078f403535bfa","url":"img/resource/playwright.svg"},{"revision":"5a70c4f927c14f31ae0459264c38744e","url":"img/resource/prisma.png"},{"revision":"8b0dbfce0588a8f48d2d829611332f2c","url":"img/resource/quick reference.svg"},{"revision":"038604213ed8d810252c3c314ba9d9f4","url":"img/resource/railway.png"},{"revision":"27c32d4fbf396b16c498302efe54505d","url":"img/resource/remix.png"},{"revision":"1061fe917a792a0ed8475a5eb61165eb","url":"img/resource/roadmap.png"},{"revision":"0a0be42ad6f025552317e5621d275981","url":"img/resource/runoob.png"},{"revision":"b653c6e07999f2b00977c97e126edf79","url":"img/resource/rust-logo-blk.svg"},{"revision":"b653c6e07999f2b00977c97e126edf79","url":"img/resource/rust.svg"},{"revision":"ecbe65446b836a0b24f6ff7259eb1b6c","url":"img/resource/shields.png"},{"revision":"dec5240948adcd97ea5465f34b9d02a2","url":"img/resource/stackblitz.png"},{"revision":"b80e8429f2dd86602ba9bedaee2372bf","url":"img/resource/stateofjs.svg"},{"revision":"eb33422a859d1e43141bae4e314aec24","url":"img/resource/strapi.png"},{"revision":"6cf68519793e79a1e69b8f593c6621ec","url":"img/resource/supabase.png"},{"revision":"8d64f21325fb22d6a6a62c405306f010","url":"img/resource/swc.png"},{"revision":"aa29f7985c9539c57bb0b3fa5005705b","url":"img/resource/swr.png"},{"revision":"c01e1bd852fe4e6a5cbc9ddeabe90216","url":"img/resource/taro.png"},{"revision":"31c4413e9d4fff5adb58792f8900d65c","url":"img/resource/terminalgif.ico"},{"revision":"b2f84f958493f6b6643428b0d38c65c4","url":"img/resource/turbopack.svg"},{"revision":"3d86b98e3d7c252c00dad343f37e6191","url":"img/resource/turborepo.svg"},{"revision":"778664dab30dd2c4f8c12feab032f3b8","url":"img/resource/twind.svg"},{"revision":"a1e9f66a2d4c49efc0e723e29e75c6da","url":"img/resource/typeorm.ico"},{"revision":"1b7349d4f07001501c26a26ecf6be17c","url":"img/resource/typescript.png"},{"revision":"6fb1c8469b46d4fab3c1557218dd4e56","url":"img/resource/typing-svg.png"},{"revision":"96a30ce5f72464163972c5d879766494","url":"img/resource/uiverse.png"},{"revision":"8ec9313acd1ae0ba8283ff9d4606ac22","url":"img/resource/vben-admin.png"},{"revision":"1821c958bbe5e0a6a4563025af907760","url":"img/resource/vite.svg"},{"revision":"2f853f56c0133e956f12da2a73ea80a5","url":"img/resource/webgradients.png"},{"revision":"3c1181be7354785c1412eb6c098c3fba","url":"img/resource/webpack.png"},{"revision":"112c07f54c66e11173bc2aee6fa66f2e","url":"img/resource/zhubai.png"},{"revision":"a0f5a26a14cd2c16640bf9f6afd3757f","url":"img/resource/zustand.png"},{"revision":"644584998c84ebf587c0a07cd77b21f3","url":"svg/undraw_open_source.svg"},{"revision":"4a66472a4d7d4608758d69e54253745f","url":"svg/undraw_spider.svg"},{"revision":"edb08a95d20d231d994815ffe9962709","url":"svg/undraw_web_developer.svg"}],s=new C({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})();