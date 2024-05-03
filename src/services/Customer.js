import axios from "axios"

//const baseUrl = "https://localhost:7136/api/Customers"
const url = "https://nordwindrestapi.azurewebsites.net/api/Customers"

let token = null

//Tämä on metodi jota kutsutaan aina kuin tehdään muu pyyntö serviceen
//Parametrina annetaan token joka otetaan local storagesta
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
     const config = {
         headers: { Authorization: token },
     }
    const request = axios.get(url, config)
    return request.then(response => response.data)
}

const create = newCustomer => {
    const config = {
        headers: { Authorization: token },
    }
    return axios.post(url,newCustomer, config)
}

const remove = id => {
    const config = {
        headers: { Authorization: token },
    }
    return axios.delete(`${url}/${id}`, config)
}

const update = object => {
    const config = {
        headers: { Authorization: token },
    }
    return axios.put(`${url}/${object.customerId}`,object, config)
}
export default{getAll, create, remove, update, setToken}