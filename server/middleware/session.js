export function getSessionId(req) {
  return req.header('x-session-id') || req.body?.sessionId || 'anonymous';
}
