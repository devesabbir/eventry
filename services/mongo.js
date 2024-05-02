import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URI;

if (!DATABASE_URL) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useUnifiedTopology: true,
      connectTimeoutMS: 20000, // Increased timeout to 20 seconds
    };
    cached.promise = mongoose.connect(DATABASE_URL, options).then((mongse) => {
      return mongse;
    });
  }
  cached.conn = await cached.promise;
  console.log("Mongoose connection established successfully.");
  return cached.conn;
}

export default connectDB;
