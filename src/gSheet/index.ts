import { config } from "../config";
import { Router, Request, Response } from "express";
import { google } from "googleapis";
import { oauth2Client } from "./authClient";
import { Research, IResearch } from "../models";

const router = Router();

// GLOBAL AUTH
google.options({
	auth: oauth2Client,
});

// GSheet Router
router.get("/gsheet", async (req: Request, res: Response) => {
	try {
		let sheets = google.sheets({ version: "v4", auth: oauth2Client });

		const ResearchCells = ["F10", "G28"];

		const getResaerch = await sheets.spreadsheets.values.batchGet({
			spreadsheetId: config.GOOGLE.GSHEET_ID,
			ranges: ResearchCells,
		});

		console.log(JSON.stringify(getResaerch.data.valueRanges!, null, 2));

		const ResearchRanges = ["A10:A45", "Research!D10:D45"];
		const resp = await sheets.spreadsheets.values.batchGet({
			spreadsheetId: config.GOOGLE.GSHEET_ID,
			ranges: ResearchRanges,
		});

		const cols = resp.data.valueRanges;
		// console.log(JSON.stringify(cols));
		// console.log(`Data Count: ${cols.}`);

		let researchData = [];
		if (!cols || cols.length === 0) {
			console.log("No data found.");
		} else {
			for (const col of cols) {
				console.log(col);
				researchData.push(col);
			}
		}

		// TODO Save to DB
		// const researchDBData:IResearch = {
		// 	// TODO
		// 		}

		// const research = await Research.create(researchDBData);

		res.status(200).json({
			status: `success`,
			message: `Simba ESI Platform`,
			data: researchData,
		});
	} catch (error) {
		console.error(error);
	}
});

export { router as gSheetRouter };
