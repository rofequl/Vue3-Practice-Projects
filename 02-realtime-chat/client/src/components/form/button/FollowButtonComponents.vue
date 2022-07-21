<template>
  <button class="h-7 px-3 button" :class="{'UnfollowButton':following}" @click="submit">
    {{ following ? "Unfollow" : "Follow" }}
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                       leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25"/>
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                           enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                           leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
              <DialogTitle class="text-center w-full">
                <img src="https://preview.cruip.com/mosaic/images/user-64-13.jpg"
                     class="w-24 rounded-full shadow-md mx-auto" alt=""/>
                <p class="mt-2">Unfollow @{{ username }}</p>
              </DialogTitle>
              <DialogDescription class="mt-2">
                <button class="w-full font-bold border-2 p-3" @click="unfollowPeople">
                  Unfollow
                </button>
                <button class="w-full border-2 border-t-0 p-3" @click="closeModal">
                  Cancel
                </button>
              </DialogDescription>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import store from "../../../store";
import {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription,} from '@headlessui/vue'
import {ref} from 'vue'

const props = defineProps({
  userid: String,
  username: String,
  following: Boolean,
})
const isOpen = ref(false)
const submit = () => {
  props.following ? isOpen.value = true : store.dispatch('FOLLOW_PEOPLE', props.userid);
}

const closeModal = () => {
  isOpen.value = false
}
const unfollowPeople = () => {
  store.dispatch('UNFOLLOW_PEOPLE', props.userid)
  isOpen.value = false
}

</script>
<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background: var(--buttonBg);
  transition: all 100ms ease-out;
}

.button:hover {
  cursor: pointer;
  color: var(--orange);
  background: transparent;
  border: 2px solid var(--orange);
}

.UnfollowButton {
  color: var(--orange);
  border: 2px solid var(--orange);
  background: transparent;
}

.UnfollowButton:hover {
  color: white;
  border: none;
  cursor: pointer;
  background: var(--buttonBg);
}
</style>
