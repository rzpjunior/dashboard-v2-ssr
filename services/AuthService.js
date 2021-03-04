import axios from 'axios';
// const url = process.env.VUE_APP_API_URL;
var url = "http://13.228.194.85:8181/v1";
export default {
    login(credentials) {
        return axios
            .post(url + '/auth', credentials)
            .then(response => response.data);
    },
};