import axios from 'axios';

export const weatherAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});
