import { Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document{
    email: string,
    password: string
}

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    } 
})

UserSchema.pre('save', async function (this: IUser) {
    if (!this.isModified('password')) {
        return;
    }

    const plainPassword = String(this.password).valueOf();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(plainPassword, salt);
});

export const User = model<IUser>('User', UserSchema);