import axios from "axios"
import config from "../config";

const getProducts = () => {
    return axios.get(`${config.host}/api/products`);
}

const addProduct = (data) => {
    var formData = new FormData();
    formData.append("brand", data.brand);
    formData.append("model", data.model);
    formData.append("price", data.price);
    formData.append("inStock", data.inStock);
    formData.append("img", data.image);

    var configObj = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return axios.post(`${config.host}/api/products`, formData, configObj);
}

export { getProducts, addProduct }