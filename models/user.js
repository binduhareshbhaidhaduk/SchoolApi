import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Password should be hashed
    role: { type: String, enum: ['TopManagement', 'Principal', 'Faculty', 'student'] },
    createdAt: { type: Date, default: Date.now }
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;
