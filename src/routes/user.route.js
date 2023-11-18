import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignup } from "../controllers/user.controller.js";

export const userRouter = express.Router();
/* GET sign in page. */
/**
 * @swagger
 * /user/signup/:
 *     post:
 *         tags:
 *         - User
 *         summary: 회원가입
 *         parameters:
 *         - in: body
 *           name: signUp
 *           required: true
 *           schema:
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               gender:
 *                 type: string
 *               birthYear:
 *                 type: integer
 *               birthMonth:
 *                 type: integer
 *               birthDay:
 *                 type: integer
 *               addr:
 *                 type: string
 *               specAddr:
 *                 type: string
 *               phone:
 *                 type: string
 *               prefer:
 *                 type: array
 *                 description: 선호 카테고리 번호
 *                 example: [1, 3, 5]
 *         responses:
 *           '200':
 *             description: 회원 가입 성공!
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 isSuccess:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 2000
 *                 message:
 *                   type: string
 *                   example: "success!"
 *                 data:
 *                   type: object
 *                   example: {
 *                     "email": "swaggerTest@mail.com",
 *                     "name": "swagger",
 *                     "preferCategory": [
 *                        "한식",
 *                        "일식"
 *                     ]
 *                   }
 */
userRouter.post('/signup', asyncHandler(userSignup));