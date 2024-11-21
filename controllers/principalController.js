import PrincipalModel from '../models/principal.js';

// Get all principals
const getAllPrincipals = async (req, res) => {
    try {
        const principals = await PrincipalModel.find();
        res.status(200).json(principals);
    } catch (error) {
        console.error('Error fetching principals:', error);
        res.status(500).send('Error fetching principals.');
    }
};

// Get a principal by ID
const getPrincipalById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const principal = await PrincipalModel.findById(id);
        if (!principal) {
            return res.status(404).send('Principal not found.');
        }
        res.status(200).json(principal);
    } catch (error) {
        console.error('Error fetching principal:', error);
        res.status(500).send('Error fetching principal.');
    }
};

// Add a new principal
const addPrincipal = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newPrincipal = new PrincipalModel({ name, email, password: hashedPassword });
        await newPrincipal.save();
        res.status(201).json(newPrincipal);
    } catch (error) {
        console.error('Error adding principal:', error);
        res.status(500).send('Error adding principal.');
    }
};

// Update a principal
const updatePrincipal = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updatedPrincipal = await PrincipalModel.findByIdAndUpdate(id, { name, email, password }, { new: true });
        if (!updatedPrincipal) {
            return res.status(404).send('Principal not found.');
        }
        res.status(200).json(updatedPrincipal);
    } catch (error) {
        console.error('Error updating principal:', error);
        res.status(500).send('Error updating principal.');
    }
};

// Delete a principal
const deletePrincipal = async (req, res) => {
    
    try {
        const { id } = req.params;
        const deletedPrincipal = await PrincipalModel.findByIdAndDelete(id);
        if (!deletedPrincipal) {
            return res.status(404).send('Principal not found.');
        }
        res.status(200).send('Principal deleted successfully.');
    } catch (error) {
        console.error('Error deleting principal:', error);
        res.status(500).send('Error deleting principal.');
    }
};


export default {
    getAllPrincipals,
    getPrincipalById,
    addPrincipal,
    updatePrincipal,
    deletePrincipal
}