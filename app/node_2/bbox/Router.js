import { Router } from 'express';
import BboxController from './BboxController.js';

const router = Router();

const bboxController = new BboxController();

router.get('/node/bbox-one', (req, res) => {
    bboxController.bBoxOne(req, res)
});

router.get('/node/bbox-two', (req, res) => {
    bboxController.bBoxTwo(req, res)
});

export default router;