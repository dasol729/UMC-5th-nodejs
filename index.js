// npm run start
//const express = require('express');   // common JS
import express from 'express';         // ES6
import { status } from './config/response.status.js';
import { response } from './config/response.js';
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from './src/routes/user.route.js';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';

const app = express();

app.use('/user', userRouter);
app.use(express.urlencoded({extended: false})); 
// 단순 객체 문자열 형태로 본문 데이터 해석



dotenv.config();    // .env 파일 사용 (환경 변수 관리)



// server setting - veiw, static, body-parser etc..
app.set('port', process.env.PORT || 3000)   // 서버 포트 지정
app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석

// (...)

app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    console.log("error", err);
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});





/*
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


