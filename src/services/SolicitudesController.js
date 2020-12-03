import api from "./HttpUtil";

export default {
  async postProcesarSolicitud(body) {
    return api.post("/solicitud/procesar", body, {params: {access_token: sessionStorage.getItem("token")}});
  },
};
