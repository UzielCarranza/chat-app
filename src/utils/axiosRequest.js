import axios from 'axios';

const serverResource = (resourceUrl, request) => async () => {
    let response;
    if (request === "POST") {
        response = await axios.request(resourceUrl)
        return response.data;
    } else if (request === "GET") {
        response = await axios.get(resourceUrl)
        return response.data;
    }
}