<template>
  <div class="relative grid gap-4 grid-cols-[18rem_auto_16rem]">
    <left-profile-components/>
    <middle-post-components/>
    <right-side-component/>
  </div>
</template>
<script setup>
import LeftProfileComponents from "../components/leftProfile/LeftProfileComponents.vue";
import MiddlePostComponents from "../components/middlePost/MiddlePostComponents.vue";
import RightSideComponent from "../components/rightNav/RightSideComponent.vue";
</script>
