import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { connectDatabase } from './config/db.js';
import chatRoutes from './routes/chatRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import historyRoutes from './routes/historyRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const app = express();
const port = process.env.PORT || 8080;

// ── Security & middleware ──────────────────────────────────────────────────────
// In production, the client is served from the same origin so CORS is relaxed.
app.use(helmet({
  // Allow inline scripts/styles from Vite build & Google Fonts
  contentSecurityPolicy: false,
}));

if (!isProd) {
  // Dev: allow Vite dev server on localhost
  app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
} else {
  // Prod: restrict to the configured client origin (if set) or allow same-origin only
  const allowedOrigin = process.env.CLIENT_ORIGIN;
  app.use(cors(allowedOrigin ? { origin: allowedOrigin } : false));
}

app.use(express.json({ limit: '1mb' }));
app.use(morgan(isProd ? 'combined' : 'dev'));

// ── Static client (production only) ───────────────────────────────────────────
if (isProd) {
  const clientDist = path.resolve(__dirname, '../client/dist');
  app.use(express.static(clientDist, { maxAge: '7d', etag: true }));
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'community-resource-finder-api' });
});

app.use('/api/chat', chatRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/auth', authRoutes);

// ── SPA fallback (production) — must be AFTER API routes ──────────────────────
// React Router handles its own routing; any non-API GET returns index.html.
if (isProd) {
  const clientDist = path.resolve(__dirname, '../client/dist');
  app.get('*', (_req, res) =>
    res.sendFile(path.join(clientDist, 'index.html'))
  );
}

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
