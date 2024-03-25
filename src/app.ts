import express from 'express';

import { errorHandler } from './utils/errorHandler';
import routes from './routes';

// Initialize express app
const app = express();

// Middleware setup
app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

export default app;
