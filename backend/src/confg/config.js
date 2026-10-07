import { config } from "dotenv"

config()
export const Config = {
    Port: process.env.PORT || 3000,
    // DB_USER: process.env.DB_USERNAME,
    DB_PORT: process.env.DB_PORT,
    // DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    // DB_DATABASE: process.env.DB_DATABASE,
    External_Database: process.env.External_Database,
    DB:process.env.DATABASE,
    DB_USERNAME:process.env.DB_USERNAME,
 pool: {
    max: 5,        // Maximum number of connections in pool
    min: 0,        // Minimum number of connections in pool
    acquire: 30000,// Maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000    // Maximum time, in milliseconds, that a connection can be idle before being released
  }
}
