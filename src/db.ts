import mongoose from 'mongoose';

export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log(`Successfully connected to mongodb`);
    } catch (error){
        console.log(`Failed to process db`);
        console.error(error);
        process.exit(1);
    }
}