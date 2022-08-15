<template>
  <div class="flex flex-col gap-4">
    <single-post-components v-for="post in timelinePost" :key="post._id" :postInfo="post"/>
  </div>
</template>

<script setup>
import {computed} from "vue";
import store from "../../store";
import SinglePostComponents from "../form/post/SinglePostComponents.vue";

const timelinePost = computed(() => store.getters.timelinePost)
if (!timelinePost.value.length > 0) store.dispatch('TIMELINE_POST');
</script>
