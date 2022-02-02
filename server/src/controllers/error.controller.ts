import { Request, Response, NextFunction } from "express";

interface ErrorWithStatus extends Error {
	status: number;
}

export function get404(req: Request, res: Response, next: NextFunction) {
	const error = new Error() as ErrorWithStatus;
	error.status = 404;
	next(error);
}

export function get500(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log("Get 500 method");
	console.log(err.message)
	res.status(err.status || 500);
	res.json({ error: err.message });
}
