import { createWebHistory, createRouter } from "vue-router";
import Compteur from '@/components/Compteur.vue';
import DemoBind from '@/components/DemoBind.vue';
import DemoJWT from '@/components/DemoJWT.vue';
import DemoVIF from '@/components/DemoVIF.vue';
import LoopTab from '@/components/LoopTab.vue';
import Acceuil from '@/components/Acceuil.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "acceuil",
            component: Acceuil
        },
        {
            path: "/login", 
            name: "login",
            component: Login
        },
        {
            path: "/register", 
            name: "register",
            component: Register
        },
        {
            path: "/demo/compteur", 
            name: "compteur",
            component: Compteur
        },
        {
            path: "/demo/jwt", 
            name: "demojwt",
            component: DemoJWT
        },
        {
            path: "/demo/vif", 
            name: "demovif",
            component: DemoVIF
        },
        {
            path: "/demo/bind", 
            name: "demobind",
            component: DemoBind
        },
        {
            path: "/demo/loop", 
            name: "looptab",
            component: LoopTab
        },
    ]
});

export default router;