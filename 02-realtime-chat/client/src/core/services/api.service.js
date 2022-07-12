import axios from "axios";
import { api_base_url } from "../config/app";
import JwtService from "./jwt.service";
const apiService = axios.create({
  baseURL: api_base_url,
});

apiService.interceptors.request.use((config) => {
  config.headers.Authorization = JwtService.getToken();
  return config;
});

export default apiService;
