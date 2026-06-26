import { Schema, model, Document } from 'mongoose';

export interface IStudySession extends Document {
    subjectId: Schema.Types.ObjectId,
    duration: number,
    notes: string,
    createdAt: Date;
}

const StudySessionSchema = new Schema<IStudySession>({
    subjectId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Subject'
    },
    duration: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const StudySession = model<IStudySession>('StudySession', StudySessionSchema);