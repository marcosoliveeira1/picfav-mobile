import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://159.65.219.139',
  baseURL: 'http://localhost:3333',
});

export default api;
