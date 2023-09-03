import express from "express";

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, pulishQuiz } from "../controllers/quizController";
import { isAuthenticated } from "../middlewares/isAuthUser";

const router = express.Router();

// create  POST -> /quiz
router.post('/', isAuthenticated, createQuiz);

// get GET -> /quiz/:id
router.get('/:quizId', isAuthenticated, getQuiz);

//update PUT-> /quiz
router.put('/', isAuthenticated, updateQuiz);

// delete DELETE-> /quiz/:id
router.delete('/:quizId', isAuthenticated, deleteQuiz);

//publish   PATCH
router.patch('/publish', isAuthenticated, pulishQuiz);


export default router;