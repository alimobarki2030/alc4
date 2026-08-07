const CACHE_NAME='alc-v55';
// cleanUrls is enabled on Vercel, so navigations use extensionless paths
// (/book4, not /book4.html). Precaching the extensionless URLs means the
// install fetch hits the canonical page directly (200, not a 308 redirect),
// so no redirected response ever enters the cache — the Safari-breaking case.
const CORE_ASSETS=[
  '/','/book4','/book5','/book5-pronouns','/book6','/book7','/book8','/book9','/book10','/grammar',
  '/css/style.css',
  '/js/error-report.js',
  '/js/access-gate.js',
  '/js/audio-index.js',
  '/js/engine-core.js','/js/engine-progress.js','/js/engine-lessons.js',
  '/js/engine-youtube.js','/js/engine-spell.js','/js/engine-concepts.js',
  '/js/concepts-prep.js','/js/concepts-art.js','/js/concepts-wh.js',
  '/js/concepts-pronouns.js','/js/concepts-modals.js','/js/concepts-time.js',
  '/js/concepts-irregular.js',
  '/js/data-book4.js','/js/data-book5.js','/js/data-book6.js','/js/data-book7.js','/js/data-book8.js','/js/data-book9.js','/js/data-book10.js',
  '/alc.png','/icon-192.png','/icon-512.png','/hero-bg.jpg'
];

// A response is only safe to cache when it is a final same-origin 200 that
// was NOT produced by following a redirect. WebKit throws if a redirected
// response is later served for a navigation request, which blanks the page.
const cacheable=res=>res&&res.status===200&&res.type==='basic'&&!res.redirected;

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE_NAME)
      // addAll aborts the whole install if any single request fails, so add
      // assets individually and tolerate per-asset failures.
      .then(cache=>Promise.all(CORE_ASSETS.map(url=>
        fetch(url,{cache:'reload'})
          .then(res=>cacheable(res)?cache.put(url,res):null)
          .catch(()=>null)
      )))
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
        if(cacheable(res)){
          const clone=res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(e.request,clone));
        }
        return res;
      }).catch(()=>cached);
      return cached||fetchPromise;
    })
  );
});
