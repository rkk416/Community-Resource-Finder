import { Router } from 'express';
import { listHistory, storeHistory } from '../controllers/historyController.js';

const router = Router();
router.get('/', listHistory);
router.post('/', storeHistory);

export default router;
