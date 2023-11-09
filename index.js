// npm run start
//const express = require('express');   // common JS
import express from 'express';         // ES6
import { tempRouter } from './src/routes/temp.route.js';
import { BaseError } from "./config/error.js";
import { status } from './config/response.status.js';
import { response } from './config/response.js';

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

// error handling
app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});
app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
});


/*
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
*/


