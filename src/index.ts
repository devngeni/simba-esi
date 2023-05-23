import { config } from "./config";
import { app } from "./app";

const main = async () => {
	try {
		// Start server
		app.listen(config.APP.PORT, () => {
			console.log(
				`🦁Simba🦁 ESI running on http://127.0.0.1:${config.APP.PORT} 🦁`,
			);
		});
	} catch (error) {
		console.log(`❌  Error Starting Simba ESI! ❌ `, error);
	}
};

main();
