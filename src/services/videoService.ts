import videoDAL from '../dal/videoDAL';
import { Storage, GetSignedUrlConfig } from '@google-cloud/storage';

const storage = new Storage({ keyFilename: process.env.KEY_FILE || '' });
const bucketName = process.env.BUCKET_NAME || '';

const getSignedUrl = async (fileName: string, contentType: string) => {
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(fileName);

  const options: GetSignedUrlConfig = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType,
  };

  const [url] = await file.getSignedUrl(options);
  return url;
};

const saveMetadata = async (fileName: string, userId: number) => {
  return videoDAL.saveVideoMetadata(fileName, userId);
};

const listAllVideos = async () => {
  return videoDAL.getAllVideos();
};

export default {
  getSignedUrl,
  saveMetadata,
  listAllVideos,
};
