import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import timeout from "connect-timeout";

const app = express();

// Middleware
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(timeout("60s")); // 1 minutes

app.use(swaggerUi.serve);

// Root route
app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		status: `success`,
		message: `Simba ESI Platform`,
		data: "Hakuna Matata! (matarra)",
	});
});

import "./routes";

// handle errors
app.all("*", async (_req, res) => {
	res.status(404).send("Sorry, cant find that");
});

export { app };
