import { Request, Response } from 'express';
import videoService from '../services/videoService';

const getUploadUrl = async (req: Request, res: Response) => {
  const { fileName, contentType } = req.body;

  try {
    const url = await videoService.getSignedUrl(fileName, contentType);
    res.json({ url });
  } catch (error) {
    console.error('Error generating signed URL', error);
    res.status(500).send('Internal Server Error');
  }
};

const saveVideoMetadata = async (req: Request, res: Response) => {
  const { fileName, userId } = req.body;

  try {
    const result = await videoService.saveMetadata(fileName, userId);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving video metadata', error);
    res.status(500).send('Internal Server Error');
  }
};

const listVideos = async (_req: Request, res: Response) => {
  try {
    const videos = await videoService.listAllVideos();
    res.json(videos);
  } catch (error) {
    console.error('Error listing videos', error);
    res.status(500).send('Internal Server Error');
  }
};

export default {
  getUploadUrl,
  saveVideoMetadata,
  listVideos,
};
