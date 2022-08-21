<template>
  <div class="mt-4 flex justify-between">
    <router-link :to="{name: 'HomePage'}">
      <home-icon class="w-7 h-7 text-orange-500" v-if="$route.name === 'HomePage'"/>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-else>
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </router-link>
    <cog-icon class="w-7 h-7 text-gray-500"/>
    <bell-icon class="w-7 h-7 text-gray-500"/>
    <router-link :to="{name: 'Message'}">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-orange-500" viewBox="0 0 20 20" fill="currentColor"
           v-if="$route.name === 'Message'">
        <path fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"/>
      </svg>
      <chat-alt-icon class="w-7 h-7 text-gray-500" v-else/>
    </router-link>
  </div>
</template>

<script setup>
import {CogIcon, BellIcon, ChatAltIcon} from '@heroicons/vue/outline'
import {HomeIcon} from '@heroicons/vue/solid'
</script>
