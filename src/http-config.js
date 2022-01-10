import axios from "axios";


const http = axios.create({
    baseURL : "https://diagnoseme-api.herokuapp.com"
});

export default http