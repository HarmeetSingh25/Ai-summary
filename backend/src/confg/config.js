import { config } from "dotenv"

config()
export const Config = {
    Port: process.env.PORT,
    DB_USER: process.env.DB_USERNAME,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE


}