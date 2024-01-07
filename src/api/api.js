import axios from "axios";


// const baseUrl = `http://localhost:5000/api/`;

// const instance = axios.create({
//     baseUrl: `http://localhost:5000/api/`,
//     headers: {},
// })

axios.get('http://localhost:5000/api/users').then((response) => {
    return response.data
})

