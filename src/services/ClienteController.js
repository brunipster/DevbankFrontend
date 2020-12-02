import api from "./HttpUtil";

export default {
  async postRegister(body) {
    return api.post("/usuario", body);
  },
  async postRegisterCuenta(body) {
    return api.post("/cuenta/crear", body);
  },
};
