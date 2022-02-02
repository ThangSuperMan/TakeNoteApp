import express from "express";
import * as registerAccountController from "../controllers/register-account.controller";

const router = express.Router();

router.post("/api/register-account", registerAccountController.addAccount);

export default router;
