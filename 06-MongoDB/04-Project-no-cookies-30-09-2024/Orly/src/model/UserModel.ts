import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});

export const UserModel = mongoose.model('User', userSchema)