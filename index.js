import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import route from './routes/routes.js'; 
import db  from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const Port = 2000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session management
app.use(session({
    secret: 'mySecret', // Change this to a more secure secret in production
    resave: false, // Do not resave session if unmodified
    saveUninitialized: true // Save new sessions that are uninitialized
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', route);

// Start the server
app.listen(Port, (err) => {
    if (!err) {
        console.log(`Server is running on http://localhost:${Port}`); // Fixed logging to use : instead of /
    } else {
        console.error('Error starting the server:', err);
    }
});
