const Users = require('../model/user.model');

exports.findAll = function(req, res){
    Users.findAll(function(err, users){
        console.log('controller')
        if(err)
        res.send(err);
        console.log('res', users);
        res.send(users);
    });
};

exports.findById = function(req, res){
    Users.findById(req.params.id, function(err, users){
        if(err)
        res.send(err);
        res.json(users);
    });
};

exports.create = function(req, res){
    const new_users = new Users(req.body);

    // handles null error
    if(req.body.constructor == Object && Object.keys(req.body).length ==0){
        res.status(400).send({error:true, message: 'please provide all required fields'});
    }
    else{
        Users.create(new_users, function(err, users){
            if(err)
            res.send(err);
            res.json({error:failed, message: "User added successfully!", data:users});
        
        });
    
    }
};