import { Schema, model, Document } from 'mongoose';

export interface IStudySession extends Document {
    userId: Schema.Types.ObjectId;
    subjectId: Schema.Types.ObjectId;
    topicName: string,
    duration: number,
    date: Date
}

const StudySessionSchema = new Schema<IStudySession>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        subjectId: {
            type: Schema.Types.ObjectId,
            ref: 'Subject',
            required: true
        },
        topicName: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
{ timestamps: true});

export const StudySession = model<IStudySession>('StudySession', StudySessionSchema);