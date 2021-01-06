import axios from 'axios';

const api = axios.create({
  baseURL: 'https://open.mapquestapi.com/geocoding/v1/',
});

export default api;
