import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ['user', 'assistant'], required: true },
    content: { type: String, required: true },
    resources: { type: Array, default: [] }
  },
  { _id: false, timestamps: true }
);

const ChatHistorySchema = new mongoose.Schema(
  {
    sessionId: { type: String, index: true, required: true },
    messages: { type: [MessageSchema], default: [] }
  },
  { timestamps: true }
);

export const ChatHistory = mongoose.models.ChatHistory || mongoose.model('ChatHistory', ChatHistorySchema);
