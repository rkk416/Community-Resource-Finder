import { getResources } from '../services/resourceService.js';

export async function listResources(req, res, next) {
  try {
    const resources = await getResources({
      city: req.query.city || 'All',
      categoryId: req.query.categoryId,
      emergency: req.query.emergency ? req.query.emergency === 'true' : undefined
    });
    res.json({ resources });
  } catch (error) {
    next(error);
  }
}
