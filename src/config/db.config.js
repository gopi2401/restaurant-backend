const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

(async () => {
  try {
    await db.getConnection();
    console.warn("database is connected..!");
  } catch (e) {
    console.error("database not connected..!");
  }
})();

module.exports = db;
