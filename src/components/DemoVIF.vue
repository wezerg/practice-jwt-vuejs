<script setup>
import { ref } from 'vue';

    const bool = ref(false);
    const user = {name: "Vivian"};
    function setBool(){
        bool.value = !bool.value;
    }
</script>
<template>
    <p>Affichage conditionnel : </p>
    <p v-if="bool">Je suis connecté avec {{user.name}}</p>
    <p v-else>Je ne suis pas connecté</p>
    <button v-on:click="setBool">{{bool ? "Déconnexion" : "Connexion"}}</button>
    <hr/>
</template>
<style>
</style>