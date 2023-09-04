import express from "express";

import { startExam, submitExam } from "../controllers/examCotroller";
import { isAuthenticated } from "../middlewares/isAuthUser";

const router = express.Router();

//GET -> /exam/quizId
router.get('/:quizId',isAuthenticated, startExam);


//POST -> /exam
router.post('/',isAuthenticated, submitExam);

export default router;