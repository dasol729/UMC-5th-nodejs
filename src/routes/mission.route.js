import express from "express";
import asyncHandler from 'express-async-handler';
import { addChallenge, challengeList } from "../controllers/challenge.controller.js";
import { addMission, missionList } from "../controllers/mission.controller.js";

export const missionRouter = express.Router();
/**
 * @swagger
 * /mission/add-challenge/:
 *     post:
 *         tags:
 *         - mission
 *         summary: 도전 미션 추가
 *         parameters:
 *         - in: body
 *           name: add-challenge
 *           required: true
 *           schema:
 *             properties:
 *               challenge_mission_id:
 *                  type: integer 
 *               user_id:
 *                  type: integer
 *               mission_id:
 *                 type: integer
 *         responses:
 *           '200':
 *             description: 도전 미션 추가 성공!
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
missionRouter.post('/add-challenge', asyncHandler(addChallenge));

/**
 * @swagger
 * /mission/add-mission/:
 *     post:
 *         tags:
 *         - mission
 *         summary: 미션 추가
 *         parameters:
 *         - in: body
 *           name: add-challenge
 *           required: true
 *           schema:
 *             properties:
 *               mission_id:
 *                  type: integer 
 *               restaurant_id:
 *                  type: integer
 *               price:
 *                 type: integer
 *               point:
 *                 type: integer
 *         responses:
 *           '200':
 *             description: 도전 미션 추가 성공!
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
missionRouter.post('/add-mission', asyncHandler(addMission));

/**
 * @swagger
 * /mission/challenge-list/:
 *     get:
 *         tags:
 *         - mission
 *         summary: 도전 미션 목록
 *         parameters:
 *         - in: body
 *           name: challenge-list
 *           required: true
 *           schema:
 *             properties: 
 *               user_id:
 *                  type: integer
 *               size:
 *                  type: integer
 *               cursorId:
 *                  type: integer
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
 *                      "missionData": [
 *                          {
 *                              "challenge_mission_id": 1,
 *                              "restaurant": "가게1",
 *                              "price": 10000,
 *                              "point": 3000
 *                          },
 *                          {
 *                              "challenge_mission_id": 2,
 *                              "restaurant": "가게3",
 *                              "price": 10000,
 *                              "point": 3000
 *                          }
 *                      ],
 *                      "cursorId": 1
 *                  }
 */
missionRouter.get('/challenge-list', asyncHandler(challengeList));

/**
 * @swagger
 * /mission/mission-list/:
 *     get:
 *         tags:
 *         - mission
 *         summary: 가게의 미션 목록
 *         parameters:
 *         - in: body
 *           name: mission-list
 *           required: true
 *           schema:
 *             properties: 
 *               restaurant_id:
 *                  type: integer
 *               size:
 *                  type: integer
 *               cursorId:
 *                  type: integer
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
 *                      "missionData": [
 *                          {
 *                              "mission_id": 1,
 *                              "restaurant": "가게1",
 *                              "price": 10000,
 *                              "point": 3000
 *                          },
 *                          {
 *                              "mission_id": 2,
 *                              "restaurant": "가게3",
 *                              "price": 10000,
 *                              "point": 3000
 *                          }
 *                      ],
 *                      "cursorId": 1
 *                  }
 */
missionRouter.get('/mission-list', asyncHandler(missionList));