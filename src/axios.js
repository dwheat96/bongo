import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-bongo-4188a.cloudfunctions.net/api'
    // 'http://localhost:5001/bongo-4188a/us-central1/api'

})

export default instance;