import axios from "axios"

//const baseUrl = "https://localhost:7136/api/Users"
const url = "https://nordwindrestapi.azurewebsites.net/api/users"

const getAll = () => {
    // const config = {
    //     headers: {Authorization: token},
    // }
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = newUser => {
    return axios.post(url,newUser)
}

const remove = id => {
    return axios.delete(`${url}/${id}`)
}

const update = object => {
    return axios.put(`${url}/${object.userId}`,object)
}
export default{getAll, create, remove, update}