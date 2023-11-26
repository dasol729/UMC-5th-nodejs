import express from "express";
import asyncHandler from 'express-async-handler';
import { users, reviewList } from "../controllers/users.controller.js";

export const usersRouter = express.Router();
/**
 * @swagger
 * /users/reviews/:
 *     post:
 *         tags:
 *         - Reviews
 *         summary: 리뷰 작성
 *         parameters:
 *         - in: body
 *           name: review list
 *           required: true
 *           schema:
 *             properties:
 *               id:
 *                  type: integer
 *               id2:
 *                  type: integer 
 *               user_id:
 *                  type: integer
 *               score:
 *                 type: integer
 *               description:
 *                 type: string
 *         responses:
 *           '200':
 *             description: 리뷰 작성 성공!
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
 */
usersRouter.post('/reviews', asyncHandler(users));

/**
 * @swagger
 * /users/review-list/:
 *     post:
 *         tags:
 *         - Reviews
 *         summary: 내 리뷰 리스트
 *         parameters:
 *         - in: body
 *           name: review list
 *           required: true
 *           schema:
 *             properties:
 *               user_id:
 *                  type: integer
 *               page:
 *                 type: integer
 *         responses:
 *           '200':
 *             description: 성공!
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
 *                   type: array
 *                   example: {
 *                      "reviewData": [
 *                          {
 *                              "user_id": 1,
 *                              "score": 5,
 *                              "description": "리뷰1"
 *                          },
 *                          {
 *                              "user_id": 1,
 *                              "score": 4.5,
 *                              "description": "리뷰2"
 *                          }
 *                      ],
 *                      "cursorId": 1
 *                  }
 */
usersRouter.get('/review-list', asyncHandler(reviewList));