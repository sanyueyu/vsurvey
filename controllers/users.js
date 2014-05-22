'use strict';


var UsersModel = require('../models/users');


module.exports = function (app) {
    app.get('/users', function(req, res) {
        res.render('users');
    });

    app.post('/users', function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var newUser = new UsersModel({
            email: email,
            password: password
        });
        newUser.save(function(err) {
            if(err) {
                console.log("=====>", "save err", err);
            }
        });
        console.log("=====>", "save ok");
        res.redirect("/users");
    });

};
