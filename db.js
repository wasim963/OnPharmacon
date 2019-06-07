
const Sequelize = require('sequelize');

const db = new Sequelize('pharmacon', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = db.define('users', {
    fname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    pass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }

});


const Product = db.define('products', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0.0
    },
    discount: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0
    }

});


db.sync(() => {
    console.log("DATABASE IS CONNECTED!")
});


module.exports ={
    User,
    Product
};
