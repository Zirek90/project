"use strict";var precacheConfig=[["/MaxDron/index.html","72eb43d1692422af2e035532a28e080f"],["/MaxDron/static/css/main.618d48d6.css","50e68b93c6cb2fa2365ab2767784a7e4"],["/MaxDron/static/js/main.61f79b09.js","19a1901d4497d95a7624408adedd5147"],["/MaxDron/static/media/Project1.3ea4e672.jpg","3ea4e672ebcce7d93ecb0df46a8e298f"],["/MaxDron/static/media/Project2.162febb9.jpg","162febb9e4daac1f8ff3e3c8a6d1bd4f"],["/MaxDron/static/media/Project3.59d247d7.jpg","59d247d775d751647cb504c0407d46b2"],["/MaxDron/static/media/Project4.caff7fec.jpg","caff7fec33b58bd0910d56d062abe61c"],["/MaxDron/static/media/Project5.f45956a6.jpg","f45956a6e96082dda167b6356302c79d"],["/MaxDron/static/media/Project6.9e986df4.jpg","9e986df4dd3c98c9f7acb95043a42ede"],["/MaxDron/static/media/Project7.37bdef10.jpg","37bdef104c312c9064af810cc2984f1f"],["/MaxDron/static/media/Project8.3bf868e5.jpg","3bf868e5989ccf1edc54ee489985e9f9"],["/MaxDron/static/media/header.ac074848.jpg","ac07484870e9043400ec1dc6789a3eb3"],["/MaxDron/static/media/transition1.0b8de915.jpg","0b8de915fc6079b379e174fa8330a6fa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/MaxDron/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});