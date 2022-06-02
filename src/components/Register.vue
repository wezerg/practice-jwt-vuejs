<script setup>
import { useUserStore } from '@/services/userstore';
import { useRouter } from 'vue-router';
const {user} = useUserStore();
const router = useRouter();
if (user.value) {
    router.push({name: "acceuil"});
}
</script>
<template>
    <h1>Register</h1>
</template>
<style>
</style>