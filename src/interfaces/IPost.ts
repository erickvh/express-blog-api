import mongoose from 'mongoose';
import { IComment } from './IComment';

export interface IPost extends mongoose.Document {
    title: string;
    content: string;
    comments: IComment[];
    tags: string[];
}
