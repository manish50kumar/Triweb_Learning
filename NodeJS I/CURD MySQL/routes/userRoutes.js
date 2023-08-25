const express = require("express");

const router = express.Router();
const userControllers = require("../controllers/userControllers");
// /user/register
router.post('/register', userControllers.register);

// /user/get   [to fetch all data]
router.post('/get', userControllers.get);

// /user/update   [to update password]
router.post('/update', userControllers.update);

// /user/delete   [to delete Data]
router.post('/delete', userControllers.delete);

module.exports = router;