import { Router } from 'express';
import videoRouter from './videoRouter';

const router = Router();

router.use('/videos', videoRouter);

export default router;
