const CACHE_NAME='alc-v1';
const CORE_ASSETS=[
  '/','/index.html','/book4.html','/grammar.html',
  '/css/style.css',
  '/js/lessons.js','/js/games-prep.js','/js/games-art.js','/js/games-wh.js',
  '/js/games-pronouns.js','/js/games-modals.js','/js/games-time.js',
  '/js/games-irregular.js','/js/games-spell.js','/js/youtube.js','/js/progress.js',
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
