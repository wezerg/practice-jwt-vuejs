<script setup>
import Header from './components/Header.vue';
import { useUserStore } from './services/userstore';
    
    const {connect} = useUserStore();
    if (localStorage.getItem('cours-user-name')) {
        connect(localStorage.getItem('cours-user-name'));
    }
    /* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaWF0IjoxNjU0MjQ5NzM4fQ.bJiWPMDRefVAIQvYSfx4pRS4gcx3cyS0bXZJAz008GM */
</script>

<template>
    <Header></Header>
    <RouterView/>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
