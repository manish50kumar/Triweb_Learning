// Rediect request to particular method on controller

import express from 'express';
import { body } from 'express-validator';

const router = express.Router();

import {registerUser,loginUser,isEmailExist} from '../controllers/authController';
import ProjectError from '../helper/error';

// POST  /auth
router.post('/', [
    body('name').trim().not().isEmpty().isLength({ min: 4 }).withMessage("please Enter a Valid Name Minimum 4 char long"),
    body('email').trim().isEmail()
                .custom(emailId => {
                    return isEmailExist(emailId)
                        .then((status) => { 
                            if (status) {
                                return Promise.reject("User already exist!!");
                                // const err = new ProjectError("User already exist!!");
                                // err.statusCode = 422;
                                // throw err;
                            }
                            
                        })
                        .catch((err) => {
                            return Promise.reject(err);
                       })
                }).normalizeEmail()
], registerUser);

// POST  /auth/login
router.post('/login', loginUser);

export default router;