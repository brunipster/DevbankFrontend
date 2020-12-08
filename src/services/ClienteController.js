import api from "./HttpUtil";

export default {
  async postRegister(body) {
    return api.post("/usuario", body, {params: {access_token: sessionStorage.getItem("token")}});
  },
  async postRegisterCuenta(body) {
    return api.post("/cuenta/crear", body, {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getListarClientes() {
    return api.get("/cliente/listado", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getCuentasByCliente(id) {
    return api.get("/cuenta/obtener/user/"+id, {params: {access_token: sessionStorage.getItem("token")}});
  },
};
