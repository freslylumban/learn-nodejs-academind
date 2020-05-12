const Sequelize = require('sequelize');

// const sequelize = new Sequelize('database-name', 'username', 'password', {
const sequelize = new Sequelize('node-complete', 'root', '', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;
