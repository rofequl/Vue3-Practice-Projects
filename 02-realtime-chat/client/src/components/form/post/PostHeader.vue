<template>
  <div class="flex justify-between items-center mb-1">
    <div class="flex gap-2">
      <img src="../../../assets/img/template/profileImg.jpg" class="w-9 h-9 rounded-full" alt=""/>
      <div class="flex flex-col items-start justify-center">
        <span class="font-medium tracking-wide">Nayem</span>
      </div>
    </div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton>
          <dots-horizontal-icon class="w-5 text-orange-400"/>
        </MenuButton>
      </div>
      <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
            class="absolute right-0 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div>
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group w-full items-center rounded-t-md px-2 py-2 text-sm text-center']">
                Unfollow
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group w-full items-center px-2 py-2 text-sm text-center']">
                Profile View
              </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group w-full items-center px-2 py-2 text-sm text-center']">
                Report
              </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
              <button :class="[active ? 'bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white' : 'text-gray-900',
                    'group w-full items-center rounded-b-md px-2 py-2 text-sm text-center']">
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import {DotsHorizontalIcon} from '@heroicons/vue/outline'
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
</script>