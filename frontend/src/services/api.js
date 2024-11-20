import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust as per backend
});

export default api;
