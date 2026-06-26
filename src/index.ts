import express from 'express';
import subjectRoutes from './routes/subjectRoutes'; 
import studySessionRoutes from './routes/studySessionRoutes';
import { connectDB } from './db';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

dotenv.config({ path: "./.env" });

connectDB();

app.use('/subjects', subjectRoutes);
app.use('/studysessions', studySessionRoutes);

app.listen(PORT, () => {
    console.log(`Server runnning on path http://localhost:${PORT}`);
});