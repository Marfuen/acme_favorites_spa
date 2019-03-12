const Sequelize = require("sequelize");
const db = require('./db');

const Thing = db.define("thing", {
  name: Sequelize.STRING,
});

module.exports = Thing;
