//Example Model using Sequelize  
//Replace "USER" and DataTypes

module.exports = function(sequelize, DataTypes){
    let User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return User;
}

