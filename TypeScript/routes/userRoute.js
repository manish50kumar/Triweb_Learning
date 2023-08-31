const express = require('express');
const router = express.Router();

// const userController = require("../controllers/userController");
const { registerUser } = require("../controllers/userController");

router.post('/register', registerUser);

module.exports = router;