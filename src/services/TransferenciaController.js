import api from "./HttpUtil";

export default {
    async postRegister(body) {
        return api.post("/movimiento/transferencia", body, {params: {access_token: sessionStorage.getItem("token")}});
      },
}