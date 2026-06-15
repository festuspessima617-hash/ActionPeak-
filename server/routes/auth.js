import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
const users = [];

router.post('/register', async (req, res) => {
  const { email, password, role = 'Survivor', fullName } = req.body;
  const existing = users.find((user) => user.email === email.toLowerCase());
  if (existing) return res.status(409).json({ message: 'Email already registered' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email: email.toLowerCase(), fullName, role, password: hashedPassword };
  users.push(user);

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'actionpeak_secret', {
    expiresIn: '7d'
  });

  res.status(201).json({ message: 'User registered', token, user: { id: user.id, email: user.email, role: user.role } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((item) => item.email === email.toLowerCase());
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'actionpeak_secret', {
    expiresIn: '7d'
  });

  res.json({ message: 'Login successful', token, user: { id: user.id, email: user.email, role: user.role } });
});

export default router;
