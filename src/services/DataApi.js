import axios from 'axios';

const DataApi = axios.create({
    baseURL: "http://172.16.8.39:3333/"
});
export default DataApi;