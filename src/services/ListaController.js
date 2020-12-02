import api from "./HttpUtil";

export default {
  async getAgencias() {
    return api.get("/listar/agencia");
  },
  async getProductos() {
    return api.get("/listar/producto");
  },
  async getTipoCuenta() {
    return api.get("/listar/tipoCuenta");
  },
  async getTipoDocumento() {
    return api.get("/listar/tipoDocumento");
  },
  async getTipoMoneda() {
    return api.get("/listar/tipoMoneda");
  },
  async getCuentas() {
    return api.get("/cuenta/listar");
  },
};
