import axios from 'axios';

const prod = process.env.NODE_ENV === production;

let apiAxios;

if (prod){
  apiAxios = axios.create({baseURL: "http://url.com/api/"});
} else {
  apiAxios = axios.create({baseURL: "http://localhost:3001/api/"});
}

export default apiAxios;
