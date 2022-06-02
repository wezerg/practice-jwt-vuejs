<script setup>
import { useUserStore } from '@/services/userstore';
import { useRouter } from 'vue-router';
const {connect, user} = useUserStore();
const router = useRouter();
if (user.value) {
    router.push({name: "acceuil"});
}
</script>
<template>
    <h1>Login</h1>
    <form @submit.prevent="connect()">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<style>
</style>