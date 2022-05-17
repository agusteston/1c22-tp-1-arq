import { Router } from 'express';
import PingControler from './PingController.js';

const router = Router();

const pingControler = new PingControler();

router.get('/node/ping', (req, res) => {
  pingControler.ping(req, res)
});

export default router;
