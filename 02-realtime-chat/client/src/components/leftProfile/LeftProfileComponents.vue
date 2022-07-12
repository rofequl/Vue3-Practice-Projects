<template>
  <div class="flex flex-col gap-4 items-center overflow-auto">
    <logo-search/>
    <profile-card/>
    <followers-card/>
  </div>
</template>
<script setup>
import LogoSearch from "./profileCard/LogoSearch.vue";
import ProfileCard from "./profileCard/ProfileCard.vue";
import FollowersCard from "./profileCard/FollowersCard.vue";
</script>