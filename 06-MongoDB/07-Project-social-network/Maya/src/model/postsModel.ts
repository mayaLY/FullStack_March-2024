import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model('Post', postSchema);
