import { Router } from "express";
import INDICATORSROUTES from "./indicators.routes.js";
/* import REPORTSROUTES from "./reports.routes.js";*/
import USERSROUTES from "./users.routes.js";

const ROUTES = Router();

export default ROUTES.use("/Indicators", INDICATORSROUTES).use(
  "/Users",
  USERSROUTES
);

/*   .use("/Reports", REPORTSROUTES) */
