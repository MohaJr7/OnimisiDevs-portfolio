import mongoose from "mongoose";

// 1. Get your "Phone Number" (Connection String) from the secret .env file
const MONGODB_URI = process.env.MONGODB_URI;

// 2. If the number is missing, stop everything and tell the developer
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

/** * 3. THE CACHE: Next.js restarts frequently during development. 
 * Without this "cached" logic, your app would open a new connection 
 * every time you save a file, which eventually crashes MongoDB.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // If we are already connected, just return the existing connection
  if (cached.conn) {
    return cached.conn;
  }

  // If we aren't connected, start the connection process
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Don't wait for things to happen if the connection is down
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ New MongoDB connection established");
      return mongoose;
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

export default connectDB;