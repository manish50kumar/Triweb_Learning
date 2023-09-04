import express from "express";
import { body } from 'express-validator';

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, pulishQuiz } from "../controllers/quizController";
import { isAuthenticated } from "../middlewares/isAuthUser";

const router = express.Router();

// create  POST -> /quiz
router.post('/', isAuthenticated, [
    body('name').trim().not().isEmpty()
                .isLength({ min: 10 }).withMessage("please Enter a Valid Name Minimum 10 char long"),
    body('questions_list').custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast one Qestion");
        }
        return true;
    }),
    body('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Enter atleast one answer..");
        }
        return true;
    })
], createQuiz);

// get GET -> /quiz/:id
router.get('/:quizId', isAuthenticated, getQuiz);

//update PUT-> /quiz
router.put('/', isAuthenticated, [
    body('name').trim().not().isEmpty()
        .isLength({ min: 10 }).withMessage("please Enter a Valid Name Minimum 10 char long"),
    body('questions_list').custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast one Qestion");
        }
        return true;
    }),
    body('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Enter atleast one answer..");
        }
        return true;
    })
], updateQuiz);

// delete DELETE-> /quiz/:id
router.delete('/:quizId', isAuthenticated, deleteQuiz);

//publish   PATCH
router.patch('/publish', isAuthenticated, pulishQuiz);


export default router;