import axios from 'axios';

const serverResource = (resourceUrl, request, objToCreat) => async () => {
    let response;
    if (request === "POST") {
        response = await axios.post(resourceUrl,{objToCreat})
        return response.data;
    } else if (request === "GET") {
        response = await axios.get(resourceUrl)
        return response.data;
    }
}