import { getSessionId } from '../middleware/session.js';
import { appendHistory, getHistory } from '../services/historyService.js';

export async function listHistory(req, res, next) {
  try {
    res.json({ messages: await getHistory(getSessionId(req)) });
  } catch (error) {
    next(error);
  }
}

export async function storeHistory(req, res, next) {
  try {
    await appendHistory(getSessionId(req), req.body.messages || []);
    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
}
