import axios from "axios"

//const baseUrl = "https://localhost:7136/api/Product"
const url = "https://nordwindrestapi.azurewebsites.net/api/product"

const getAll = () => {
    // const config = {
    //     headers: {Authorization: token},
    // }
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newProduct => {
    return axios.post(url,newProduct)
}

const remove = id => {
    return axios.delete(`${url}/${id}`)
}

const update = object => {
    return axios.put(`${url}/${object.productId}`,object)
}
export default{getAll, create, remove, update}