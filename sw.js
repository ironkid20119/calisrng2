const CACHE_NAME = 'calis-rng-cache-v1';
const FILES_TO_CACHE = [
  'index.html',
  'manifest.json',
  'icons/icon-192x192.png',
  'icons/icon-512x512.png'
];

// Install event: cache the app shell
self.addEventListener('install', event => {
  console.log('ServiceWorker: Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('ServiceWorker: Caching app shell');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  console.log('ServiceWorker: Activate');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          console.log('ServiceWorker: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Fetch event: serve from cache first
self.addEventListener('fetch', event => {
  console.log('ServiceWorker: Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return from cache or fetch from network
        return response || fetch(event.request);
      })
  );
});
