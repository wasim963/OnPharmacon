// npm install passport --save
// npm install passport-local --save
// npm install express-session--save


const express = require('express');
const srv = express();

const session = require('express-session');
const passport = require('./passport');

const userRoute = require('./routes/users');
const productRoute = require('./routes/products');
const dataRoute = require('./routes/data');


srv.use(express.json());
srv.use(express.urlencoded({extended: true}));
srv.use(passport.initialize());
srv.use(passport.session());

srv.use('/public', express.static(__dirname + '/public'));
srv.use('/api/users', userRoute);
srv.use('/api/products', productRoute);
srv.use('/api/data' , dataRoute);


srv.listen(8888, () => {
    console.log("Server is up and running at port 8888!");
});
