<script setup>
    import { useUserStore } from '@/services/userstore';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const {user, disconnect} = useUserStore();
    function deconnexion(){
        disconnect();
        router.push({name: "acceuil"});
    }
</script>
<template>
    <header>
        <nav class="nav">
            <h3 class="navbar brand">{{!user ? "Welcome" : `Hey ${user.name}`}}</h3>
            <RouterLink class="nav-link active" to="/">Acceuil</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'compteur'}">Compteur</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'looptab'}">Loop</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'demobind'}">Binding & Submit</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'demovif'}">Conditionnal</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'demojwt'}">Token</RouterLink>
            <RouterLink v-if="!user" class="nav-link ms-auto" :to="{name: 'login'}">Login</RouterLink>
            <RouterLink v-if="!user" class="nav-link" :to="{name: 'register'}">Register</RouterLink>
            <button class="btn btn-danger ms-auto" v-if="user" @click="deconnexion()">Déconnexion</button>
        </nav>
    </header>
</template>
<style scoped>
</style>