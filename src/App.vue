<script setup>
import { ref } from 'vue';
import * as jose from 'jose';

    const title = ref('Hello World !');
    const compteur = ref(0);
    setInterval(() => {
        compteur.value++;
    }, 1000);

    function resetCompteur(){
        compteur.value = 0;
    }

    const token = ref("");
    const tokenDecoded = ref("");
    const tokenSaved = ref("");
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
</script>

<template>
    <h1>{{title}}</h1>
    <p>Compteur : {{compteur}}</p>
    <input type="number" v-model="compteur">
    <button @click="resetCompteur">Reset</button>
    <hr/>
    <label>Décoder mon token :</label>
    <input type="text" v-model="token">
    <button v-on:click="decodeToken">Décodage</button>
    <button v-on:click="saveToken">Sauvegarder ce token</button>
    <p>Mon token décodé : {{tokenDecoded}}</p>
    <hr/>
    <label>Mon token sauvegardé :</label>
    <p>{{tokenSaved}}</p>
</template>

<style>

</style>
