import express from "express";
import { userRegister, userSignin } from "../controller/user.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/signin", userSignin);

export default userRouter;
