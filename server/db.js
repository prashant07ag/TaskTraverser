const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres", 
  password: "Dhoni07fav@",
  host: "localhost",
  port: 5004,
  database: "TodoTraverse"
});

module.exports = pool;