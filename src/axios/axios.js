import axios from "axios";

const baseUrl = "http://localhost:8080/";

export const gameInstance = axios.create({
  baseURL: baseUrl,
});
