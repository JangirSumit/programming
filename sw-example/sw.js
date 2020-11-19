self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static-v2").then(function (cache) {
      console.log("Opened Cache");
      return cache.addAll(["/", "/index.js", "image.jpg"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== "static-v2") {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
