import { config } from "../config";
import { Router, Request, Response } from "express";
// import { GoogleSpreadsheet } from "google-spreadsheet";
import { google } from "googleapis";
// const { GoogleAuth } = require("google-auth-library");

const router = Router();

import googleKeys from "./../../googleKeys.json";
console.log("googleKeys: ", googleKeys);

// CheckConnection to Google Sheet API
export const authorize = async () => {
	const auth = new google.auth.GoogleAuth({
		scopes: [
			"https://www.googleapis.com/auth/cloud-platform",
			"https://www.googleapis.com/auth/spreadsheets",
		],
		keyFile: "./googleKeys.json",
	});

	const client = await auth.getClient();
	console.log("Client: ", client);

	if (client.credentials === null) {
		throw new Error(`authentication failed`);
	} else {
		return client;
	}
};

const oauth2Client = google.auth.fromAPIKey(config.GOOGLE.GSHEET_API_KEY);

// set auth as a global default
google.options({
	auth: oauth2Client,
});

router.get("/gsheet", async (req: Request, res: Response) => {
	try {
		// const auth = new google.auth.GoogleAuth({
		// 	keyFile: "./googleKeys.json",
		// 	scopes: [
		// 		"https://www.googleapis.com/auth/cloud-platform",
		// 		"https://www.googleapis.com/auth/spreadsheets",
		// 	],
		// });

		let spreadsheet = google.sheets({ version: "v4", auth: oauth2Client });

		const resp = await spreadsheet.spreadsheets.values.get({
			spreadsheetId: config.GOOGLE.GSHEET_ID,
			range: "Sheet1!A1:C2",
		});

		const rows = resp.data.values;
		if (!rows || rows.length === 0) {
			console.log("No data found.");
		} else {
			console.log("Name, Major, ETC:");
			for (const row of rows) {
				// Print columns A and E, which correspond to indices 0 and 4.
				console.log(`${row[0]}, ${row[2]}`);
			}
		}

		res.status(200).json({
			status: `success`,
			message: `Simba ESI Platform`,
			data: "GSHEET Hakuna Matata! (matarra)",
		});
	} catch (error) {
		console.error(error);
	}
});

export { router as gSheetRouter };
