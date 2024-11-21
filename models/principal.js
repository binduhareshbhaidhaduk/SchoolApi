import mongoose, { Schema } from "mongoose";

const PrincipalSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Unique email for each principal
    password: { type: String, required: true }, // Password should be hashed
    createdAt: { type: Date, default: Date.now }
});

// Create a model using the schema
const PrincipalModel = mongoose.model('Principal', PrincipalSchema);

export default PrincipalModel;
