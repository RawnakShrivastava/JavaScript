import axios from 'axios';

const instance = axios.create({
    baseURL : "https://reqres.in/api/users?page=1",
});


export default instance;