<script setup>
import Header from './components/Header.vue';
import { useUserStore } from './services/userstore';
    
    const {user} = useUserStore();
    if (localStorage.getItem('cours-user-name')) {
        user.value = {name: localStorage.getItem('cours-user-name')}
    }
</script>

<template>
    <Header></Header>
    <RouterView/>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
