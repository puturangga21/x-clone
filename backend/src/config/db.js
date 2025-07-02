import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('MONGODB connected successfully');
  } catch (error) {
    console.log('Error connecting to the MONGODB');
    process.exit(1);
  }
};
