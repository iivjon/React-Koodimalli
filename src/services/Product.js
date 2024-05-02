import axios from "axios"

const baseUrl = "https://localhost:7136/api/Product"

const getAll = () => {
    // const config = {
    //     headers: {Authorization: token},
    // }
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newProduct => {
    return axios.post(baseUrl,newProduct)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = object => {
    return axios.put(`${baseUrl}/${object.productId}`,object)
}
export default{getAll, create, remove, update}