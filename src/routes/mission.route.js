import express from "express";
import asyncHandler from 'express-async-handler';
import { addChallenge } from "../controllers/challenge.controller.js";
import { addMission } from "../controllers/mission.controller.js";

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