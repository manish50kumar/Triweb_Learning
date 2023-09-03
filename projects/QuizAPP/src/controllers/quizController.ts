// to send/ receive data from model

import { Request, Response,NextFunction } from "express";
import Quiz from "../models/quizModel";
import ProjectError from "../helper/error";

interface ReturnResponse{
    status: "success" | "error",
    message: String,
    data:{}|[]
}

const createQuiz = async (req: Request, res:Response, next:NextFunction) => {
    try {
        const created_by = req.userId;

        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answers = req.body.answers;


        const quiz = new Quiz({ name, questions_list, answers, created_by });
        const result = await quiz.save();

        const resp: ReturnResponse = { status: "success", message: "Quiz created successfully", data: { quizId: result._id } };

        res.status(201).send(resp);
    }
    catch (error) {
        next(error);
    }
}
const getQuiz = async  (req: Request, res: Response,next:NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId,{name:1,questions_list:1,answers:1,created_by:1});
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized to get Quiz");
            err.statusCode = 403;
            throw err;
        }

        const resp: ReturnResponse = { status: "success", message: "Quiz Get successfully", data: { quiz } };

        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
    
}
const updateQuiz = async (req: Request, res: Response,next:NextFunction) => { 
    try {
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized to get Quiz");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.is_published) {
            const err = new ProjectError("You Can not update pblished Quiz");
            err.statusCode = 405;
            throw err;
        }

        quiz.name = req.body.name;
        quiz.questions_list = req.body.questions_list;
        quiz.answers = req.body.answers;

        const result = await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz updated successfully", data: {   } };
        res.status(200).send(resp);

    }
    catch (error) {
        next(error);
    }
}
const deleteQuiz =async (req: Request, res: Response,next:NextFunction) => {
    try {
        const quizId = req.params.quizId;

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized to get Quiz");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.is_published) {
            const err = new ProjectError("You Can not Delete pblished Quiz");
            err.statusCode = 405;
            throw err;
        }

        await Quiz.deleteOne({_id:quizId});

        const resp: ReturnResponse = { status: "success", message: "Quiz Deleted successfully", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}
const pulishQuiz =async (req: Request, res: Response,next:NextFunction) => {
    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById({ _id: quizId });
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (quiz.is_published) {
            const err = new ProjectError("Quiz Already Published");
            err.statusCode = 405;
            throw err;
        }
        quiz.is_published = true;
        await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz Published successfully", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, pulishQuiz };