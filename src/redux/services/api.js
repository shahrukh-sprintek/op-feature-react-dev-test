import axios from "axios";
const baseURL = "https://cors-anywhere.herokuapp.com/http://52.87.193.251/";
const API = axios.create({
    baseURL,
    timeout: 60000,
});

export default API
