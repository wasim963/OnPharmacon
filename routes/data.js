const route = require('express').Router();

route.get('/', (req, res) => {
    if(!req.user){
        return res.redirect('api/users/login');
    }
    res.send("USER SENSITIVE DATA");
    //res.send(req.session);
});

module.exports = route;
