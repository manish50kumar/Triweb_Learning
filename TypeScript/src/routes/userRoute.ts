const express = require('express');
const router = express.Router();


// const { registerUser } = require("../controllers/userController");
import  { registerUser } from "../controllers/userController";


router.post('/register', registerUser);

export default router;