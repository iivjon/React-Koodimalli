import axios from "axios"

const baseUrl = "https://localhost:7136/api/Customers"

const getAll = () => {
    // const config = {
    //     headers: {Authorization: token},
    // }
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newCustomer => {
    return axios.post(baseUrl,newCustomer)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = object => {
    return axios.put(`${baseUrl}/${object.customerId}`,object)
}
export default{getAll, create, remove, update}