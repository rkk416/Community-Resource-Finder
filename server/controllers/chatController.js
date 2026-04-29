import { z } from 'zod';
import { getSessionId } from '../middleware/session.js';
import { detectIntent, generateAnswer } from '../services/aiService.js';
import { appendHistory, getHistory } from '../services/historyService.js';
import { getResources, matchResources } from '../services/resourceService.js';

const ChatSchema = z.object({
  message: z.string().min(1).max(1000),
  city: z.string().optional().default('All'),
  location: z.object({ lat: z.number(), lng: z.number() }).nullish()
});

export async function chat(req, res, next) {
  try {
    const body = ChatSchema.parse(req.body);
    const sessionId = getSessionId(req);
    const history = await getHistory(sessionId);
    const intent = await detectIntent(body.message, history);
    const city = intent.city || body.city || 'All';
    const candidates = await getResources({ city, emergency: intent.urgency === 'emergency' ? true : undefined });
    const resources = matchResources(candidates, intent, body.location);
    const answer = await generateAnswer({ message: body.message, intent, resources, history });

    await appendHistory(sessionId, [
      { role: 'user', content: body.message },
      { role: 'assistant', content: answer, resources }
    ]);

    res.json({ answer, intent, resources });
  } catch (error) {
    if (error.name === 'ZodError') error.status = 400;
    next(error);
  }
}
