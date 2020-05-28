import mongoose, { Schema } from 'mongoose';
import { commentSchema } from './Comment';
const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        tags: [{ type: String, required: false }],
        comments: {
            type: [commentSchema],
            required: false,
        },
        id: { type: Schema.Types.ObjectId, required: true },
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model('Post', postSchema);
