import axios from 'axios';

const apiAxios = axios.create({baseURL: "https://capibariberacing.herokuapp.com/api/"});

export default apiAxios;
