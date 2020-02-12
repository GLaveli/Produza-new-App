import axios from 'axios';

const DataApi = axios.create({
    baseURL: "http://172.16.8.39:3333/"
});
//http://172.16.8.39
export default DataApi;