import axios from 'axios';

const apiAxios = axios.create({
  baseURL: "http://localhost:3001/api-axios/"
});

export default apiAxios;