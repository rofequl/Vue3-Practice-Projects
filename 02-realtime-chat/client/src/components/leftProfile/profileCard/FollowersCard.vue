<template>
  <div class="w-full rounded-md gap-4 flex flex-col text-sm">
    <h3>People you may know</h3>
    <user-list-components v-for="user in knowPeople" :key="user.username" :userInfo="user"/>
    <span
        class="font-bold text-orange-400 mb-6 cursor-pointer self-center text-sm hover:text-orange-500">Show More</span>
  </div>

</template>

<script setup>
import {computed} from "vue";
import store from "../../../store";
import UserListComponents from "../../user/UserListComponents.vue";

const knowPeople = computed(() => store.getters.knowPeople)
if (!knowPeople.value.length > 0) store.dispatch('KNOW_PEOPLE');

</script>