<template>
  <div class="relative grid gap-4 grid-cols-[18rem_auto_20rem]">
    <left-profile-components/>
    <middle-post-components/>
    <div>
      <router-link to="/message">Message</router-link>
    </div>
  </div>
</template>
<script setup>
import LeftProfileComponents from "../components/leftProfile/LeftProfileComponents.vue";
import MiddlePostComponents from "../components/middlePost/MiddlePostComponents.vue";
</script>
