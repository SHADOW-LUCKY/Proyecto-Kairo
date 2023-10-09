import { Router } from "express";
import * as IndicatorsControllers from "../controllers/indicators.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/All", IndicatorsControllers.GetAllIndicators)
  .post("/New", IndicatorsControllers.CreateNewIndicator)
  .put("/Update/:Id", IndicatorsControllers.UpdateOneIndicator)
  .delete("/Delete/:Id", IndicatorsControllers.DeleteOneIndicator);
