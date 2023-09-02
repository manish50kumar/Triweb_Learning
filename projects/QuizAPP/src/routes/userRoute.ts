// Rediect request to particular method on controller

import express from 'express';

const router = express.Router();

import {getUser,updateUser} from '../controllers/userController';




//add a Middleware
//User should be authentice
// user should be authorize

// GET  /user/:user_id
router.get('/:userId', getUser);


//add a Middleware
//User should be authentice
// user should be authorize

// PUT /user
router.put('/', updateUser);




export default router;


