const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Todo = sequelize.define('Todo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

sequelize.sync()
    .then(() => console.log('Todo model synced'))
    .catch(err => console.log('Error: ' + err));

module.exports = Todo;
