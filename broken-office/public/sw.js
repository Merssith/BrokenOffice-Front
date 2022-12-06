// Establish a cache name
const cacheName = "MyFancyCacheName_v1";

// Assets to precache
const precachedAssets = [
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/0.bundle.js",
  "/index.html",
  "/",
  "/login",
  "/register",
  { url: "/index.html", revision: "383676" },
];

self.addEventListener("install", (event) => {
  // Precache assets on install
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(precachedAssets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Grab the precached asset from the cache
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) {
        return resp;
      }
    })
  );
});
