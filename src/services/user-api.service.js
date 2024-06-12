import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:5168',
    headers : {
        'Authorization' :'Bearer ' +  sessionStorage.getItem('jwt')
    }
})
export class UserApiService {
    async getAll() {
        return await http.get('users')
    }
    async getById(id) {
        return await http.get('users/'+id)
    }
    async create(body) {
        return await http.post('v1/user/register',body)
    }
    async update(body,id) {
        return await http.put('users/'+id,body)
    }    async delete(id) {
        return await http.delete('users/'+id)
    }
}