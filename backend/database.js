const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    process.env.DB_NAME, //Name db
    process.env.DB_USER, //user db
    process.env.DB_PASSWORD, //password db
    {
        dialect:'mysql',
        host:process.env.DB_HOST,
        port:process.env.DB_PORT

    }
);