import axios from "./axios.js";

export const loginRequest = async (user) => {
  try {
    const res = await axios.post("/Users/Login", user);
    return res.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const getOneUserRequest = async (id) => {
  try {
    const res = await axios.get(`/Users/${id}`);
    return res.data.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
