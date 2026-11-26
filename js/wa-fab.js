// زر واتساب عائم (أسفل اليمين) للاقتراحات والإضافات — يُحمَّل في كل الصفحات.
(function(){
  if(document.getElementById('wa-fab'))return;
  var NUM='966555736427';
  var MSG='السلام عليكم، عندي اقتراح لموقع ALC: ';
  var css='#wa-fab{position:fixed;right:16px;bottom:20px;z-index:300;display:flex;align-items:center;justify-content:center;'+
    'background:#25D366;color:#fff;text-decoration:none;border-radius:50%;width:52px;height:52px;'+
    'box-shadow:0 6px 18px rgba(0,0,0,.22);'+
    'transition:transform .15s,box-shadow .15s;-webkit-tap-highlight-color:transparent}'+
    '#wa-fab:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.28)}'+
    '#wa-fab svg{width:28px;height:28px;flex:none}'+
    
    '@media print{#wa-fab{display:none}}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var a=document.createElement('a');
  a.id='wa-fab';a.target='_blank';a.rel='noopener';
  a.href='https://wa.me/'+NUM+'?text='+encodeURIComponent(MSG);
  a.setAttribute('aria-label','راسلنا على واتساب: اقتراحات وإضافات');a.title='اقتراحات وإضافات';
  a.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#fff" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6C4.9 9.8 9.9 5 16 5s11.1 4.8 11.1 10.8S22.1 26.4 16 26.4zm6.1-8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2.1-.4 0-.6-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5.1.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 2-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z"/></svg>';
  a.addEventListener('click',function(){try{gtag('event','whatsapp_click',{page:location.pathname});}catch(e){}});
  document.body.appendChild(a);
})();
