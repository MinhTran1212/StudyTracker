import mongoose from 'mongoose';
import { User } from '../models/User';
import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/auth', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const newUser = await User.create({
            email,
            password
        });

        const secretKey = process.env.JWT_SECRET;

        if (!secretKey){ throw new Error('JWT_SECRET is not defined'); } 

        const token = jwt.sign(
            { userId: newUser._id },
            secretKey,
            { expiresIn: '7d'}
        );

        res.status(201).json({message: "Login succesfully!", token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Registeration failed."})
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send('User deleted successfully');
    } catch (error){
        res.status(500).send(error);
    }
});

router.get('/users', async (req, res) => {
    const users = await User.find().select("id email");
    res.status(500).json(users);
});

export default router;
