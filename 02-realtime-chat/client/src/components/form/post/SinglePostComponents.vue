<template>
  <div class="flex flex-col p-4 bg-[#ffffffa3] rounded-xl gap-2 shadow">
    <post-header/>
    <img :src="postInfo.image" alt="" class="w-full max-h-80 object-cover rounded-xl mb-4"/>
    <div class="flex items-start gap-6">
      <img src="../../../assets/img/template/notlike.png">
      <img src="../../../assets/img/template/comment.png">
      <img src="../../../assets/img/template/share.png">
    </div>
    <b class="text-gray-500 text-xs subpixel-antialiased tracking-wide">{{ postInfo.totalLikes }} likes</b>
    <div>
      <span class="text-sm subpixel-antialiased tracking-wide"><b>
        {{ postInfo.owner === "Others" ? postUser(postInfo.userId).username : user.username }}
      </b></span>
      <span class="ml-1 text-sm"> {{ postInfo.desc }}</span>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import store from "../../../store";
import PostHeader from "./PostHeader.vue";

const props = defineProps({
  postInfo: Object,
})
const postUser = computed(() => store.getters.userInfoById)
const user = computed(() => store.getters.currentUser)
</script>