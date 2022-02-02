import express from "express";
import * as loginController from "../controllers/login-account.controller";

const router = express.Router();

router.get("/api/login", loginController.checkLogin);

export default router;
