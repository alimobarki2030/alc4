// ═══════════════════════════════════════
// LISTENING — YouTube videos (Book 5)
// (لإضافة مقطع: أضف سطراً {id:'YOUTUBE_ID', t:'العنوان', s:'وصف قصير'})
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'Q8l4Pu8HjIw',t:'Quiz A',s:'استماع وقراءة مع الحل'}
];
function open_yt(){
  show_screen('ytscreen');
  document.getElementById('ytscreen').scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('yt-tabs').innerHTML=YT_VIDEOS.map((v,i)=>
    `<button class="yt-tab" id="yt-tab-${i}" onclick="sw_yt(${i},true)"><b>${v.t}</b><span>${v.s}</span></button>`).join('');
  sw_yt(0,false);
}
function sw_yt(i,autoplay){
  YT_VIDEOS.forEach((v,j)=>{const t=document.getElementById('yt-tab-'+j);if(t)t.classList.toggle('on',j===i);});
  const v=YT_VIDEOS[i];
  document.getElementById('yt-iframe').src=`https://www.youtube.com/embed/${v.id}?rel=0${autoplay?'&autoplay=1':''}`;
}
