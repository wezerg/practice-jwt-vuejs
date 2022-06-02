<script setup>
    
</script>
<template>
    <header>
        <nav class="nav">
            <RouterLink class="nav-link active" to="/">Acceuil</RouterLink>
            <RouterLink class="nav-link" :to="{name: 'compteur'}">Compteur</RouterLink>
            <RouterLink class="nav-link" :to="{name: 'looptab'}">Loop</RouterLink>
            <RouterLink class="nav-link" :to="{name: 'demobind'}">Binding & Submit</RouterLink>
            <RouterLink class="nav-link" :to="{name: 'demovif'}">Conditionnal</RouterLink>
            <RouterLink class="nav-link" :to="{name: 'demojwt'}">Token</RouterLink>
        </nav>
    </header>
</template>
<style scoped>
</style>