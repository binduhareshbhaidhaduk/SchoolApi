import mongoose, { Schema } from "mongoose";

const FacultySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    principal_id: { type: Schema.Types.ObjectId, ref: 'Principal', required: true }, // Link to Principal
    createdAt: { type: Date, default: Date.now }
});

const FacultyModel = mongoose.model('Faculty', FacultySchema);

export default FacultyModel;
