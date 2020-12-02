import api from "./HttpUtil";

export default {
  async postProcesarSolicitud(body) {
    return api.post("/api/solicitud/procesar", body);
  },
};
