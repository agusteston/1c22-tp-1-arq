import { Router } from 'express';
import IntensiveAlgorithmController from './IntensiveAlgorithmController.js';

const router = Router();

const intensiveAlgorithmController = new IntensiveAlgorithmController();

router.get('/node/intensive', (req, res) => {
    intensiveAlgorithmController.getCalculation(req, res)
});

export default router;