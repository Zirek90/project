"use strict";var precacheConfig=[["/MaxDron/index.html","49b507b10f35501f3acf1d5cc29a72ae"],["/MaxDron/static/css/main.9bb8262a.css","1dbec8fcbe7f0ceec7cf4635c01de3fe"],["/MaxDron/static/js/main.f09ac174.js","1b0d9b214f09f1af3ba1f351b041a284"],["/MaxDron/static/media/Project1.de961414.jpg","de961414db0f5083d4963f102d5e7a74"],["/MaxDron/static/media/Project2.1407db26.jpg","1407db26e21cb313660025dc33267a3c"],["/MaxDron/static/media/Project3.eb6ab61e.jpg","eb6ab61e081a17da7f649e7d7d9c0d94"],["/MaxDron/static/media/Project4.c86da4ea.jpg","c86da4ea67b34c930f1a8b86e35df3e4"],["/MaxDron/static/media/Project5.9b5e6d3d.jpg","9b5e6d3de9a199871eb05a1143294e4a"],["/MaxDron/static/media/Project6.5598029b.jpg","5598029b4d1daf07e669386006a621d1"],["/MaxDron/static/media/Project7.339a2357.jpg","339a23575da896e1ed0c1e958d245caf"],["/MaxDron/static/media/Project8.95c11c53.jpg","95c11c53f9f32db45142cd02a2cfde5b"],["/MaxDron/static/media/header.3bfc9613.jpg","3bfc9613e3c76a22747b143a253837af"],["/MaxDron/static/media/transition1.d3375dea.jpg","d3375dea3ccdedf327fa62be79644c11"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/MaxDron/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});