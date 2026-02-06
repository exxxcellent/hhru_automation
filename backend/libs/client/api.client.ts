import axios from 'axios';

const baseURL = 'https://api.hh.ru/';

export const apiClient = axios.create({
    baseURL,
});
