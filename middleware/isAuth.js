import userModel from "../models/user.js";
import jwt from 'jsonwebtoken';

// Middleware to authenticate and verify the role
// export function authenticateToken(roles) {
//     return (req, res, next) => {
//         const user = req.user; // Assuming user info is added by JWT middleware
//         if (!user || !roles.includes(user.role)) {
//             return res.status(403).json('Access denied.');
//         }
//         next();
//     };
// }
export const authenticateToken = (roles) => (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token,process.env.SECRET_KEY , (err, decoded) => {
        if (err || !roles.includes(decoded.role)) return res.status(403).json({ message: 'Forbidden' });
        else {

            req.user = decoded;
            res.status(200).json({message: "we are best friends"})
            console.log("done",req.user)
        }
        next();
    });
};


// const authenticateToken = (req, res, next) => {
//     // Check if req is defined
//     if (!req) {
//         return res.status(500).send('Request object is undefined');
//     }
//     console.log('Request headers:', req.headers); 
//     // Extract token from the authorization header
//     const token = req.headers['authorization']?.split(' ')[1];

//     if (!token) return res.sendStatus(401); // Unauthorized

//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//         if (err) return res.sendStatus(403); // Forbidden
//         req.user = user; // Save user info for further use
//         next(); // Proceed to the next middleware or route handler
//     });
// };


export default authenticateToken;

