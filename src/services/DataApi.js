import axios from 'axios';

const DataApi = axios.create({
    baseURL: "http://localhost:3333/"
});
//http://172.16.8.39
export default DataApi;