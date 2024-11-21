import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userModel from '../models/user.js';

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found.');
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials.');
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, name: user.name, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Log the token (optional, be cautious in production)
        console.log('Generated JWT token:', token);
        
        // Send the token in a JSON response
        res.json({ token });  // Returning as an object for clarity
    } catch (error) {
        console.error('Error logging in:', error); // Log the error
        res.status(500).send('Error logging in.');
    }
};

export default loginUser;
