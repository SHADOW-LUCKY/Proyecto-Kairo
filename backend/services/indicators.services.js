import DBconnection from "../database/mongo.js";
import { ObjectId } from "mongodb";

export const getIndicators = async () => {
  try {
    const db = await DBconnection();
    const getAll = await db.collection("indicators").find().toArray();

    return getAll.length
      ? {
          msg: "Indicators found",
          data: getAll,
        }
      : {
          msg: "No Indicators",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const createIndicator = async (indicatorData) => {
  try {
    const db = await DBconnection();
    const newIndicator = await db
      .collection("indicators")
      .insertOne(indicatorData);
    return newIndicator.acknowledged
      ? {
          msg: "Indicator Created Successfully",
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const updateIndicator = async (id, indicatorData) => {
  try {
    const db = await DBconnection();
    const updateOneIndicator = await db
      .collection("indicators")
      .updateOne({ _id: new ObjectId(id) }, { $set: indicatorData });
    return updateOneIndicator.acknowledged
      ? {
          msg: `Indicator with ID:${id} Successfully Updated`,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};

export const deleteIndicator = async (id) => {
  try {
    const db = await DBconnection();
    const deleteOneIndicator = await db.collection("indicators").deleteOne({
      _id: new ObjectId(id),
    });
    return deleteOneIndicator.acknowledged
      ? {
          msg: `Indicator with ID:${id} Removed Successfully`,
        }
      : {
          msg: "Missing data",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Server Error: ${error.message}`);
  }
};
