const cacheVersion = "workshop-theme-v1";
const staticCacheName = "aws-report-static-" + cacheVersion;
const pageCacheName = "aws-report-pages-" + cacheVersion;
const expectedCacheNames = [staticCacheName, pageCacheName];

function getScopePath() {
  return new URL(self.registration.scope).pathname;
}

function getScopedUrl(pathValue) {
  return new URL(pathValue, self.registration.scope).toString();
}

function getCoreAssetUrls() {
  return [
    getScopedUrl("./"),
    getScopedUrl("css/custom-enhancements.css"),
    getScopedUrl("js/custom-theme.js"),
    getScopedUrl("AWS_Logo.svg"),
    getScopedUrl("images/avatar.png"),
    getScopedUrl("index.json")
  ];
}

function isSameOriginRequest(request) {
  return new URL(request.url).origin === self.location.origin;
}

function isScopedRequest(request) {
  const scopePath = getScopePath();
  const requestPath = new URL(request.url).pathname;

  return requestPath.indexOf(scopePath) === 0;
}

function isDevelopmentRequest(request) {
  const requestUrl = new URL(request.url);

  return requestUrl.pathname.indexOf("livereload") !== -1 ||
    requestUrl.search.indexOf("livereload") !== -1;
}

function isCacheableRequest(request) {
  return request.method === "GET" &&
    isSameOriginRequest(request) &&
    isScopedRequest(request) &&
    !isDevelopmentRequest(request);
}

function createOfflineDocument() {
  return new Response(
    "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Offline</title><style>body{align-items:center;background:#fff9fc;color:#4f4350;display:flex;font-family:Arial,sans-serif;justify-content:center;min-height:100vh;margin:0;padding:2rem}.card{background:#fff;border:1px solid #ffd6e8;border-radius:24px;box-shadow:0 18px 44px rgba(255,111,174,.16);max-width:34rem;padding:2rem;text-align:center}h1{color:#b84f83}</style></head><body><main class=\"card\"><h1>Offline</h1><p>This page is not available offline yet. Please reconnect and try again.</p></main></body></html>",
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      },
      status: 503,
      statusText: "Service Unavailable"
    }
  );
}

async function putCacheResponse(cacheName, request, response) {
  if (!response || response.status !== 200) {
    return response;
  }

  const cache = await caches.open(cacheName);

  await cache.put(request, response.clone());

  return response;
}

async function getCachedOrOfflineNavigation(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const homeResponse = await caches.match(getScopedUrl("./"));

  if (homeResponse) {
    return homeResponse;
  }

  return createOfflineDocument();
}

async function getNetworkFirstResponse(request) {
  try {
    const networkResponse = await fetch(request);

    return putCacheResponse(pageCacheName, request, networkResponse);
  } catch (error) {
    return getCachedOrOfflineNavigation(request);
  }
}

async function getStaleWhileRevalidateResponse(request) {
  const cachedResponse = await caches.match(request);
  const fetchPromise = fetch(request).then(function (networkResponse) {
    return putCacheResponse(staticCacheName, request, networkResponse);
  }).catch(function () {
    if (cachedResponse) {
      return cachedResponse;
    }

    return Response.error();
  });

  return cachedResponse || fetchPromise;
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(getCoreAssetUrls());
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (expectedCacheNames.indexOf(cacheName) !== -1) {
            return Promise.resolve();
          }

          return caches.delete(cacheName);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;

  if (!isCacheableRequest(request)) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(getNetworkFirstResponse(request));
    return;
  }

  event.respondWith(getStaleWhileRevalidateResponse(request));
});
