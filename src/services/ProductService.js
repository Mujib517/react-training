import axios from "axios"
import config from "../config";

const getConfig = () => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token
        }
    };

    return config;
}

const getProducts = (pageIndex, pageSize) => {
    return axios.get(`${config.host}/api/products/${pageIndex}/${pageSize}`, getConfig());
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
            'content-type': 'multipart/form-data',
            authorization: localStorage.getItem("token")
        },
    };
    return axios.post(`${config.host}/api/products`, formData, configObj);
}

const deleteProduct = (id) => {
    return axios.delete(`${config.host}/api/products/${id}`, getConfig());
}

const getProductById = (id) => {
    return axios.get(`${config.host}/api/products/${id}`, getConfig());
}

export { getProducts, addProduct, deleteProduct, getProductById }