const Sequelize = require("sequelize");
const db = require('./db');

const Favorite = db.define("favorite", {
  name: Sequelize.STRING,
  rank: Sequelize.INTEGER,
});

module.exports = Favorite;
