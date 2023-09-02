// Rediect request to particular method on controller

import express from 'express';

const router = express.Router();

import { getUser, updateUser } from '../controllers/userController';

import { isAuthenticated } from '../middlewares/isAuthUser';




//add a Middleware
//User should be authentice
// user should be authorize

// GET  /user/:user_id
router.get('/:userId', isAuthenticated, getUser);


//add a Middleware
//User should be authentice
// user should be authorize

// PUT /user
router.put('/',isAuthenticated, updateUser);




export default router;


