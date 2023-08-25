const db = require("../utils/database");

module.exports.insert = async (userData) => {
    let id = 0;
    try {
        let query = "INSERT INTO `users`(`id`,`firstName`,`lastName`,`email`,`mobile_no`,`password`,`remark`) VALUES(?,?,?,?,?,?,?)";
        //execute
        let result = await db.execute(query, [userData.id, userData.firstName, userData.lastName, userData.email, userData.mobile_no, userData.password, userData.remark]);
        id = userData.id;
        console.log("Mob No: ", userData.mobile_no);
    }
    catch (error) {
        console.log(error);
    }
    return id;
}

module.exports.get = async (userData) => {
    try {
        let query = "SELECT * FROM `users` WHERE `id`=?";
        let result = await db.execute(query, [userData.id]);
        // console.log(result[0]);
        return result[0];
    }
    catch (error) {
        console.log("error: ", error);
    }
}


module.exports.update = async (userData) => {
    try {
        let query = "UPDATE `users` SET `password`=? WHERE `id`=?";
        let result = await db.execute(query, [userData.password, userData.id]);
        return true;
    }
    catch (error) {
        console.log("Error in upDate Data", error);
        return false;
    }
}

module.exports.delete = async (userData) => {
    try {
        let query = "DELETE FROM `users` WHERE `id`=?";
        let result = await db.execute(query, [userData.id]);
        return true;
    }
    catch (error) {
        console.log("Error in Delete Data", error);
        return false;
    }
}