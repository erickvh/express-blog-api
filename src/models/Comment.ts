import mongoose, { Schema } from 'mongoose';

export const commentSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        id: { type: Schema.Types.ObjectId, required: true },
    },
    {
        timestamps: true,
    }
);

export const Comment = mongoose.model('Comment', commentSchema);
