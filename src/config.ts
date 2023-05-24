import "dotenv/config";

export const config = {
	APP: {
		PORT: process.env.PORT || 4000,
	},

	GOOGLE: {
		GSHEET_ID: process.env.GSHEET_ID || "",
		GSHEET_EMAIL: process.env.GSHEET_EMAIL || "",
		GSHEET_API_KEY: process.env.GSHEET_API_KEY || "",
		GCLIENT_ID: process.env.CLIENT_ID || "",
		GCLIENT_SECRET: process.env.CLIENT_SECRET || "",
	},
};
