import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb://localhost:27017/jybek-homecare';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  seeded: boolean;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null, seeded: false };

if (!global.mongoose) {
  global.mongoose = cached;
}

// Auto-seed admin on first connection
async function seedAdmin() {
  if (cached.seeded) return;
  
  try {
    // Dynamic import to avoid circular dependency
    const { default: Admin } = await import('./models/Admin');
    
    const existingAdmin = await Admin.findOne({ email: 'admin@jybekhomecares.com' });
    
    if (!existingAdmin) {
      await Admin.create({
        email: 'admin@jybekhomecares.com',
        password: 'JybekAdmin2024!',
        name: 'Jybek Admin',
        role: 'super_admin',
      });
      console.log('✅ Default admin account created');
    }
    
    cached.seeded = true;
  } catch (error) {
    console.error('Failed to seed admin:', error);
  }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(async (mongoose) => {
      console.log('✅ Connected to MongoDB');
      // Auto-seed admin after connection
      await seedAdmin();
      return mongoose;
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      cached.promise = null;
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;

