import axios from "axios"

const baseUrl = "https://localhost:7136/api/Users"

const getAll = () => {
    // const config = {
    //     headers: {Authorization: token},
    // }
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newUser => {
    return axios.post(baseUrl,newUser)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = object => {
    return axios.put(`${baseUrl}/${object.userId}`,object)
}
export default{getAll, create, remove, update}