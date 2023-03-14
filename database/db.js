// const mysql = require("mysql2");
import mysql from 'mysql2';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kts0thachoshen',
  database: 'ecommerce' 
});

// connection.connect((err) => {
//   if (err) console.log(err);
//   else console.log("MySQL is connected...");
// });

// module.exports = connection;
export default connection
