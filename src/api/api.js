import axios from "axios";


const baseUrl = `http://localhost:5000/api/swagger/#/default/get_api_users`;

const instance = axios.create({
    baseUrl: `http://localhost:5000/api/swagger/#/default/get_api_users`,
    headers: {},
})

axios.get(baseUrl).then((response) => {
    return response.data
})

// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 2) {
//         return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data
//             });
//     }
// }