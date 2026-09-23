import app from "./src/app.js";
import { Config } from "./src/confg/config.js";
import { connetToDb } from "./src/confg/db.js";

connetToDb()
app.listen(Config.Port, () => console.log("server is running ", Config.Port)
)