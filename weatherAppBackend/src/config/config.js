require('dotenv').config();

const config = {
  username: process.env.USERNAME || "root",
  password: process.env.PASSWORD || "12345",
  database: process.env.DB || "FavoriteCitiesDB",
  host: process.env.HOST || "127.0.0.1",
  dialect: "mysql",
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
