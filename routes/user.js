import express from 'express';

const user=express.Router();

user.post('/management',managementCon)