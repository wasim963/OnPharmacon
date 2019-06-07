const route = require('express').Router();
const db = require('../db');

route.get('/', (req, res) => {
    db.Product.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.send("Could not get all products!")
        })
});

route.post('/', (req, res) => {
    db.Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price),
        discount: parseInt(req.body.discount)
    })
        .then((data) => {
            // res.send(data)
            res.redirect('/public/viewProducts.html');
        })
        .catch(err => {
            res.send("Could not create product!")
        })
});

var pid = 0;
route.post('/one', (req,res) => {
     pid = parseInt(req.body.id);
    db.Product.findAll({
        where: {
            id: parseInt(pid)
        }
    }).then((data) => {
        res.send(data);
    }).catch(err => {
        res.send("Could not get this product! post")
    })

});

route.get('/one', (req,res) => {
    db.Product.findAll({
        where: {
            id: pid
        }
    })
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.send("Could not get this product get!")
        })

});

module.exports = route;
