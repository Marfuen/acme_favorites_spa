const Sequelize = require("sequelize");
const DATABASE_URL = 'postgres://localhost/acmeFavoritesSpa'
module.exports = new Sequelize(process.env.DATABASE_URL || DATABASE_URL)
