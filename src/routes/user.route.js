import express from "express";
import { userSignup } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post('/signup', userSignup);