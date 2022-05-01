import axios from 'axios';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

function createAxiosInstance(baseUrl) {
    const token = localStorage.getItem('app.token');
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axios.create({
        baseURL: baseUrl,
        headers,
        withCredentials: true
    });
}

export default {
    install: (app, options) => {
        const client = createAxiosInstance(options);
        app.config.globalProperties.$httpClient = {
            post(path, data) {
                return client.post(path, data);
            },
        }
    }
}