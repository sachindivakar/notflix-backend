import request from 'supertest';
import app from '../../src/app'; // Adjust the path to import your Express app

describe('Videos API', () => {
  describe('POST /videos/upload-url', () => {
    it('should generate a signed URL', async () => {
      const res = await request(app)
        .post('/api/videos/upload-url')
        .send({ fileName: 'test.mp4', contentType: 'video/mp4' });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('url');
      expect(res.body.url).toBe('http://mockedurl.com');
    });

    // Add more test cases as necessary
  });

  describe('GET /videos', () => {
    it('should retrieve all videos', async () => {
      // Mock database response
      // Assuming you have a service or DAL to mock
      // videoDAL.getAllVideos.mockResolvedValue([{ id: 1, name: 'Test Video' }]);

      const res = await request(app).get('/api/videos');

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      // expect(res.body).toEqual([{ id: 1, name: 'Test Video' }]);
    });

    // Add more test cases as necessary
  });
});
