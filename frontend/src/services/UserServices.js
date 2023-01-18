import axios from "axios";

const USER_API_URL = process.env.REACT_APP_API_ENDPOINT + `user`;

class UserService {
    async getUsers(){
        const response = await axios.get(USER_API_URL);
        const data = await response.data;
        return data;
    }

    async regiserUser(user){
        return axios.post(USER_API_URL + `/register`, user, { headers: {'Content-Type':"application/json"}} );
    }

    async loginUser(user){
        return axios.post(USER_API_URL + `/login`, user, { headers: {'Content-Type':"application/json"}} );
    }
}

const userService = new UserService();

export default userService;