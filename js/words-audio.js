// Word pronunciation for words.html / challenge.html.
// Same rule as engine-core.js say(): play the pre-recorded clip in audio/en/
// when one exists for the word, otherwise fall back to device speech.
(function(){
  function slug(t){return String(t).replace(/\(.*?\)/g,'').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
  function pickVoice(){
    if(!window.speechSynthesis)return null;
    const en=(speechSynthesis.getVoices()||[]).filter(v=>v.lang&&v.lang.toLowerCase().startsWith('en'));
    const sc=v=>{const n=v.name.toLowerCase();return (/natural|neural/.test(n)?5:0)+(/google/.test(n)?4:0)+(/enhanced|premium/.test(n)?3:0)+(v.lang.toLowerCase()==='en-us'?2:0);};
    return en.sort((a,b)=>sc(b)-sc(a))[0]||null;
  }
  function tts(t){
    if(!window.speechSynthesis)return;
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(String(t).replace(/\(.*?\)/g,'').trim());
    const v=pickVoice();if(v){u.voice=v;u.lang=v.lang;}else u.lang='en-US';
    u.rate=0.82;speechSynthesis.speak(u);
  }
  let cur=null;
  window.sayWord=function(t){
    const s=slug(t);
    if(typeof AUDIO_INDEX!=='undefined'&&AUDIO_INDEX.has(s)){
      try{
        if(window.speechSynthesis)speechSynthesis.cancel();
        if(cur){try{cur.pause();}catch(e){}}
        cur=new Audio('/audio/en/'+s+'.mp3');
        cur.play().catch(()=>tts(t));
        return;
      }catch(e){}
    }
    tts(t);
  };
})();
