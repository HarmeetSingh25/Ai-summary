import app from "./src/app.js";
import { Config } from "./src/confg/config.js";
import { connectToDb } from "./src/confg/db.js";

const startServer = async () => {
  try {
    await connectToDb();
    app.listen(Config.Port, () => {
      console.log(`Server is running on port ${Config.Port}`);
    });
  } catch (error) {
    console.error("Database startup failed:", error);
    process.exit(1);
  }
};

startServer();
