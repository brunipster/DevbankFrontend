//import api from "./HttpUtil";
const axios = require("axios");
const qs = require("qs");

const credenciales = "YmFuY2FFbGVjdHJvbmljYTpiYW5jYQ==";
const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset-UTF-8",
    Authorization: "Basic " + credenciales,
  },
});

export default {
  async postLogin(body) {
    //const params = new URLSearchParams();
    //params.append(JSON.stringify(body));
    return api.post("/oauth/token", qs.stringify(body));
  },
};
