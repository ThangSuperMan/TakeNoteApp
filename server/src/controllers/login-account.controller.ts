import { Request, Response, NextFunction } from "express";
import connect from "../database/connect";
import Account from "../models/account.module";

export async function checkLogin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log("check login");

	if (connect !== undefined) {
		const accounts = await Account.find();
		console.log(accounts);
	}
}
