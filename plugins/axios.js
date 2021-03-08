import axios from "axios";
import Vue from 'vue'

import store from '../store/index'

let API_URL = "http://13.228.194.85:8181/v1"
let APP_URL = process.env.VUE_APP_APP_URL
const ajax = axios.create({
    baseURL: API_URL
})
ajax.CancelToken = axios.CancelToken
ajax.isCancel = axios.isCancel

// untuk error login
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // alert(error.response.data.message);
        // alert(error.response.data.errors.email);
        Vue.$toast.open({
            position: 'top-right',
            // message: error.response.data.message,
            message: 'Something wrong with your input.',
            type: 'error',
        });
        return Promise.reject(error);
    }
);


/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
ajax.interceptors.request.use(
    (config) => {
        let token = store.getters.isLoggedIn
        console.log("INI TOKEN YA TOT", token, "---------------------------")

        if (token !== '') {
            config.headers['Authorization'] = `Bearer ${ token }`;
            ajax.defaults.headers.post['Content-Type'] =  "application/json;charset=utf-8";
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

// check valid atau tidak tokennya
ajax.interceptors.response.use((response) => {
    if(response.status === 401) {
        alert("You are not authorized");
    }
    return response;
}, (error) => {
    if(error.response.status === 422) {
        let message = "";
        if(error.response.data.errors.id){
            message = error.response.data.errors.id
        } else if (error.response.data.errors.message) {
            message = error.response.data.errors.message
        } else{
            message = "Something wrong with your input"
        }
        Vue.$toast.open({
            position: 'top-right',
            // message: error.response.data.message,
            message: message,
            type: 'error',
        });
    }
    // if (error.response && error.response.data) {
    //     if(error.response.status === 401) {
    //         localStorage.removeItem('vuex')
    //         window.location.href = APP_URL
    //     }

    //     return Promise.reject(error.response.data);
    // }
    return Promise.reject(error.message);
});


export default {
    install () {
        Vue.prototype.$http = ajax
    }
}; // Check debug/build mode
