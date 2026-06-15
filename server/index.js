import fs from 'fs';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import reportRouter from './routes/report.js';
import volunteerRouter from './routes/volunteer.js';
import donateRouter from './routes/donate.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const uploadsPath = './server/uploads';
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

app.use(cors({ origin: ['http://localhost:4173'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false
});

app.use(limiter);
app.use('/api/auth', authRouter);
app.use('/api/report', reportRouter);
app.use('/api/volunteer', volunteerRouter);
app.use('/api/donate', donateRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ActionPeak API is live' });
});

app.listen(PORT, () => {
  console.log(`ActionPeak server listening on http://localhost:${PORT}`);
});
