import { ref } from "vue";

const user = ref(null);

function useUserStore(){
    return {user, connect, disconnect};
}
function connect(name){
    if (name) {
        localStorage.setItem('cours-user-name', name);
        return user.value = {name};
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
