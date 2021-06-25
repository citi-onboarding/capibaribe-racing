import axios from 'axios';

const prod = process.env.NODE_ENV === "production";

let apiAxios;

if (prod){
  apiAxios = axios.create({baseURL: "https://capibariberacing.herokuapp.com/"});
} else {
  apiAxios = axios.create({baseURL: "http://localhost:3001/"});
}

export default apiAxios;
