<script setup>
import { ref } from 'vue';

    const compteur = ref(0);
    setInterval(() => {
        compteur.value++;
    }, 1000);

    function resetCompteur(){
        compteur.value = 0;
    }
</script>
<template>
    <p>Compteur : {{compteur}}</p>
    <input type="number" v-model="compteur">
    <button @click="resetCompteur">Reset</button>
    <hr/>
</template>