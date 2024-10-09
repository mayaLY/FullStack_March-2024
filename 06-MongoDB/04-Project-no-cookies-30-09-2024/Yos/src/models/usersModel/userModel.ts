import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart : [ { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } ]
});

const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);

export default User;