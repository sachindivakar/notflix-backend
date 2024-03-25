// Assume a function like this exists for database interaction
import db from '../data/db'; // db would be your database connection or ORM

const saveVideoMetadata = async (fileName: string, userId: number) => {
  const video = {
    fileName,
    userId,
    uploadDate: new Date(),
  };

  // Save video metadata in the database
  const result = await db('videos').insert(video).returning('*');
  return result;
};

const getAllVideos = async () => {
  return db('videos').select('*');
};

export default {
  saveVideoMetadata,
  getAllVideos,
};
