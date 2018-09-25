//Example Model using Sequelize  
module.exports = function(sequelize, DataTypes){
    let User = sequelize.define("User", {
        name: DataTypes.STRING,
        number: DataTypes.INTEGER
    });
    return User;
}

