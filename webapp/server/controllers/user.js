import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config

import User from '../models/user.js';

export const signin = async (req, res) => {
    const { user, pass } = req.body;
    const SECRET_KEY = process.env.JWTKEY;
    try {
        const existingUser = await User.findOne({ user });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist."});

        const isPassCorrect = await bcrypt.compare(pass, existingUser.pass);
        if (!isPassCorrect) return res.status(400).json({ message: "Invalid credentials"});

        const token = jwt.sign({ user: existingUser.user, id: existingUser._id }, SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong."});
    }
}

export const signup = async (req, res) => {
    const SALT = process.env.SALTKEY;
    const { user, pass } = req.body;
    try {
        const existingUser = await User.findOne({ user });
        if (existingUser) return res.status(400).json({ message: "User already exists."})
        const hashedPassword = await bcrypt.hash(pass, SALT);

        const result = await User.create({ user: user, pass: hashedPassword });
        const token = jwt.sign({ user: result.user, id: result._id }, 'test', { expiresIn: "1h" });
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong."});
    }
}
