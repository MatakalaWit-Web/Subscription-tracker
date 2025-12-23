import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Please define the DB_URI environment variable inside .env file<deveplopment.production>.local");
}

// MongoDB connection

const connectToDatabase = async () => {
    try {

        await mongoose.connect(DB_URI);
        console.log(`MongoDB connected successfully in ${NODE_ENV} mode.`);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }

}

export default connectToDatabase;