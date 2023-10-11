import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7563/api",
  withCredentials: true,
});

export default instance;
