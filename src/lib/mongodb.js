import mongoose from "mongoose";

// import dns from 'node:dns';


// if (typeof window === 'undefined') {
//   dns.setServers(['1.1.1.1', '8.8.8.8']);
// }

const MONGODB_URI = process.env.MONGODB_URI;
const GENERIC_DB_ERROR = "Unable to connect to MongoDB.";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside your .env file."
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  // 1. Return the existing connection if it's already established
  if (cached.conn) {
    return cached.conn;
  }

  // 2. If no connection promise exists, create a new one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // The modern MongoDB driver handles retries and server selection robustly
      maxPoolSize: 10, 
      serverSelectionTimeoutMS: 5000, // Fail fast (5s) if DNS or network is down
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("=> Successfully connected to MongoDB.");
        return mongooseInstance.connection;
      })
      .catch((error) => {
        cached.promise = null; // Reset cache on failure so subsequent requests can retry
        console.error("MongoDB connection error details:", error);
        throw new Error(GENERIC_DB_ERROR);
      });
  }

  // 3. Await and cache the connection instance
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}




// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable in your environment."
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(MONGODB_URI, {
//         bufferCommands: false,
//       })
//       .then((mongooseInstance) => mongooseInstance);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }


