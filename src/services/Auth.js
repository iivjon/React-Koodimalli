import axios from "axios"

//const url = "https://localhost:7136/api/authentication"
const url = "https://nordwindrestapi.azurewebsites.net/api/authentication"

const authenticate = (userForAuth) => {
    const request = axios.post(url, userForAuth)
    return request.then(response => response)
}

export default { authenticate }