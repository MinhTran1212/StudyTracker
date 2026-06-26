import mongoose from 'mongoose';
import { StudySession } from '../models/StudySession';
import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { subjectId, duration, notes } = req.body;

        const convertedDuration = Number(duration);

        if (isNaN(duration) || duration < 0){
            return res.status(404).json({Error: "Duration can not be negative."});
        }

        const newSession = await StudySession.create({
            subjectId,
            duration: convertedDuration,
            notes
        });

        res.status(201).json(newSession);
    } catch (error){ 
        console.error(error);
        res.status(500).send("Failed to log sessions");
    }
})

router.get('/', async (req, res) => {
    try {
        const sessions = await StudySession.find().select("subjectId duration notes createdAt");

        res.status(201).json(sessions);
    } catch (error){
        console.error(error);
        res.status(500).send("Failed to get sessions");
    }
})

export default router;