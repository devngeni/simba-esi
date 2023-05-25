import { config } from "../config";
import { Router, Request, Response } from "express";
import { google } from "googleapis";

import { oauth2Client } from "./authClient";

const router = Router();

// GLOBAL AUTH
google.options({
	auth: oauth2Client,
});

// Q&A Router
router.get("/q&a", async (req: Request, res: Response) => {
	try {
		const sheets = google.sheets({ version: "v4", auth: oauth2Client });

		const ranges = ["Q&A!"];
		const resp = await sheets.spreadsheets.values.batchGet({
			spreadsheetId: config.GOOGLE.GSHEET_ID,
			ranges: ranges,
		});

		const cols = resp.data.valueRanges;  
	} catch (error) {
		console.log(`Error in Q&A`, error);
	}
});
