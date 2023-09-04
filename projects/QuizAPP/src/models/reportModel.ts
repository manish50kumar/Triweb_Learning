import mongoose from "mongoose";


const schema = mongoose.Schema;

const reportSchema = new schema(
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

const Report = mongoose.model("Report", reportSchema);

export default Report;