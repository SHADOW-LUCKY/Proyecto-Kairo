import { Router } from "express";
import { validateSchema } from "../middlewares/Validator.js";
import { ReportSchema } from "../schemas/report.js";
import * as ReportsControllers from "../controllers/reports.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/All", ReportsControllers.GetAllReports)
  .post(
    "/New",
    validateSchema(ReportSchema),
    ReportsControllers.CreateNewReport
  )
  .put(
    "/Update/:Id",
    validateSchema(ReportSchema),
    ReportsControllers.UpdateOneReport
  )
  .delete("/Delete/:Id", ReportsControllers.DeleteOneReport);
