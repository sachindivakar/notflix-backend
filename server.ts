import http from 'http';
import app from './src/app'; // Import the express app

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('process.env', process.env);
  console.log(`Server is running on http://localhost:${PORT}`);
});
