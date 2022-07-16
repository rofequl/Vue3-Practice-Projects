<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-3">
      <img src="https://preview.cruip.com/mosaic/images/user-64-13.jpg" class="w-12 h-12 rounded-full" alt=""/>
      <div class="flex flex-col items-start justify-center">
        <span class="font-semibold tracking-wide">{{ userInfo.name }}</span>
        <span class="font-light antialiased text-gray-500">@{{ userInfo.username }}</span>
      </div>
    </div>
    <follow-button-components :userid="userInfo._id" :following="user.following.includes(userInfo._id)"/>
  </div>
</template>

<script setup>
import FollowButtonComponents from "../form/button/FollowButtonComponents.vue";
import {computed} from "vue";
import store from "../../store";

const props = defineProps({
  userInfo: Object,
})

const user = computed(() => store.getters.currentUser)
</script>

<style scoped>

</style>