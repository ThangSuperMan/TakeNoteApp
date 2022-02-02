import mongoose from "mongoose";

const MONGO_USERNAME: string = "thangjenny2002";
const MONGO_PASSWORD: string = "Chaungoanbacho123";
const MONGO_DATABASENAME: string = "DatabaseHappyNote";
const MONGO_HOST: string = "clusternotetakingapp.1vhw5.mongodb.net";

//const uri: string =
//"mongodb+srv://thangjenny2002:Chaungoanbacho123@clusternotetakingapp.1vhw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASENAME}`;

const connect = mongoose.connect(uri, (err: any) => {
	if (err) {
		console.log(`Error here: ${err}`);
	} else {
		console.log("Successfully connected to the mongo db");
	}
});

export default connect;
