
import { NextFunction, Request, Response } from "express";

import Quiz from "../models/quizModel";
import ProjectError from "../helper/error";

const startExam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId,{name:1,questions_list:1,is_published:1});

        if (!quiz) {
            const err = new ProjectError("No Quiz found..");
            err.statusCode = 404;
            throw err;
        }
        if (!quiz.is_published) {
            const err = new ProjectError("Quiz not published Now ");
            err.statusCode = 405;
            throw err;
        }
        res.send(quiz);
    }
    catch (error) {
        next(error);
    }
} 

const submitExam =async (req: Request, res: Response, next: NextFunction) => {
    const quizId = req.body.quizId;
    const attempted_question = req.body.attempted_question;

    const quiz = await Quiz.findById(quizId, { answers: 1 });
    const answers = quiz?.answers;
    res.send(answers);
}

export { startExam, submitExam };

