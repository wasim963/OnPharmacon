const route = require('express').Router();
const db = require('../db');
const passport = require('../passport');

var mail = "";
route.post('/signup', (req, res) => {
    mail = req.body.email;

    db.User.create({
        fname: req.body.fname,
        lname: req.body.lname,
        dob: req.body.dob,
        gender: req.body.gender,
        email: mail,
        pass: req.body.pass,
        cpass: req.body.cpass,
        phone: req.body.phone
    })
        .then((user) => {
            res.redirect('/public/account.html');
           //res.send(user);
        })
        .catch(err => {
            res.send(err);
        })
});

route.get('/signup', (req, res) => {
    db.User.findAll({
          where:{
              email: mail
          }
    })
        .then((data) => {
            // res.redirect('/public/account.html');
            res.send(data)
        })
        .catch((err) => {
            res.send("Could not get the user!")
        })

});

route.get('/login', (req, res) => {
    res.render('login');
});

route.post('/login', passport.authenticate('local',{
    successRedirect: '/data',
    failureRedirect: '/login'
}));


module.exports = route;
