import { Router } from "express";
import { validateSchema } from "../middlewares/Validator.js";
import { IndicatorSchema } from "../schemas/indicator.js";
import * as IndicatorsControllers from "../controllers/indicators.controllers.js";

const ROUTER = Router();

export default ROUTER.get("/All", IndicatorsControllers.GetAllIndicators)
  .post(
    "/New",
    validateSchema(IndicatorSchema),
    IndicatorsControllers.CreateNewIndicator
  )
  .put(
    "/Update/:Id",
    validateSchema(IndicatorSchema),
    IndicatorsControllers.UpdateOneIndicator
  )
  .delete("/Delete/:Id", IndicatorsControllers.DeleteOneIndicator);
