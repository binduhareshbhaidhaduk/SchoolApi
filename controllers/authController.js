import bcrypt from 'bcrypt';
import userModel from '../models/user.js';

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists.');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const user = new userModel({ name, email, password: hashedPassword, role });
        await user.save();

        res.status(201).json({
            message: 'User registered successfully!',
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error) {
        console.error('Error during user registration:', error); // Log the actual error
        res.status(500).send('Error registering user.');
    }
};

export default registerUser;
