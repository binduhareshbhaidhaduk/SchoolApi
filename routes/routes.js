import express from  'express';
import  loginUser  from '../controllers/logIn.js';
import authenticateToken from '../middleware/isAuth.js';
import  registerUser  from '../controllers/authController.js';
import principalController from '../controllers/principalController.js';
import studentController from '../controllers/studentController.js';
import facultyController from '../controllers/facultyController.js';

const routes  = express.Router();

routes.post('/register', registerUser);
routes.post('/login', loginUser)


routes.get('/principal', authenticateToken(["TopManagement"]), principalController.getAllPrincipals);
routes.get('/principal', authenticateToken(["TopManagement"]), principalController.getPrincipalById);
routes.post('/principal', authenticateToken(["TopManagement"]), principalController.addPrincipal);
routes.put('/principal', authenticateToken(["TopManagement"]), principalController.updatePrincipal);
routes.delete('/principal/:id', authenticateToken(["TopManagement"])    , principalController.deletePrincipal);


routes.get('/students', authenticateToken(["TopManagement","Principal","Faculty"]), studentController.getAllStudents);
routes.post('/students', authenticateToken(["TopManagement","Principal","Faculty"]), studentController.addStudent);
routes.put('/students/:id', authenticateToken(["TopManagement","Principal","Faculty"]), studentController.updateStudent);
routes.delete('/students/:id', authenticateToken(["TopManagement","Principal","Faculty"]), studentController.deleteStudent);

// Faculty routes
routes.get('/faculty', authenticateToken(["TopManagement","Principal"]), facultyController.getAllFaculty);
routes.post('/faculty', authenticateToken(["TopManagement","Principal"]), facultyController.addFaculty);
routes.put('/faculty/:id', authenticateToken(["TopManagement","Principal"]), facultyController.updateFaculty);
routes.delete('/faculty/:id', authenticateToken(["TopManagement","Principal"]), facultyController.deleteFaculty);

// routes.use('/api',)

export default routes;