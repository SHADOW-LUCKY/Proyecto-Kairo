import axios from "./axios.js";

export const getReportsRequest = async () => {
  try {
    const res = await axios.get("/Reports/All");
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error.message}`);
  }
};

export const deleteReportRequest = async (id) => {
  try {
    await axios.delete(`/Reports/Delete/${id}`);
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error.message}`);
  }
};
