// npm install passport --save
// npm install passport-local --save
// npm install express-session--save


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');

passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(function (email, done) {
    db.User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        done(null, user)
    }).catch((err) => {
        done(err);
    })
});


passport.use('local', new LocalStrategy(
    function (email, pass, done) {
        db.User.findOne({
            where: {
                email: email
            }
        })
            .then(function (user) {
                if (!user) {
                    return done(null, false)
                }
                if (user.pass !== pass) {
                    return done(null, false)
                }
                done(null, user)
            })
            .catch((err) => {
                done(err)
            })
    }
));


module.exports = passport;