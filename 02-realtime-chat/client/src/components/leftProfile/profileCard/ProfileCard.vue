<template>
  <!--  User profile Info -->
  <div class="w-full rounded-2xl flex flex-col relative gap-4 bg-[#ffffffa3] overflow-x-clip shadow">
    <div class="relative flex flex-col items-center justify-center">
      <img src="https://preview.cruip.com/mosaic/images/pay-bg.jpg" alt="" class="w-full"/>
      <img src="https://preview.cruip.com/mosaic/images/user-64-13.jpg"
           class="w-24 rounded-full absolute shadow-md -bottom-12" alt=""/>
    </div>
    <div class="flex flex-col items-center mt-12 gap-1">
      <span class="font-bold">{{ user.name }}</span>
      <span>Senior UI/UX Designer</span>
    </div>
    <div class="flex flex-col items-center content-center gap-3">
      <hr class="w-10/12 border-[#cfcdcd]"/>
      <div class="flex gap-4 w-10/12 justify-around items-center">
        <div class="flex flex-col gap-2 items-center content-center">
          <span class="font-bold">{{ user.followers.length }}</span>
          <span class="text-[#242d49a6] text-xs">Followers</span>
        </div>
        <div class="h-full border-l border-gray-300"></div>
        <div class="flex flex-col gap-2 items-center content-center">
          <span class="font-bold">{{ user.following.length }}</span>
          <span class="text-[#242d49a6] text-xs">Followings</span>
        </div>
      </div>
      <hr class="w-10/12 border-[#cfcdcd]"/>
    </div>
    <span class="font-bold text-orange-400 mb-4 cursor-pointer self-center">My Profile</span>
  </div>
  <!--  End User profile Info -->
</template>

<script setup>
import {computed} from "vue";
import store from "../../../store";

const user = computed(() => store.getters.currentUser)
</script>