import mongoose from 'mongoose';

export async function connectDatabase() {
  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI not set. Running with JSON-backed resources and volatile history.');
    return null;
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
    return mongoose.connection;
  } catch (error) {
    console.warn(`MongoDB unavailable. Falling back to JSON resources and volatile history. Reason: ${error.code || error.message}`);
    return null;
  }
}
