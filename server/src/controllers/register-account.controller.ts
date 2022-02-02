import { Request, Response, NextFunction } from "express";
import Account from "../models/account.module";
import connect from "../database/connect";
//import CheckExistedAccount from "../utils/checkexisted-account";

async function checkExistedAccount(username: string) {
	console.log("check existed accoun is running")

	try {

	return true;
	} catch(e: any) {
		console.log(e.message)
	}
}

export async function addAccount(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log("add account");

	const infoAccountRegister = req.body.infoAccountRegister;

	const infoRegisterAccount = {
		nameUser: infoAccountRegister.nameUser,
		username: infoAccountRegister.username,
		password: infoAccountRegister.password,
	};

	try {
	const data = await Account.find({ username: infoAccountRegister.username });

	if (typeof data[0] === 'undefined') {
		console.log("this is undefined")

		const account = new Account(infoAccountRegister)

		account.save(function(e: any) {
			if (e) {
			console.log(e)
			} else {
				console.log("Add account successfully")
			}
		})

		res.status(200).send({canRegister: true})
	} else {
		console.log("this is defined")
		res.status(200).send("canRegister: false")
	}

	} catch(error: any) {
		next(error)
	}
}
