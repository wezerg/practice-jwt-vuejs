<script setup>
import { useUserStore } from '@/services/userstore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const {connect, user} = useUserStore();
const router = useRouter();
const name = ref('');
if (user.value) {
    router.push({name: "acceuil"});
}
function connexion(){
    const response = connect(name.value);
    response && (router.push({name: "acceuil"}));
}
</script>
<template>
    <h1>Login</h1>
    <form @submit.prevent="connexion()">
        <div class="form-group mb-3">
            <label for="loginName">Name</label>
            <input type="text" v-model="name" class="form-control" id="loginName" placeholder="Enter name">
        </div>
        <button type="submit" class="btn btn-success">Connexion</button>
    </form>
</template>
<style>
</style>