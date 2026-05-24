const CACHE_NAME = 'selfquest-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/808beat-4GSynthG.mp3',
  '/apple-touch-icon.png',
  '/favicon-96x96.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});