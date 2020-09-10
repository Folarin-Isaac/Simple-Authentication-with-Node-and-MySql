const dbConn = require('./config/db.config.js');


// user object create 
const User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;

};
User.create = function(newUser, result){
    dbConn.query("INSERT INTO users ?", newUser, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
    
};
User.findById = function(id, res){
    dbConn.query("Select * from users", function(err, res){
        if(err){
            console.log("error:", err);
            result(null, err);
        }
        else{
            console.log('users: ', res);
            result(null, res);
        }
    });
};
