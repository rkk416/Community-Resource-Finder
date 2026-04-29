// In dev, use a relative URL so Vite's built-in proxy forwards /api/* to the backend.
// In production, set VITE_API_URL to the absolute backend URL (e.g., https://api.example.com).
const API_URL = import.meta.env.VITE_API_URL ?? '';

// ─── Session ID ───────────────────────────────────────────────────────────────
function getSessionId() {
  let id = localStorage.getItem('pf_session_id');
  if (!id) {
    try { id = crypto.randomUUID(); }
    catch { id = 'sess-' + Math.random().toString(36).slice(2) + Date.now(); }
    localStorage.setItem('pf_session_id', id);
  }
  return id;
}

// ─── Auth token helpers ───────────────────────────────────────────────────────
export function getStoredUser() {
  try { return JSON.parse(localStorage.getItem('pf_user') || 'null'); }
  catch { return null; }
}

export function setStoredUser(user) {
  if (user) localStorage.setItem('pf_user', JSON.stringify(user));
  else localStorage.removeItem('pf_user');
}

// ─── Base request ─────────────────────────────────────────────────────────────
async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-session-id': getSessionId(),
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || 'Request failed');
  }

  return response.json();
}

// ─── Auth endpoints ───────────────────────────────────────────────────────────
export async function loginUser({ email, password }) {
  const data = await request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  setStoredUser(data.user);
  return data;
}

export async function registerUser({ name, email, password }) {
  const data = await request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password })
  });
  setStoredUser(data.user);
  return data;
}

// ─── App endpoints ────────────────────────────────────────────────────────────
export function sendChat(message, city, location) {
  return request('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message, city, location })
  });
}

export function fetchResources(filters = {}) {
  const params = new URLSearchParams(
    Object.entries(filters).filter(([key, value]) => value && !(key === 'city' && value === 'All'))
  );
  const query = params.toString();
  return request(`/api/resources${query ? '?' + query : ''}`);
}

export function fetchHistory() {
  return request('/api/history');
}
