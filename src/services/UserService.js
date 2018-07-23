import axios from 'axios';

const url = 'https://eshop-752ae.firebaseio.com/users.json';

const userService  = {
    getUsers: async () =>{
        return await axios.get(url);
    }
}

export default userService;