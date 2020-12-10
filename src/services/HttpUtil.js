const axios = require("axios");
let httpUtil = axios.create({
  // baseURL: "http://138.68.57.178/ciber-banca/api",
  baseURL: "http://localhost:8080/api",
  headers: { "Content-Type": "application/json" },
})

httpUtil.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status == 401){
    sessionStorage.removeItem("token");
  }
  return Promise.reject(error);
});

export default httpUtil;

var credentials = btoa("bancaElectronica" + ':' + "banca");
export const httpUtilOauth = axios.create({
  // baseURL: "http://138.68.57.178/ciber-banca/",
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset-UTF-8",
    "Authorization": "Basic " + credentials,
  },
});
