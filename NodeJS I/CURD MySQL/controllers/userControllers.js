
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

module.exports.get = async (req, res) => {
    let getData = await userModel.get(req.body);
    if (getData) {
        res.send({status:"success" ,data:getData})
    }
    else {
        res.send({ status: "success", message: "can not get details" });
    }
}


module.exports.update = async (req, res) => {
    let updatePassword = await userModel.update(req.body);
    if (updatePassword) {
        res.send({status:"success" ,message:"update successfully"})
    }
    else {
        res.send({ status: "success", message: "can not update" });
    }
}


