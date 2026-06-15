import express from 'express';
import { sendNotificationEmail } from '../emailService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const data = {
    ...req.body,
    submittedAt: new Date().toISOString()
  };

  await sendNotificationEmail({
    to: data.email || process.env.EMAIL_USER,
    subject: 'ActionPeak Donation Receipt',
    html: `<h2>Donation receipt</h2><p>Thank you for your donation of USD ${data.amount} to ${data.campaign || 'general support'}.</p><p>Payment method: ${data.method}</p><p>Submitted at: ${data.submittedAt}</p>`
  }).catch(() => null);

  res.status(201).json({ message: 'Donation processed successfully', data });
});

export default router;
