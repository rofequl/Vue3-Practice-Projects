<template>
  <pencil-square-icon class="w-7 h-7 bg-[#28343e12] rounded-full p-1 text-orange-500 cursor-pointer hover:shadow"
                      @click="openModal"/>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="isOpen = false" class="relative z-10">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"/>
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                <div class="flex items-start pt-2 px-4 rounded-t border-b">
                  <h5 class="text-xl font-medium text-gray-900 ml-auto">New Message</h5>
                  <button @click="isOpen = false"
                          class="text-gray-400 bg-transparent text-sm p-1.5 ml-auto inline-flex items-center hover:text-gray-500 focus:outline-0">
                    <x-mark-icon class="w-5 h-5"/>
                  </button>
                </div>
              </DialogTitle>
              <DialogDescription class="text-lg font-medium leading-6 text-gray-900 border-b">
                <label class="relative block">
                  <span class="sr-only">Search</span>
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-base">To:</span>
                  <input
                      class="placeholder:text-slate-400 block bg-white w-full py-2 pl-9 pr-3 border-none outline-none focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search..." type="text" autofocus/>
                </label>
              </DialogDescription>
              <div class="min-h-[20rem] max-h-80 overflow-scroll">
                <ul role="list" class="p-1">
                  <li class="flex px-4 py-2 items-center space-x-2 hover:bg-gray-200 hover:rounded-md cursor-pointer"
                      v-for="(user, index) in newMessage" :key="index" @click="userChat(user)">
                    <img class="h-11 w-11 rounded-full" src="../../../../assets/img/template/profileImg.jpg" alt=""/>
                    <div class="font-medium text-sm leading-tight">
                      <p class="font-semibold tracking-wide antialiased text-slate-900">{{ user.name }}</p>
                      <p class="text-slate-500">{{ user.username }}</p>
                    </div>
                  </li>
                  <friend-list :loaderNumber='loader'/>
                </ul>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {PencilSquareIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription,} from '@headlessui/vue'
import FriendList from "../../../helper/skeleton/FriendList.vue";
import {computed, ref} from 'vue'
import store from "../../../../store";

const newMessage = computed(() => store.getters.newMessage)
const isOpen = ref(false)
const loader = ref(6)
const openModal = async () => {
  isOpen.value = true
  if (!newMessage.value.length > 0) await store.dispatch('NEW_MESSAGE');
  loader.value = 0
}

const userChat = (e) => {
  store.dispatch('CHAT_BOX_MESSAGE', e);
  isOpen.value = false
}

</script>
