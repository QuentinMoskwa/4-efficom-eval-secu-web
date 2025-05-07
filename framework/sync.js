const {bdd} = require('./connection.js');
const User = require('./../model/user.schema.js');
const Role = require('./../model/role.schema.js');
const Message = require('./../model/message.schema.js');

const sync = async () => {
    console.log(Role);
    console.log(Message);
    await Role.belongsToMany(User,{through: "user_has_role"});
    await Message.belongsTo(User);
    await User.hasMany(Message);
    await bdd.sync();
}

module.exports = sync;