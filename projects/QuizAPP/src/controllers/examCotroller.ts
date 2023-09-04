
import { NextFunction, Request, Response } from "express";

import Quiz from "../models/quizModel";
import Report from "../models/reportModel";
import ProjectError from "../helper/error";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}

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

        const resp: ReturnResponse = { status: "success", message: "Exam start", data: quiz };

        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
} 

const submitExam =async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body.quizId;
        const attempted_question = req.body.attempted_question;

        const quiz = await Quiz.findById(quizId, { answers: 1,is_published:1 });
        const answers = quiz?.answers;
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

        // check result and calculate 
        const userId = req.userId;
        const allQuestions = Object.keys(answers)
        const total = allQuestions.length;
        let score = 0;

        for (let i = 0; i < total; i++){
            let question_number = allQuestions[i];
            if (!!attempted_question[question_number] && answers[question_number] == attempted_question[question_number]) {
                score = score + 1;
            }
        }

        const report = new Report({ userId, quizId, score, total });
        const data = await report.save();
        if (!data) {
            const err = new ProjectError("Data not Saved Successfullly");
            err.statusCode = 404;
            throw err;
        }

        const resp: ReturnResponse = { status: "success", message: "Quiz Submitted Successfully", data: { total, score, resultId: data._id } };

        res.status(200).send(resp);

        
    }
    catch (error) {
        next(error);
    }
}

export { startExam, submitExam };

