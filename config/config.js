const dotenv = require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DBHOST: process.env.DBHOST,
  DBUSER: process.env.DBUSER,
  DBPASSWORD: process.env.DBPASSWORD,
  DBNAME: process.env.DBNAME,
  DBDIALECT: process.env.DBDIALECT,
  DBPORT: process.env.DBPORT,
};
