import mongoose, { Schema } from 'mongoose';
const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        tags: [{ type: String, required: false }],
        authorId: { type: Schema.Types.ObjectId, required: true },
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model('Post', postSchema);
