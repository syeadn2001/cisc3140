/*
Creating the main database connection, & also initializing 
the database with my carContestLab
*/
var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "carContestLab.db"

//db will represent my database (use an anonymous callback function
//that establishes whether the connection was made or not)
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Database cannot be opened (should not happen, because
      //running make in the terminal should run the SQL file 
      //that creates the database)
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the carContestLab database.')
    }  
});

//exporting for use outside of this file (the server.js file)
module.exports = db