import express from 'express';
import videoController from '../controllers/videoController';

const router = express.Router();

router.post('/upload-url', videoController.getUploadUrl);
router.post('/', videoController.saveVideoMetadata);
router.get('/', videoController.listVideos); // Endpoint to list all videos

export default router;
