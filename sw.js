
const CACHE_NAME = 'radar-cache-v2';

self.addEventListener('install', e => {
    // Force immediate activation
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.match(e.request);
        })
    );
});
