import { Sequelize } from "sequelize";
import { Config } from "./config.js";

const databaseUrl = Config.External_Database;

if (!databaseUrl) {
  throw new Error("External_Database is missing from backend/.env");
}

export const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: Config.pool,
  logging: false
});

export const connectToDb = async () => {
  await sequelize.authenticate();
  console.log("Database connected.");
  await sequelize.sync();
  console.log("Database synced successfully.");
};
