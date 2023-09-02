// Rediect request to particular method on controller

import express from 'express';

const router = express.Router();

import {registerUser,loginUser} from '../controllers/authController';

// POST  /auth
router.post('/', registerUser);

// POST  /auth/login
router.post('/login', loginUser);

export default router;