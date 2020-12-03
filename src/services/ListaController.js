import api from "./HttpUtil";

export default {
  async getAgencias() {
    return api.get("/listar/agencia", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getProductos() {
    return api.get("/listar/producto", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getTipoCuenta() {
    return api.get("/listar/tipoCuenta", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getTipoDocumento() {
    return api.get("/listar/tipoDocumento", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getTipoMoneda() {
    return api.get("/listar/tipoMoneda", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getCuentas() {
    return api.get("/cuenta/listar", {params: {access_token: sessionStorage.getItem("token")}});
  },
  async getCuentas() {
    return api.get("/cuenta/listar", {params: {access_token: sessionStorage.getItem("token")}});
  },
};
