<template>
  <div class="flex gap-4 p-4 rounded-xl bg-[#ffffffa3] shadow">
    <img src="../../assets/img/template/profileImg.jpg" alt="" class="rounded-full w-12 h-12"/>
    <div class="flex flex-col w-full gap-4">
      <input type="text" placeholder="What's happening?" v-model="post.desc"
             class="bg-[#28343e12] rounded-md text-sm p-2 border-none outline-none focus:outline-none focus:ring-0"/>
      <div class="flex justify-between">
        <div class="p-1 px-3 flex items-center justify-center text-xs rounded-xl hover:cursor-pointer text-[#4CB256]"
             @click="imageRef.click()">
          <photo-icon class="h-4 w-4"/>
          Photo
        </div>
        <button class="button p-1 px-3 text-xs h-6 w-14"
                :class="[post.image? 'cursor-pointer':'cursor-not-allowed']" @click="submit">Share
        </button>
        <div class="hidden">
          <input type="file" ref="imageRef" @change="onImageChange">
        </div>
      </div>
      <div class="relative" v-if="post.image">
        <x-mark-icon class="absolute right-4 top-2 cursor-pointer w-4 bg-[#ffffff85] rounded-full"
                @click="() => post.image = ''"/>
        <img :src="showImage(post.image)" alt=""
             class="w-full max-h-80 object-cover rounded-xl"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {PhotoIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import {ref} from "vue";
import store from "../../store";
import apiService from "../../core/services/api.service";

const imageRef = ref();
const post = ref({
  desc: '',
  image: '',
})

const onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    post.value.image = file;
  }
};

const showImage = (event) => event ? URL.createObjectURL(event) : ''

const submit = () => {
  if (post.value.image) {
    const data = new FormData();
    data.append("desc", post.value.desc);
    data.append("image", post.value.image);
    store.dispatch('CREATE_NEW_POST', data)
    post.value.image = ''
    post.value.desc = ''
  }
}
</script>
