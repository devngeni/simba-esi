import express, { Application, Request, Response } from "express";
import cors from "cors";
import timeout from "connect-timeout";
import { google } from "googleapis";
import { oauth2Client } from "./gSheet/authClient";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(timeout("60s")); // 1 minutes

// GLOBAL AUTH
google.options({
	auth: oauth2Client,
});

import "./routes/index";
import "./database/connect"

// Root route
app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		status: `success`,
		message: `Simba ESI Platform`,
	});
});

// handle errors
app.all("*", async (_req, res) => {
	res.status(404).send("Sorry, cant find that");
});

export { app };
