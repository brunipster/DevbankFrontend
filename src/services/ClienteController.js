import api from './HttpUtil';

export default {
    async postRegister(body) {
        return api.post('/usuario',body);
    },
}