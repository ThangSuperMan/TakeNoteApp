import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	nameUser: {
		type: String,
		require: true,
	},
	username: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

const Register = mongoose.model("users", UserSchema);

export default Register;
