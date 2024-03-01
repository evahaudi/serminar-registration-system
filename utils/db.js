// const mysql = require('mysql');

// // Create a connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10, // Adjust as needed
//   host: 'localhost',
//   user: 'your_username',
//   password: 'your_password',
//   database: 'your_database_name'
// });

// // Export the pool
// module.exports = pool;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    password: 'root',
    database: 'railway'
  });
  
  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  });

  module.exports = db;
