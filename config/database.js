const mysql = require("mysql");
const DB = require("../config/config");

// Parámetros de conexión a la base de datos.
const dataBase = mysql.createPool({
  connectionLimit: 10,
  host: DB.DBHOST,
  user: DB.DBUSER,
  password: DB.DBPASSWORD,
  database: DB.DBNAME,
});

module.exports = dataBase;
