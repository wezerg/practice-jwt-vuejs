import { ref } from "vue";

const user = ref(null);

function useUserStore(){
    return user;
}


export {useUserStore};
