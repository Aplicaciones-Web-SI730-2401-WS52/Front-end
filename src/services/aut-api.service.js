import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000'
})
export class AuthApiService {
    async login(body) {
        return await http.post('login',body)
    }
}