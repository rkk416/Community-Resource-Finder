import mongoose from 'mongoose';
import { ChatHistory } from '../models/ChatHistory.js';

const memoryStore = new Map();

export async function getHistory(sessionId) {
  if (mongoose.connection.readyState === 1) {
    const doc = await ChatHistory.findOne({ sessionId }).lean();
    return doc?.messages || [];
  }
  return memoryStore.get(sessionId) || [];
}

export async function appendHistory(sessionId, messages) {
  if (mongoose.connection.readyState === 1) {
    await ChatHistory.findOneAndUpdate(
      { sessionId },
      { $push: { messages: { $each: messages } } },
      { upsert: true, new: true }
    );
    return;
  }
  const current = memoryStore.get(sessionId) || [];
  memoryStore.set(sessionId, [...current, ...messages].slice(-30));
}
