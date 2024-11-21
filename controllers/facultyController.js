// controllers/principalController.js
import FacultyModel from '../models/faculty.js';


// Get all faculty members
const getAllFaculty = async (req, res) => {
    try {
        const faculty = await FacultyModel.find({ principalId: req.user._id });
        res.status(200).json(faculty);
    } catch (error) {
        console.error('Error fetching faculty:', error);
        res.status(500).send('Error fetching faculty.');
    }
};

// Add a new faculty member
const addFaculty = async (req, res) => {
    
    try {
        const { name, email, subject } = req.body;
        const newFaculty = new FacultyModel({ name, email, subject, principalId: req.user._id });
        await newFaculty.save();
        res.status(201).send('Faculty member added successfully.');
    } catch (error) {
        console.error('Error adding faculty:', error);
        res.status(500).send('Error adding faculty.');
    }
};

// Update a faculty member
const updateFaculty = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { name, email, subject } = req.body;
        await FacultyModel.findByIdAndUpdate(id, { name, email, subject });
        res.status(200).send('Faculty member updated successfully.');
    } catch (error) {
        console.error('Error updating faculty:', error);
        res.status(500).send('Error updating faculty.');
    }
};

// Delete a faculty member
const deleteFaculty = async (req, res) => {
    
    try {
        const { id } = req.params;
        await FacultyModel.findByIdAndDelete(id);
        res.status(200).send('Faculty member deleted successfully.');
    } catch (error) {
        console.error('Error deleting faculty:', error);
        res.status(500).send('Error deleting faculty.');
    }
};

// Exporting all functions
export default {
    getAllFaculty,
    addFaculty,
    updateFaculty,
    deleteFaculty,
};
