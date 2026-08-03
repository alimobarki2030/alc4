// ═══════════════════════════════════════
// ERROR REPORTER — surfaces uncaught JS errors to GA + Microsoft Clarity so
// device/browser-specific breakage shows up without waiting for a student to
// report it over WhatsApp. Loaded synchronously in <head> so its listeners are
// registered before the engine scripts run.
// ═══════════════════════════════════════
(function(){
  var seen={}, count=0, MAX=8; // dedupe + per-session cap so we never flood

  function report(kind, msg, detail){
    if(!msg)return;
    var key=(kind+'|'+msg).slice(0,200);
    if(seen[key]||count>=MAX)return;
    seen[key]=1; count++;
    var page=location.pathname+location.search;
    msg=String(msg).slice(0,300);
    detail=String(detail||'').slice(0,300);
    try{
      if(typeof gtag==='function'){
        gtag('event','js_error',{kind:kind,message:msg,page:page,detail:detail});
      }
    }catch(e){}
    try{
      if(typeof window.clarity==='function'){
        window.clarity('set','js_error',msg);
        window.clarity('event','js_error');
      }
    }catch(e){}
  }

  // Uncaught errors. Resource-load failures (img/script) have no .message and
  // are ignored on purpose — we only want real JS errors.
  window.addEventListener('error', function(e){
    if(e && e.message){ report('error', e.message, (e.filename||'')+':'+(e.lineno||0)); }
  });
  // Unhandled promise rejections.
  window.addEventListener('unhandledrejection', function(e){
    var r=e && e.reason;
    report('promise', (r && r.message) || String(r), r && r.stack);
  });
})();
