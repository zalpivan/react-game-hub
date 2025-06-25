import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '10a6cd71c1c345d4b2682b158df0068f'
    }
});