import { Schema, model, Document } from 'mongoose';

export interface ISubject extends Document {
    name: string,
    userId: Schema.Types.ObjectId;
    topics: { 
        topicName: string;
        isCompleted: boolean;
    }[];
    color?: string;
}

const SubjectSchema = new Schema<ISubject>({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topics: [
        {
            topicName: {type: String, required: true},
            isCompleted: { type: Boolean, default: false}
        }
    ],
    color: {
        type: String,
        default: '#3b82f6'
    }
}, {timestamps: true });

export const Subject = model<ISubject>('Subject', SubjectSchema);