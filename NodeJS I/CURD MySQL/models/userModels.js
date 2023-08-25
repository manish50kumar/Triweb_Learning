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