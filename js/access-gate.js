// ═══════════════════════════════════════
// ACCESS GATE — shared secret-code check via Supabase.
// The code itself never reaches the client: verify_access_code() runs
// server-side (security definer) and returns only true/false.
// Once unlocked, the device is remembered in BOTH localStorage and a
// long-lived cookie, and the window is refreshed on every visit (sliding
// expiry). This way a device that keeps being used never sees the gate
// again. On iOS Safari, script-writable storage is still capped at ~7 days
// of no first-party interaction (Apple ITP), so an inactive device may be
// asked again after a week — installing the app to the Home Screen removes
// that cap. Works fully offline after the first unlock.
// ═══════════════════════════════════════
(function(){
  // ── مفتاح تفعيل البوابة ──────────────────────────────────────────────
  // موقوفة مؤقتاً أثناء بناء الموقع (كانت تُطلب مع كل تحديث وتُزعج الطلاب).
  // لإعادة تفعيلها لاحقاً: غيّر false إلى true فقط. لا شيء آخر يتغيّر.
  const GATE_ENABLED = false;
  if (!GATE_ENABLED) return;

  const SUPABASE_URL = 'https://rfkqfwijuulgdjzqrcpi.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJma3Fmd2lqdXVsZ2RqenFyY3BpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3NjUzMzQsImV4cCI6MjEwMTM0MTMzNH0.4oTM9bqa_3orsn_ZxxndrnCwt-eMC45ayqFqOX_tzsA';
  const STORAGE_KEY = 'alc_access_ok';
  const REMEMBER_DAYS = 180;

  // Remember the unlock in localStorage AND a cookie, refreshing the cookie's
  // max-age on every call so an actively-used device keeps its access.
  function rememberDevice(){
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    try {
      document.cookie = STORAGE_KEY + '=1; max-age=' + (REMEMBER_DAYS*24*60*60) + '; path=/; SameSite=Lax';
    } catch (e) {}
  }
  function isRemembered(){
    try { if (localStorage.getItem(STORAGE_KEY) === '1') return true; } catch (e) {}
    try { if (document.cookie.split('; ').indexOf(STORAGE_KEY + '=1') !== -1) return true; } catch (e) {}
    return false;
  }

  // Already unlocked on this device: re-arm both stores (restores whichever
  // was evicted, slides the expiry forward) and skip the gate.
  if (isRemembered()) { rememberDevice(); return; }

  function buildGate(){
    const overlay = document.createElement('div');
    overlay.id = 'access-gate';
    overlay.innerHTML = `
      <div class="ag-card">
        <div class="ag-top"></div>
        <div class="ag-icon"><svg class="svgico" aria-hidden="true"><use href="#icon-lock"></use></svg></div>
        <div class="ag-brand">ALC</div>
        <div class="ag-brand-sub">American Language Course</div>
        <input id="ag-input" type="text" autocomplete="off" placeholder="اكتب الكود هنا">
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
          rememberDevice();
          document.documentElement.style.overflow = '';
          overlay.remove();
          // Focusing the input can scroll the page behind the gate (mobile);
          // land the unlocked page at the top instead of mid-scroll.
          window.scrollTo(0, 0);
        } else {
          err.textContent = '❌ الكود غير صحيح، حاول مرة ثانية';
          input.value = ''; input.focus({ preventScroll: true });
        }
      } catch (e) {
        err.textContent = '⚠️ تعذر الاتصال، تأكد من الإنترنت وحاول مرة ثانية';
      }
      btn.disabled = false; btn.textContent = 'دخول';
    }

    btn.addEventListener('click', trySubmit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') trySubmit(); });
    setTimeout(() => input.focus({ preventScroll: true }), 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildGate);
  } else {
    buildGate();
  }
})();
