import { ref } from "vue";

const user = ref(null);

function useUserStore(){
    return {user, connect, disconnect};
}
function connect(){
    console.log("Connexion réussie");
}
function disconnect(){
    console.log("Déconnexion réussie");
}

export {useUserStore};
