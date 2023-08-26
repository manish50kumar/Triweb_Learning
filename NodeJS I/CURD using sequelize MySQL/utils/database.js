const Sequelize = require('sequelize');

const sequelize = new Sequelize("curd_mysql","root","",{
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;