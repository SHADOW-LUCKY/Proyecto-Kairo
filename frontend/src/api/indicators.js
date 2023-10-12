import axios from "./axios.js";

export const getIndicators = async () => {
  try {
    const res = await axios.get("/Indicators/All");
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error.message}`);
  }
};

export const postIndicatorsRequest = async (indicator) => {
  try {
    await axios.post("/Indicators/New", indicator);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const deleteIndicatorsRequest = async (id) => {
  try {
    await axios.delete(`/Indicators/Delete/${id}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
