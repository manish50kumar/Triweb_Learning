import mongoose from "mongoose";


const schema = mongoose.Schema;

const resultSchema = new schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        quizId: {
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true,
            index: true
        },
        score: {
            type: Number,
            requird: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);

export default Result;