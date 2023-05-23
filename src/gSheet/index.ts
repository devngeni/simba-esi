import { Router, Request, Response } from "express";

const router = Router();

router.get("/gsheet", async (req: Request, res: Response) => {
	res.status(200).json({
		status: `success`,
		message: `Simba ESI Platform`,
		data: "GSHEET Hakuna Matata! (matarra)",
	});
});

export { router as gSheetRouter };
