import axios from "axios";
const { REACT_APP_API_URL, REACT_APP_API_URL_PROD, NODE_ENV } = process.env;

const apiUrl =
  NODE_ENV === "production" ? REACT_APP_API_URL_PROD : REACT_APP_API_URL;

console.log("asda", apiUrl);

const Client = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default Client;
