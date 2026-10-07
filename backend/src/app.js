import express, { urlencoded } from "express";
import Authrouter from "./route/auth.route.js";
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: Math.floor(process.uptime()),
        timestamp: new Date()
    });
});
app.use("/api/auth", Authrouter)


export default app