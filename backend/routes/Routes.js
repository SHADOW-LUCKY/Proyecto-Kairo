import { Router } from "express";
import { authRequired } from "../middlewares/ValidateToken.js";
import INDICATORSROUTES from "./indicators.routes.js";
import REPORTSROUTES from "./reports.routes.js";
import USERSROUTES from "./users.routes.js";

const ROUTES = Router();

export default ROUTES.use("/Indicators", authRequired, INDICATORSROUTES)
  .use("/Reports", authRequired, REPORTSROUTES)
  .use("/Users", USERSROUTES);
