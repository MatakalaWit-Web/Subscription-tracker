import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 255,
        lowercase: true,
        match: [/\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },

    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 1024,
    },
    createdAt: { type: Date, default: Date.now }
});