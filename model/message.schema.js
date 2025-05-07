const {bdd} = require('../framework/connection.js');
const {DataTypes} = require('sequelize');

let Message = bdd.define('message',{
    title: {
        type: DataTypes.STRING(255)
    },
    content: {
        type: DataTypes.STRING(5000)
    }
});

module.exports = Message;