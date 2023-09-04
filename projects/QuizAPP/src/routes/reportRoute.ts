import express from "express";

const router = express.Router();
import { getReport } from "../controllers/reportConroller";
import { isAuthenticated } from "../middlewares/isAuthUser";

// GET -> /report/:reportId
router.get('/:reportId?', isAuthenticated, getReport);  // optional reportId

// if not get reportId theshow all report of given user

export default router;