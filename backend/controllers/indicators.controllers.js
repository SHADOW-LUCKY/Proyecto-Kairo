import * as IndicatorsServices from "../services/indicators.services.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../helpers/SendResponse.js";

const getRequestBody = (req) => {
  const {
    name,
    description,
    category,
    fecha_init,
    fecha_end,
    formula,
    frecuency,
    completation,
    area,
  } = req.body;
  return {
    name,
    description,
    category,
    fecha_init,
    fecha_end,
    formula,
    frecuency,
    completation,
    area,
  };
};

const getRequestId = (req) => req.params.Id;

export const GetAllIndicators = async (req, res) => {
  try {
    const allIndicators = await IndicatorsServices.getIndicators();
    sendSuccessResponse(res, allIndicators);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateNewIndicator = async (req, res) => {
  try {
    const indicatorData = getRequestBody(req);
    const allIndicators = await IndicatorsServices.createIndicator(
      indicatorData
    );
    sendSuccessResponse(res, allIndicators);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneIndicator = async (req, res) => {
  try {
    const Id = getRequestId(req);
    const indicatorData = getRequestBody(req);
    const allIndicators = await IndicatorsServices.updateIndicator(
      Id,
      indicatorData
    );
    sendSuccessResponse(res, allIndicators);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneIndicator = async (req, res) => {
  try {
    const Id = getRequestId(req);
    const allIndicators = await IndicatorsServices.deleteIndicator(Id);
    sendSuccessResponse(res, allIndicators);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
