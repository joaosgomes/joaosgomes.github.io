self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === "/favicon.ico") {
    event.respondWith(new Response(null, { status: 204 }));
    return;
  }

  if (url.pathname === "/api/anything") {
    event.respondWith(
      Response.json({
        message: "Service Worker works!",
        method: event.request.method,
        url: event.request.url,
      })
    );
  }
});