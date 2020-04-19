var cacheName = 'hello-pwa';

var filesToCache = [
  './',
  './index.html',
  './public/js/main.js',
  './favicon.ico',
  './public/js/example.js',
  './public/img/icon.png',
  './public/img/logo.svg',
  './public/img/splash.png',


];

self.addEventListener('install', (e) => {
  console.log('HELLO');
  e.waitUntil((async () => {
    try {
      const cache = await caches.open(cacheName);
      return cache.addAll(filesToCache);
    }
    catch (e) {
      console.log('after install', e.message);
    }
  })());
});

self.addEventListener('fetch', (e) => {
  console.log('WELLO');
  e.respondWith((async () => {
    try {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    }
    catch (e) {
      console.log('load cache', e.message);
    }
  })());
});
