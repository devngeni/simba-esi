import { config } from "../config";
import { google } from "googleapis";

// Authorize a client with credentials
export const oauth2Client = google.auth.fromAPIKey(
	config.GOOGLE.GSHEET_API_KEY,
);

google.auth.transporter

// set auth as a global default
export const globalGoogleAith = google.options({
	auth: oauth2Client,
});

// const auth = new google.auth.GoogleAuth({
// 	keyFile: "./googleKeys.json",
// 	scopes: [
// 		"https://www.googleapis.com/auth/cloud-platform",
// 		"https://www.googleapis.com/auth/spreadsheets",
// 	],
// });
