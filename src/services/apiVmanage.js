import axios from 'axios';

const vmanage = axios.create({
    baseURL: "http://177.71.121.7:3001/"
});

export default vmanage;