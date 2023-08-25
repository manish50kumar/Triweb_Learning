
const userModel = require("../models/userModels");

module.exports.register = async (req, res) => {
    let insertId = await userModel.insert(req.body);
    if (insertId > 0) {
        res.send({ status: "success", data: { id: insertId } });
    }
    else {
        res.send({ status: "success", message:"user not registered" });
    }
}

