import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// send prompt
export const createClipPlan = async (description) => {
  const res = await API.post("/demo", { description });
  return res.data;
};

export default API;