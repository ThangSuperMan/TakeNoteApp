import express, { Request, Response } from "express";
import config from "../config/config";
import registerAccountRouter from "./routes/register-account.router";
import loginAccountRouter from "./routes/login-account.router";
import * as errorController from "./controllers/error.controller";
import cors from "cors";

const app = express();

// Allow the client side send the props
app.use(
	cors({
		origin: "*",
	})
);

// Parsing the url into the body
app.use(express.json());

app.use("/", registerAccountRouter);
app.use("/", loginAccountRouter);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(config.port, () => {
	console.log(`Listenning on the port: ${config.port}`);
});
