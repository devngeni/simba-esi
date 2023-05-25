import mongoose from "mongoose";
import { config } from "../config";

const connectDB = async () => {
	try {
		await mongoose.connect(config.APP.DB_URL, {
			keepAlive: true,
			connectTimeoutMS: 60000,
			socketTimeoutMS: 60000,
		});
		let message = "\n****MongoDB Connection Successful****";
		console.log(message);
	} catch (error) {
		let message = `Error connecting to database: ${error}`;
		console.log(message);
	}
};

connectDB();
