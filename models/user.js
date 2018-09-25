//Example Model using Sequelize  
//Replace "USER" and DataTypes

module.exports = function(sequelize, DataTypes){
    let User = sequelize.define("User", {
        name: DataTypes.STRING,
        number: DataTypes.INTEGER
    });
    return User;
}

