<template>
  <div class="flex flex-col gap-4">
    <navbar class="w-64 self-end"/>
    <div class="bg-[#ffffffa3] rounded-xl grid-rows-2 h-[87vh]" v-if="chatUser._id">
      <div class="gap-0 grid grid-cols-[auto_0.1rem_16rem] 2xl:grid-cols-[auto_0.1rem_22rem] h-full">
        <!--Left side chat user info-->
        <div class="grid grid-rows-[12vh_64vh_10vh]">
          <div class="flex items-center space-x-4 p-3 pb-0 shadow">
            <div class="relative">
              <img class="w-11 h-11 rounded-full" src="../../../assets/img/template/profileImg.jpg" alt="">
              <span
                  class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div class="font-medium leading-tight">
              <div class="font-semibold antialiased">{{ chatUser.name }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">active now</div>
            </div>
          </div>
          <div class="flex flex-col gap-1 p-3 overflow-scroll">
            <div v-for="(chatMessages, i) in chatMessage" :key="i"
                 :class="currentUser._id == chatMessages.senderId? 'self-end from-[#27c1cb] to-[#358ff9] rounded-br-none': 'from-[#f99827] to-[#f95f35] rounded-bl-none '"
                 class="bg-gradient-to-r p-2 rounded-xl text-white w-fit max-w-7xl flex flex-col">
              <span class="text-ase">{{ chatMessages.text }}</span>
              <span class="text-xs self-end">{{ moment(chatMessages.updatedAt).fromNow() }}</span>
            </div>
          </div>
          <div class="flex justify-between h-14 items-center gap-4 p-3 self-end">
            <button type="button" class="p-1.5 text-gray-500 rounded-lg border border-orange-100 bg-[#c3c3c336] cursor-pointer hover:text-gray-600
              hover:bg-[#bba6a636] hover:border-orange-200">
              <plus-icon class="w-4 h-4"/>
            </button>
            <div class="flex bg-[#28343e12] rounded-lg h-8 px-2 w-full border border-orange-200">
              <textarea rows="1" placeholder="Your message..."
                        class="resize-none items-center content-center bg-transparent w-full p-1 border-none outline-none text-sm text-gray-900 focus:outline-none focus:ring-0"></textarea>
              <div class="flex items-center content-center cursor-pointer text-orange-400 hover:text-orange-500">
                <face-smile-icon class="w-6 h-6"/>
              </div>
            </div>
            <button type="submit" class="p-1.5 text-orange-500 rounded-full cursor-pointer hover:bg-gray-200">
              <paper-airplane-icon class="h-5 w-5"/>
            </button>
          </div>
        </div>
        <!--End Left side chat user info-->
        <!--Right side chat user info-->
        <div class="h-full border-l border-gray-300"></div>
        <div class="w-full flex flex-col relative gap-4 overflow-x-clip">
          <div class="flex flex-col items-center justify-center mt-10">
            <img src="../../../assets/img/template/profileImg.jpg"
                 class="w-16 rounded-full shadow-md" alt=""/>
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="font-bold">{{ chatUser.name }}</span>
            <span>Senior UI/UX Designer</span>
          </div>
        </div>
        <!--End Right side chat user info-->
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import {ref, onMounted, computed} from "vue";
import {PlusIcon, FaceSmileIcon} from '@heroicons/vue/24/outline'
import {PaperAirplaneIcon} from '@heroicons/vue/24/solid'
import store from "../../../store";
import Navbar from "../../rightNav/nav/Navbar.vue";

const currentUser = computed(() => store.getters.currentUser)
const chatUser = computed(() => store.getters.chatUser)
const chatMessage = computed(() => store.getters.chatUserMessage)
const scroll = ref();
onMounted(() => {
  scroll.value?.scrollIntoView({behavior: "smooth"});
})
</script>

