import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
    name: { type: String, required: true },
    faculty_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Assigned faculty
    principal_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Assigned principal
    createdAt: { type: Date, default: Date.now }
});

const studentModel= mongoose.model('Student', StudentSchema);

export default studentModel
