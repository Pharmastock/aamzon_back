import express, { response } from "express";
import {
  forgotPassword,
  userLogin,
  userRagistor,
} from "../DataBase/User/index.js";

const userRoute = express.Router();

userRoute.post("/user/ragistor", (req, res) => {
  userRagistor(req, res);
});

userRoute.post("/user/login", (req, res) => {
  userLogin(req, res);
});

userRoute.post("/user/forgotPassword", (req, res) => {
  forgotPassword(req, res);
});

export default userRoute;
