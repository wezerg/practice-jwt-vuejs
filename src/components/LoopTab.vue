<script setup>
    import { ref } from 'vue';

    const tab = ref([0, 1, 2, 3]);
    const listObject = ref([
        {id: 0, nom: "Dupont", prenom: "Alice"},
        {id: 1, nom: "Doe", prenom: "Jean"},
        {id: 2, nom: "Lefevre", prenom: "Lisa"},
        {id: 3, nom: "Grims", prenom: "Charles"}
    ]);
    const nom = ref('');
    const prenom = ref('');
    function addToList(){
        if (nom.value && prenom.value) {
            tab.value.push(listObject.value[listObject.value.length-1].id+1);
            listObject.value.push({id: listObject.value[listObject.value.length-1].id+1, nom: nom.value, prenom: prenom.value});
        }
    }
    function removeToList(id){
        listObject.value.splice(listObject.value.indexOf(listObject.value.find(elm => elm.id === id)), 1);
        tab.value.splice(tab.value.indexOf(id), 1);
    }
</script>

<template>
    <p>Tableau : {{tab}}</p>
    <ul>
        <li v-for="obj in listObject" :key="obj.id" @click="removeToList(obj.id)">
            <p>{{obj.id}} - {{obj.nom}} - {{obj.prenom}}</p>
        </li>
    </ul>
    <label>Rajouter dans le tableau :</label>
    <p>Nom :</p>
    <input type="text" v-model="nom"/>
    <p>Prénom :</p>
    <input type="text" v-model="prenom"/>
    <button @click="addToList">Ajouter</button>
    <hr/>
</template>

<style scoped>
li{
    cursor: pointer;
}
</style>