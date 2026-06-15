import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendNotificationEmail } from '../emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, '../uploads');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('evidence'), async (req, res) => {
  const data = {
    ...req.body,
    evidence: req.file?.filename || null,
    submittedAt: new Date().toISOString()
  };

  await sendNotificationEmail({
    to: process.env.EMAIL_USER,
    subject: 'New GBV Case Report Submitted',
    html: `<h2>New case report</h2><p><strong>Type:</strong> ${data.incidentType || data.title}</p><p><strong>Severity:</strong> ${data.severity || data.emergencyLevel}</p><p><strong>Location:</strong> ${data.location || ''}</p><p><strong>Contact:</strong> ${data.contactInfo || data.contact || ''}</p><p><strong>Submitted:</strong> ${data.submittedAt}</p>`
  }).catch(() => null);

  res.status(201).json({ message: 'Report submitted successfully', data });
});

export default router;
