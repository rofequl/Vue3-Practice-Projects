<template>
  <!--Left Side-->
  <div class="flex flex-col gap-4">
    <logo-search/>
    <div class="flex flex-col gap-4 rounded-xl p-4 bg-[#ffffffa3] h-[87vh] overflow-scroll shadow">
      <div class="flex justify-between">
        <h2 class="font-bold text-2xl tracking-wide antialiased">Chats</h2>
        <new-message/>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-1 rounded-xl">
          <div class="flex items-center space-x-4">
            <div class="relative">
              <img class="w-11 h-11 rounded-full" src="../../../assets/img/template/profileImg.jpg" alt="">
              <span
                  class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div class="font-medium leading-tight">
              <div class="font-semibold antialiased">Jese Leos</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
            </div>
          </div>
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton>
                <ellipsis-vertical-icon class="w-5 text-gray-300 hover:text-gray-400"/>
              </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
              <MenuItems
                  class="absolute right-0 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div>
                  <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-t-md px-2 py-2 text-sm']">
                      <check-icon class="mr-2 h-5 w-5"/>
                      Mark as unread
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group flex w-full items-center px-2 py-2 text-sm']">
                      <user-circle-icon class="mr-2 h-5 w-5"/>
                      View Profile
                    </button>
                  </MenuItem>
                </div>
                <div>
                  <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group flex w-full items-center px-2 py-2 text-sm']">
                      <exclamation-triangle-icon class="mr-2 h-5 w-5"/>
                      Report
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-b-md px-2 py-2 text-sm']">
                      <trash-icon class="mr-2 h-5 w-5"/>
                      Delete
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
  <!--End Left Side-->
</template>

<script setup>
import {
  TrashIcon,
  ExclamationTriangleIcon,
  CheckIcon,
  UserCircleIcon,
  EllipsisVerticalIcon
} from '@heroicons/vue/24/outline'
import LogoSearch from "../../leftProfile/profileCard/LogoSearch.vue";
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import NewMessage from "./components/NewMessage.vue";
</script>
