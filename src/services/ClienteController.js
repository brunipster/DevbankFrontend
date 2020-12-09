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
    return api.get("/cuenta/obtener/user/"+id, {params: {usuId:id,access_token: sessionStorage.getItem("token")}});
  },
  async getCuentas() {
    return api.get("/cuenta/listar", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getByUsername(username) {
    return api.get("/usuario/obtener/"+username, {params: {username,access_token: sessionStorage.getItem("token")}});
  },
};
