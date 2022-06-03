import axios from "axios";
import { ref } from "vue";

axios.interceptors.response.use(function (response) {
    console.log(response)
    /*console.log(response.config.headers['x-auth-token']);
    localStorage.setItem('cours-token', response.config.headers['x-auth-token']);*/
    return response;
});

const user = ref(null);

function useUserStore(){
    return {user, connect, disconnect};
}
async function connect(email, password){
    if (email && password) {
        const response = await axios.post('http://localhost:3001/login', {"email": email,"password": password}).then(res => res).catch(err => err);
        if (response.status !== 200) {
            return null;
        }
        return user.value = response.data;
    }
    else{
        return null;
    }
}
function disconnect(){
    if (user) {
        user.value = null;
        localStorage.removeItem('cours-user-name');
    }
}

export {useUserStore};
