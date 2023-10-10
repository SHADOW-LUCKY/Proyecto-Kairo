import * as ReportsServices from "../services/reports.services.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../helpers/SendResponse.js";

const getRequestBody = (req) => {
  const { user_id, indicators_id, description, fecha_expedited } = req.body;
  return {
    user_id,
    indicators_id,
    description,
    fecha_expedited,
  };
};

const getRequestId = (req) => req.params.Id;

export const GetAllReports = async (req, res) => {
  try {
    const allReports = await ReportsServices.getReports();
    sendSuccessResponse(res, allReports);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateNewReport = async (req, res) => {
  try {
    const reportData = getRequestBody(req);
    const newReport = await ReportsServices.createReport(reportData);
    sendSuccessResponse(res, newReport);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneReport = async (req, res) => {
  try {
    const Id = getRequestId(req);
    const reportData = getRequestBody(req);
    const updateReport = await ReportsServices.updateReport(Id, reportData);
    sendSuccessResponse(res, updateReport);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneReport = async (req, res) => {
  try {
    const Id = getRequestId(req);
    const deleteReport = await ReportsServices.deleteReport(Id);
    sendSuccessResponse(res, deleteReport);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
