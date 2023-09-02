// Rediect request to particular method on controller

import express from 'express';

const router = express.Router();

import {registerUser,getUser,updateUser} from '../controllers/userController';

// POST  /user
router.post('/', registerUser);



// GET  /user/:user_id
router.get('/:userId', getUser);

// PUT /user
router.put('/', updateUser);


export default router;


