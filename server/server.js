import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDatabase } from './config/db.js';
import chatRoutes from './routes/chatRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import historyRoutes from './routes/historyRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'community-resource-finder-api' });
});

app.use('/api/chat', chatRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Stop the existing backend process or set a different PORT in server/.env.`);
    process.exit(1);
  }
  console.error(error);
  process.exit(1);
});

await connectDatabase();
