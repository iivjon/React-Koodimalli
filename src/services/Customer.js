import axios from "axios"

const baseUrl = "https://localhost:7136/api/Customers"

const getAll = () => {
    // const config = {
    //     headers: {Authorization: token},
    // }
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
export default{getAll}