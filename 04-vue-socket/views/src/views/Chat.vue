<script setup>
import io from "socket.io-client";
import {ref} from "vue";

const socket = io('http://localhost:3001');

const all_message = ref([]);
const message = ref();
const message_send = () => {
  socket.emit('message', message.value);
  message.value = ''
}
socket.on('message back', (msg) => {
  all_message.value.push(msg)
})
</script>
<template>
  <div class="mx-auto h-[89%] mt-16 max-w-7xl relative">
    <div class="h-full absolute w-full max-w-7xl py-6 sm:px-6 lg:px-8">
      <div
          class="flex h-full bottom-4 w-full flex-col antialiased text-gray-800 p-4 rounded-2xl shadow bg-white">
        <div class="flex flex-col h-full">
          <div class="flex flex-col gap-4 h-full overflow-y-auto px-4 py-1">
            <div class="py-2 px-4 shadow w-fit rounded-md bg-gray-100" v-for="all_messages in all_message">
              {{ all_messages }}
            </div>
          </div>
          <div class="flex flex-row gap-4 items-center h-16 rounded-xl bg-white w-full px-4 self-end">
            <div class="flex-grow">
              <div class="relative w-full">
                <input type="text" placeholder="Type your message..." v-model="message" v-on:keyup.enter="message_send"
                       class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-gray-50"/>
              </div>
            </div>
            <div>
              <button @click="message_send"
                      class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                <span>Send</span>
                <span class="ml-2">
                  <svg
                      class="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>