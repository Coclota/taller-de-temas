// Service worker de Taller de Temas: guarda la app para que funcione sin conexión.
// Al cambiar cualquier archivo de la app, sube la versión para que los usuarios reciban la nueva.
const VERSION = "v1";
const APP = `taller-temas-${VERSION}`;
const FONTS = "taller-temas-fuentes";
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "vendor/jszip.min.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(APP).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== APP && k !== FONTS).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Fuentes de Google: se guardan la primera vez que se descargan.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      caches.open(FONTS).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        try {
          const res = await fetch(req);
          if (res.ok || res.type === "opaque") cache.put(req, res.clone());
          return res;
        } catch {
          return new Response("", { status: 504 });
        }
      }),
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Página: primero la red (para recibir cambios), si no hay conexión, la copia guardada.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(APP).then((c) => c.put("index.html", copy)); }
          return res;
        })
        .catch(() => caches.match("index.html")),
    );
    return;
  }

  // Resto de archivos: primero la copia guardada.
  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
