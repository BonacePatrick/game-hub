import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '93fb79af9b664ec0ac66bab35f6a3c75'
    }
})
