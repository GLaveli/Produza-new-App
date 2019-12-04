import axios from 'axios';

const DataApi = axios.create({
    baseURL: "http://177.71.121.7:3001/"
});

export default DataApi;