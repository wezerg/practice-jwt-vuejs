<script setup>
    import { useUserStore } from '@/services/userstore';
    const user = useUserStore();
</script>
<template>
    <header>
        <nav class="nav">
            <RouterLink class="nav-link active" to="/">Acceuil</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'compteur'}">Compteur</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'looptab'}">Loop</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'demobind'}">Binding & Submit</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'demovif'}">Conditionnal</RouterLink>
            <RouterLink v-if="user" class="nav-link" :to="{name: 'demojwt'}">Token</RouterLink>
            <RouterLink v-if="!user" class="nav-link ms-auto" :to="{name: 'login'}">Login</RouterLink>
            <RouterLink v-if="!user" class="nav-link" :to="{name: 'register'}">Register</RouterLink>
        </nav>
    </header>
</template>
<style scoped>
</style>