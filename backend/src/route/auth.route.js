import {  Router} from "express";
import { signup } from "../controller/auth.controller.js";
const route= Router()

route.post("/signup" , signup)


export default route
