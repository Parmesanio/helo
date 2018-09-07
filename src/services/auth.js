import axios from 'axios';


export const register = function(username, password, profile_url) {
    console.log(username, password);
    
    return axios.post('/api/users', {username, password, profile_url})
        .then(res => console.log(res.data))
        .catch(err => console.log('Err in auth.register', err))
}