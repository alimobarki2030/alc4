const CACHE_NAME='alc-v77';
// Audio lives in its own size-capped cache so 46 MB of mp3s can never pile
// into (or get wiped alongside) the versioned app cache.
const MEDIA_CACHE='alc-audio-v1';
const MEDIA_MAX=250;
// cleanUrls is enabled on Vercel, so navigations use extensionless paths
// (/book4, not /book4.html). Precaching the extensionless URLs means the
// install fetch hits the canonical page directly (200, not a 308 redirect),
// so no redirected response ever enters the cache — the Safari-breaking case.
const CORE_ASSETS=[
  '/','/book3','/book4','/book5','/book5-pronouns','/book6','/book7','/book8','/book9','/book10','/book11','/book12','/grammar',
  '/css/style.css',
  '/js/error-report.js',
  '/js/access-gate.js',
  '/js/audio-index.js',
  '/js/engine-core.js','/js/engine-progress.js','/js/engine-lessons.js',
  '/js/engine-youtube.js','/js/engine-spell.js','/js/engine-concepts.js',
  '/js/concepts-prep.js','/js/concepts-art.js','/js/concepts-wh.js',
  '/js/concepts-pronouns.js','/js/concepts-modals.js','/js/concepts-time.js',
  '/js/concepts-irregular.js',
  '/js/data-book3.js','/js/data-book4.js','/js/data-book5.js','/js/data-book6.js','/js/data-book7.js','/js/data-book8.js','/js/data-book9.js','/js/data-book10.js','/js/data-book11.js','/js/data-book12.js',
  '/alc.png','/icon-192.png','/icon-512.png','/hero-bg.webp','/hero-bg.jpg'
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
      // Keep the current app cache AND the audio cache; drop old app versions.
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&k!==MEDIA_CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// Evict oldest mp3s (FIFO by insertion order) once the audio cache exceeds the
// cap, so it stays bounded on mobile storage.
function _trimMedia(){
  return caches.open(MEDIA_CACHE).then(c=>c.keys().then(keys=>{
    if(keys.length<=MEDIA_MAX)return;
    return Promise.all(keys.slice(0,keys.length-MEDIA_MAX).map(k=>c.delete(k)));
  })).catch(()=>{});
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  if(!req.url.startsWith(self.location.origin))return;

  // Navigations → network-first: always try fresh HTML so a deploy shows up
  // immediately (no more new-HTML-with-stale-data skew); fall back to the
  // cached page, then the app shell, when offline.
  if(req.mode==='navigate'){
    e.respondWith(
      fetch(req).then(res=>{
        if(cacheable(res)){const clone=res.clone();caches.open(CACHE_NAME).then(c=>c.put(req,clone));}
        return res;
      }).catch(()=>caches.match(req).then(c=>c||caches.match('/')))
    );
    return;
  }

  // Audio → cache-first into the separate capped cache.
  if(/\/audio\/.+\.mp3(\?|$)/.test(req.url)){
    e.respondWith(
      caches.open(MEDIA_CACHE).then(c=>c.match(req).then(hit=>{
        if(hit)return hit;
        return fetch(req).then(res=>{
          if(cacheable(res)){c.put(req,res.clone()).then(_trimMedia);}
          return res;
        });
      }))
    );
    return;
  }

  // Everything else (CSS/JS/images) → stale-while-revalidate.
  e.respondWith(
    caches.match(req).then(cached=>{
      const fetchPromise=fetch(req).then(res=>{
        if(cacheable(res)){const clone=res.clone();caches.open(CACHE_NAME).then(c=>c.put(req,clone));}
        return res;
      }).catch(()=>cached);
      return cached||fetchPromise;
    })
  );
});
