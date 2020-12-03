import {httpUtilOauth} from "./HttpUtil";
const qs = require("qs");

export default {
  async postLogin(body) {
    return httpUtilOauth.post("/oauth/token", qs.stringify(body));
  },
  async postProcesarSolicitud(body) {
    return httpUtilOauth.post("/api/solicitud/procesar", qs.stringify(body));
  },
};
