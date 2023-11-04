// npm run start
const express = require('express')   // common JS
// import express from 'express';         // ES6

const app = express()
const port = 3000

const mysql = require("mysql2");

const db = require('./models');
const {user} = require('./models');

db.sequelize.sync().then((req) => {
    app.listen(3000, function() {
        console.log('app listen on 3000!');
    });
});

app.get('/select', (req, res) => {
    user.findAll({where: {firstName: "John"}})
    .then((users) => {
        res.send(users);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/insert', (req, res) => {
    user.create({
        firstName: "dada",
        age: 23,
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });

    res.send('insert');
});

app.get('/delete', (req, res) => {
    user.destroy({where: {id: 18}});
    res.send('delete');
});

