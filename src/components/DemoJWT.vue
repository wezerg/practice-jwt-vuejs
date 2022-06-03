<script setup>
    import { ref } from 'vue';
    import * as jose from 'jose';
    import axios from 'axios';

    const tokenSaved = ref("");
    if (localStorage.getItem('cours-token')) {
        tokenSaved.value = localStorage.getItem('cours-token');
    }

    axios.interceptors.request.use(function (config) {
        config.headers.common["x-auth-token"] = tokenSaved.value || "";
        return config;
    });

    const title = ref('');
    const token = ref("");
    const tokenDecoded = ref("");
    const tokenFromAPI = ref("");
    const userFromAPI = ref('');

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
    async function verifToken(){
        if (tokenSaved.value) {
            const response = await axios.post('http://localhost:3001/loginToken').then(res => res).catch(err => err);
            tokenFromAPI.value = response.request.response;
        }
    }
    async function getHelloWorld(){
        const response = await axios.get('http://localhost:3001/').then(res => res).catch(err => err);
        title.value = response.data;
    }
    async function getAccountInfo(){
        const response = await axios.post('http://localhost:3001/moncompte').then(res => res).catch(err => err);
        userFromAPI.value = response.data.user;
    }
</script>
<template>
    <h1>{{title}}</h1>
    <button @click="getHelloWorld()">Get title from API</button>
    <hr/>
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
    <button v-on:click="verifToken">Envoyer token</button>
    <hr/>
    <label>Récupération de l'utilisateur :</label>
    <p>{{userFromAPI}}</p>
    <button v-on:click="getAccountInfo">Récupérer utilisateur</button>
    <hr/>
</template>