import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    // picture: { type: String }
});

export const Post = mongoose.model('Post', PostSchema)