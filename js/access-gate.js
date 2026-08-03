// ═══════════════════════════════════════
// ACCESS GATE — shared secret-code check via Supabase.
// The code itself never reaches the client: verify_access_code() runs
// server-side (security definer) and returns only true/false.
// Once unlocked, the choice is remembered in localStorage — no further
// network calls, works fully offline afterward.
// ═══════════════════════════════════════
(function(){
  const SUPABASE_URL = 'https://rfkqfwijuulgdjzqrcpi.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJma3Fmd2lqdXVsZ2RqenFyY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3NjUzMzQsImV4cCI6MjEwMTM0MTMzNH0.4oTM9bqa_3orsn_ZxxndrnCwt-eMC45ayqFqOX_tzsA';
  const STORAGE_KEY = 'alc_access_ok';

  if (localStorage.getItem(STORAGE_KEY) === '1') return;

  function buildGate(){
    const overlay = document.createElement('div');
    overlay.id = 'access-gate';
    overlay.innerHTML = `
      <div class="ag-card">
        <div class="ag-emoji">🔒</div>
        <h2>هذا الموقع خاص بطلاب المعهد</h2>
        <p>أدخل كود الدخول اللي وصلك من معلمك</p>
        <input id="ag-input" type="text" autocomplete="off" placeholder="الكود السري">
        <button id="ag-submit">دخول</button>
        <div id="ag-err" class="ag-err"></div>
      </div>`;
    document.documentElement.appendChild(overlay);
    document.documentElement.style.overflow = 'hidden';

    const input = overlay.querySelector('#ag-input');
    const btn = overlay.querySelector('#ag-submit');
    const err = overlay.querySelector('#ag-err');

    async function trySubmit(){
      const code = input.value.trim();
      if (!code) return;
      btn.disabled = true; btn.textContent = '...';
      err.textContent = '';
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/verify_access_code`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
          },
          body: JSON.stringify({ input_code: code })
        });
        const ok = await res.json();
        if (ok === true) {
          localStorage.setItem(STORAGE_KEY, '1');
          document.documentElement.style.overflow = '';
          overlay.remove();
        } else {
          err.textContent = '❌ الكود غير صحيح، حاول مرة ثانية';
          input.value = ''; input.focus();
        }
      } catch (e) {
        err.textContent = '⚠️ تعذر الاتصال، تأكد من الإنترنت وحاول مرة ثانية';
      }
      btn.disabled = false; btn.textContent = 'دخول';
    }

    btn.addEventListener('click', trySubmit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') trySubmit(); });
    setTimeout(() => input.focus(), 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildGate);
  } else {
    buildGate();
  }
})();
