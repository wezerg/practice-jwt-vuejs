<script setup>
    import { ref } from 'vue';
    import * as jose from 'jose';
    import axios from 'axios';

    const token = ref("");
    const tokenDecoded = ref("");
    const tokenSaved = ref("");
    const tokenFromAPI = ref("");
    function decodeToken(){
        if (token.value) {
            const claims = jose.decodeJwt(token.value);
            tokenDecoded.value = claims;
        }
    }
    function saveToken(){
        if (token.value) {
            localStorage.setItem('cours-token', token.value);
            tokenSaved.value = token.value;
        }
    }
    if (localStorage.getItem('cours-token')) {
        tokenSaved.value = localStorage.getItem('cours-token');
    }
    async function getTokenFromAPI(){
        if (tokenSaved.value) {
            const instance = axios.create({headers: {"X-Auth-Token": tokenSaved.value}});
            const response = await instance.post('http://localhost:3001/loginToken').then(res => res).catch(err => err);
            tokenFromAPI.value = response.request.response;
        }
    }
    getTokenFromAPI();
</script>
<template>
    <label>Décoder mon token :</label>
    <input type="text" v-model="token">
    <button v-on:click="decodeToken">Décodage</button>
    <button v-on:click="saveToken">Sauvegarder ce token</button>
    <p>Mon token décodé : {{tokenDecoded}}</p>
    <hr/>
    <label>Mon token sauvegardé :</label>
    <p>{{tokenSaved}}</p>
    <hr/>
    <label>Connexion à l'api :</label>
    <p>{{tokenFromAPI}}</p>
    <hr/>
</template>