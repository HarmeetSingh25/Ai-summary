import { Pool } from "pg";
import { Config } from "./config.js";
export const db = new Pool({
    user: Config.DB_USER,
    host: Config.DB_HOST,
    password: Config.DB_PASSWORD,
    database: Config.DB_DATABASE,
    port: Config.DB_PORT,
})

export const connetToDb = async (req, res) => {
    try {
        await db.connect()
        console.log("db is connect ");

    } catch (error) {
        console.log(error, "this is db.js error");

    }
}