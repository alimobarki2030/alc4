const CACHE_NAME='alc-v2';
const CORE_ASSETS=[
  '/','/index.html','/book4.html','/book5.html','/book5-pronouns.html','/grammar.html',
  '/css/style.css',
  '/js/engine-core.js','/js/engine-progress.js','/js/engine-lessons.js',
  '/js/engine-youtube.js','/js/engine-spell.js','/js/engine-concepts.js',
  '/js/concepts-prep.js','/js/concepts-art.js','/js/concepts-wh.js',
  '/js/concepts-pronouns.js','/js/concepts-modals.js','/js/concepts-time.js',
  '/js/concepts-irregular.js',
  '/js/data-book4.js','/js/data-book5.js',
  '/alc.png','/icon-192.png','/icon-512.png'
];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(CORE_ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(!e.request.url.startsWith(self.location.origin))return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const fetchPromise=fetch(e.request).then(res=>{
        if(res&&res.status===200){
          const clone=res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(e.request,clone));
        }
        return res;
      }).catch(()=>cached);
      return cached||fetchPromise;
    })
  );
});
