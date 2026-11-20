// Llamadas al backend (POST text/plain para evitar preflight CORS)
async function api(action, data) {
  const url = window.LB_CONFIG.API_URL;
  if (!/^https:\/\/script\.google\.com\//.test(url)) throw new Error('Falta configurar API_URL');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(Object.assign({ action }, data || {})),
    redirect: 'follow'
  });
  const j = await res.json();
  if (!j.ok) throw new Error(j.error || 'Error');
  return j;
}
function $(s, el) { return (el || document).querySelector(s); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function initials(n) { return String(n || '?').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase(); }
