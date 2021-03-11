import Vue from 'vue'
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

const token = localStorage.getItem('ravyynToken');
if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

api.interceptors.response.use(
    response => response,
    error => {
        console.error(error.response);
        
        const vm = new Vue();
        const message = 'Error occurred';
        const options = {
            title: `${error.response.statusText} (${error.response.status})`,
            variant: 'danger',
            solid: true
        };

        vm.$bvToast.toast(message, options);

        return Promise.reject(error)
    }
)

export {
    api
}