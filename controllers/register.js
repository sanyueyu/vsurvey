'use strict';


var RegisterModel = require('../models/register');


module.exports = function (app) {

    var model = new RegisterModel();


    app.post('/register', function (req, res) {
        var email = req.body.email && req.body.name.trim();
        var password = req.body.password;
        res.render('register', model);
        
    });

};
