<script setup>
import { ref } from 'vue';

    const title = ref('Hello World !');
    const compteur = ref(0);
    setInterval(() => {
        compteur.value++;
    }, 1000);
</script>

<template>
    <h1>{{title}}</h1>
    <p>Compteur : {{compteur}}</p>
</template>

<style>

</style>
