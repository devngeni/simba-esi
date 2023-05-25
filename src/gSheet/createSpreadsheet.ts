import { google } from "googleapis";
const { GoogleAuth } = require("google-auth-library");

const auth = new GoogleAuth({
	keyFile: "./googleKeys.json",
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// TODO CREDENTIALS

const sheets = google.sheets({ version: "v4", auth });

const spreadsheet: any = {
	properties: {
		title: "My New Spreadsheet",
	},
};

const createdSpreadsheet = async () => {
	await sheets.spreadsheets.create(
		spreadsheet,
		(err: any, spreadsheet: any) => {
			if (err) {
				// Handle error.
				console.log(err);
			} else {
				console.log(`Spreadsheet ID: ${spreadsheet.spreadsheetId}`);
			}
		},
	);
};

console.log(createdSpreadsheet);
