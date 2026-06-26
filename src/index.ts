import express from 'express';
import subjectRoutes from './routes/subjectRoutes'; 
import studySessionRoutes from './routes/studySessionRoutes';
import authRoutes from './routes/authRoutes';
import { connectDB } from './db';
import dotenv from 'dotenv';

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

connectDB();

app.use('/subjects', subjectRoutes);
app.use('/studysessions', studySessionRoutes);
app.use('/register', authRoutes);


app.listen(PORT, () => {
    console.log(`Server runnning on path http://localhost:${PORT}`);
});