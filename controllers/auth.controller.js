import mongoose from "mongoose";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.medel.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne(filter: {email});

        if (existingUser) {
            const error = new Error("Email already in use");
            error.statusCode = 409;
            throw error;
        }


        //Hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await userRouter.create([{ name, email, password: hashedPassword }], { session });
        const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });


        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                user: {
                id: newUsers[0],
                token,
            },
        },
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
        


};

export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {};