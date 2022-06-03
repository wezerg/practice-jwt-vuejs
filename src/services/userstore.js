import axios from "axios";
import { ref } from "vue";


axios.interceptors.request.use(function (config) {
    config.headers['x-auth-token'] = localStorage.getItem('cours-token') || "";
    return config;
});

axios.interceptors.response.use(function (response) {
    return response;
});

const user = ref(null);

function useUserStore(){
    return {user, connect, disconnect, autoConnect};
}
async function connect(email, password){
    if (email && password) {
        const response = await axios.post('http://localhost:3001/login', {"email": email,"password": password}).then(res => res).catch(err => err);
        if (response.status !== 200) {
            return null;
        }
        localStorage.setItem('cours-token', response.headers['x-auth-token']);
        return user.value = response.data.user;
    }
    else{
        return null;
    }
}
async function autoConnect(){
    if (localStorage.getItem('cours-token')) {
        const response = await axios.post('http://localhost:3001/moncompte').then(res => res).catch(err => err);
        if (response.status !== 200) {
            localStorage.removeItem('cours-token');
            return null;
        }
        user.value = response.data.user;
    }
}
function disconnect(){
    if (user) {
        user.value = null;
        localStorage.removeItem('cours-user-name');
    }
}

export {useUserStore};
