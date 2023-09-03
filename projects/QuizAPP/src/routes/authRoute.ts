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
                }).normalizeEmail(),
    body('password').trim().isLength({ min: 8 }).withMessage("Enter Password Atleast 8 char long"),
    body('confirm_password').trim()
                            .custom((value, { req }) => {
                                if (value != req.body.password) {
                                    return Promise.reject("Confirm Password not match");
                                }
                                return true;
                            })
], registerUser);

// POST  /auth/login
router.post('/login', loginUser);

export default router;