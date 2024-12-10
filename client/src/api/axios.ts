import axios from "axios";

const instance = axios.create({
  baseURL: "https://rest-crud-auth.onrender.com/api",
  withCredentials: true,
});

export default instance;
