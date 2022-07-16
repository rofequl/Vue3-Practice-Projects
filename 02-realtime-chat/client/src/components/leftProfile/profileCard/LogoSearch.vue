<template>
  <!--  Logo and search option  -->
  <div class="flex gap-3 w-full">
    <img class="w-10" src="../../../assets/img/logo.png" alt="Logo">
    <div class="flex bg-[#28343e12] rounded-xl p-1 h-10 mt-1 w-full">
      <input type="text" placeholder='Search'
             class="bg-transparent w-full border-none outline-none focus:outline-none focus:ring-0"/>
      <div
          class="flex items-center content-center rounded-xl p-1 text-white bg-gradient-to-r from-[#f99827] to-[#f95f35]">
        <search-icon class="h-6 w-6"/>
      </div>
    </div>
  </div>


  <!--  End Logo and search option  -->
</template>

<script setup>
import {SearchIcon} from '@heroicons/vue/outline'
</script>
