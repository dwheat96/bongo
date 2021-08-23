import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/bongo-4188a/us-central1/api'

})

export default instance;