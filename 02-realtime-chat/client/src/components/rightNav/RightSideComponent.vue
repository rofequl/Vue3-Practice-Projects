<template>
  <div class="flex flex-col gap-8">
    <navbar/>
    <div>
      <div class="flex justify-between">
        <span class="text-gray-500 text-xl">Contacts</span>
        <ellipsis-horizontal-icon class="w-6 text-gray-500 hover:text-gray-800"/>
      </div>
      <div class="flex flex-col gap-3 mt-6">
        <div class="flex gap-3 items-center">
          <div class="relative">
            <img class="w-9 h-9 rounded-full" src="../../assets/img/template/profileImg.jpg" alt="">
            <span
                class="bottom-0 left-6 bottom-0.5 absolute  w-2.5 h-2.5 bg-amber-500 border-2 border-[#d2e9f2] rounded-full"></span>
          </div>
          <span class="font-medium tracking-wide text-sm text-gray-600">Rofequl Islam Nayem</span>
        </div>
        <div class="flex gap-3 items-center">
          <div class="relative">
            <img class="w-9 h-9 rounded-full" src="../../assets/img/template/profileImg.jpg" alt="">
            <span
                class="bottom-0 left-6 bottom-0.5 absolute  w-2.5 h-2.5 bg-amber-500 border-2 border-[#d2e9f2] rounded-full"></span>
          </div>
          <span class="font-medium tracking-wide text-sm text-gray-600">Rofequl Islam Nayem</span>
        </div>



      </div>
    </div>
  </div>
</template>

<script setup>
import {EllipsisHorizontalIcon} from '@heroicons/vue/24/outline'
import Navbar from "./nav/Navbar.vue";
</script>