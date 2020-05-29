import mongoose from 'mongoose';

export interface IComment extends mongoose.Document {
    message: string;
    id: string;
}
