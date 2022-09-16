<template>
  <li class="animate-pulse flex items-center mb-4 space-x-2" v-for="loaderData in loaderNumber"
      :key="loaderData">
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <div class="flex-1 space-y-2">
      <div class="h-2 bg-slate-200 rounded w-2/3"></div>
      <div class="h-2 bg-slate-200 rounded w-1/2"></div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  loaderNumber: Number,
})
</script>