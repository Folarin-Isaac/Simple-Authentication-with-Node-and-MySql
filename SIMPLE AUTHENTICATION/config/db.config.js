dotenv.config({ path:'./.env'})
const mysql = require('mysql');

// create the database connection
const dbConn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// connect the database
dbConn.connect( (error) => {
    if(error){
        console.log("Failed to connect to the database")
    }else{
        console.log('MYSQL is connected.')
        
    }
 });

 module.exports = dbConn;
 
