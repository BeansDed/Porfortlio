// Minimal no-op service worker to prevent 500s when /sw.js is requested.
// This does not cache or intercept requests.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {});
