import axios from "axios";

const instance = axios.create({
    baseURL : '...' 
    //THE API icloud functional URL
});

export default instance;