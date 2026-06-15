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

router.post('/', upload.single('cv'), async (req, res) => {
  const data = {
    ...req.body,
    cv: req.file?.filename || null,
    submittedAt: new Date().toISOString()
  };

  await sendNotificationEmail({
    to: process.env.EMAIL_USER,
    subject: 'New Volunteer Application',
    html: `<h2>New volunteer request</h2><p><strong>Name:</strong> ${data.fullName}</p><p><strong>Region:</strong> ${data.region}</p><p><strong>Skills:</strong> ${data.skills}</p><p><strong>Submitted:</strong> ${data.submittedAt}</p>`
  }).catch(() => null);

  res.status(201).json({ message: 'Volunteer application received', data });
});

export default router;
