
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('sequelize_user',{
    id: {
        type:Sequelize.INTEGER,
        
        allowNull:false,
        primaryKey:true
    },
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    remark:Sequelize.STRING
});

module.exports = User;

