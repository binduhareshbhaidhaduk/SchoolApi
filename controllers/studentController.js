import StudentModel from '../models/student.js';

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await StudentModel.find().populate('faculty_id').populate('principal_id');
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).send('Error fetching students.');
    }
};

// Add a new student
const addStudent = async (req, res) => {
    
    try {
        const { name, faculty_id, principal_id } = req.body;
        const newStudent = new StudentModel({ name, faculty_id, principal_id });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).send('Error adding student.');
    }
};

// Update a student
const updateStudent = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { name, faculty_id, principal_id } = req.body;
        const updatedStudent = await StudentModel.findByIdAndUpdate(id, { name, faculty_id, principal_id }, { new: true });
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).send('Error updating student.');
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    
    try {
        const { id } = req.params;
        await StudentModel.findByIdAndDelete(id);
        res.status(200).send('Student deleted successfully.');
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).send('Error deleting student.');
    }
};

export default  {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent
}

