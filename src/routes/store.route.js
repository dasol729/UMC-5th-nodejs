import express from "express";
import asyncHandler from 'express-async-handler';
import { reviewPreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});
/**
 * @swagger
 * /{storeId}/reviews:
 *    get:
 *        tags:
 *        - Store
 *        summary: 가게 별 리뷰 조회 로직
 *        parameters:
 *        - in: path
 *          name: storeId
 *          schema:
 *              type: integer
 *              required: true
 *        - in: query
 *          name: reviewId
 *          required: false
 *          schema:
 *              properties:
 *                  reviewId:
 *                      type: integer
 *        - in: query
 *          name: paging
 *          required: true
 *          schema:
 *              properties:
 *                  size:
 *                      type: integer
 *        responses:
 *            '200':
 *            description: 리뷰 조회 성공
 *            schema:
 *                type: object
 *                properties:
 *                status:
 *                    type: integer
 *                    example: 200
 *                isSuccess:
 *                    type: boolean
 *                    example: true
 *                code:
 *                    type: integer
 *                    example: 2000
 *                message:
 *                    type: string
 *                    example: "success!"
 *                data:
 *                    type: array
 *                    example: {
 *                      "reviewData": [
 *                          {
 *                              "user_name": "SwaggerTest1",
 *                              "rate": 5,
 *                              "review_body": "리뷰1",
 *                              "create_date": "2000.01.01"
 *                          },
 *                          {
 *                              "user_name": "SwaggerTest2",
 *                              "rate": 4.5,
 *                              "review_body": "리뷰2",
 *                              "create_date": "2000.02.02"
 *                          }
 *                      ],
 *                      "cursorId": 1
 *                    }
 *                    
 */
storeRouter.get('/reviews', asyncHandler(reviewPreview));