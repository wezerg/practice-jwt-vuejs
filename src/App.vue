<script setup>
import { ref } from 'vue';

    const title = ref('Hello World !');
    const compteur = ref(0);
    setInterval(() => {
        compteur.value++;
    }, 1000);

    function resetCompteur(){
        compteur.value = 0;
    }
</script>

<template>
    <h1>{{title}}</h1>
    <p>Compteur : {{compteur}}</p>
    <button @click="resetCompteur">Reset</button>
</template>

<style>

</style>
