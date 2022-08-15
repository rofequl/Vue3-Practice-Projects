<template>
  <div class="flex flex-col gap-4 h-screen overflow-auto max-w-xl mx-auto w-full">
    <post-create-components/>
    <post-components/>
  </div>
</template>

<script setup>
import PostComponents from "../posts/PostComponents.vue";
import PostCreateComponents from "../posts/PostCreateComponents.vue";
</script>