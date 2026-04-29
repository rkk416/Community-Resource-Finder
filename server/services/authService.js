import crypto from 'node:crypto';
import mongoose from 'mongoose';
import { User } from '../models/User.js';

const demoUsers = new Map();

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':');
  const candidate = hashPassword(password, salt).split(':')[1];
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(candidate, 'hex'));
}

export async function registerUser({ name, email, password }) {
  const passwordHash = hashPassword(password);
  if (mongoose.connection.readyState === 1) {
    try {
      const user = await User.create({ name, email, passwordHash });
      return { id: user.id, name: user.name, email: user.email };
    } catch (error) {
      if (error.code === 11000) {
        const err = new Error('An account with this email already exists');
        err.status = 409;
        throw err;
      }
      throw error;
    }
  }
  if (demoUsers.has(email.toLowerCase())) {
    const err = new Error('An account with this email already exists');
    err.status = 409;
    throw err;
  }
  demoUsers.set(email.toLowerCase(), { id: crypto.randomUUID(), name, email, passwordHash });
  const user = demoUsers.get(email.toLowerCase());
  return { id: user.id, name: user.name, email: user.email };
}

export async function loginUser({ email, password }) {
  const user =
    mongoose.connection.readyState === 1
      ? await User.findOne({ email: email.toLowerCase() }).lean()
      : demoUsers.get(email.toLowerCase());

  if (!user || !verifyPassword(password, user.passwordHash)) {
    const error = new Error('Invalid email or password');
    error.status = 401;
    throw error;
  }

  return {
    user: { id: String(user._id || user.id), name: user.name, email: user.email },
    token: crypto.randomUUID()
  };
}
