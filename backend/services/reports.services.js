import DBconnection from "../database/mongo.js";
import { ObjectId } from "mongodb";

export const getReports = async () => {
  try {
    const db = await DBconnection();
    const getAll = await db.collection("reports").find().toArray();

    return getAll.length
      ? {
          msg: "Reports found",
          data: getAll,
        }
      : {
          msg: "No Reports",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const createReport = async (reportData) => {
  try {
    const db = await DBconnection();
    const newReport = await db.collection("reports").insertOne(reportData);
    return newReport.acknowledged
      ? {
          msg: "Report Created Successfully",
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const updateReport = async (id, reportData) => {
  try {
    const db = await DBconnection();
    const updateOneReport = await db
      .collection("reports")
      .updateOne({ _id: new ObjectId(id) }, { $set: reportData });
    return updateOneReport.acknowledged
      ? {
          msg: `Report with ID:${id} Successfully Updated`,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const deleteReport = async (id) => {
  try {
    const db = await DBconnection();
    const deleteOneReport = await db.collection("reports").deleteOne({
      _id: new ObjectId(id),
    });
    return deleteOneReport.acknowledged
      ? {
          msg: `Report with ID:${id} Removed Successfully`,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};
