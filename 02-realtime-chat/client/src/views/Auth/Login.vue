<template>
  <page-components title="Sign in to your account">
    <div v-if="errorMsg" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200">
      <svg class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"></path>
      </svg>
      <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
        {{ errorMsg }}
      </div>
      <button type="button" @click="errorMsg = ''"
              class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <Form class="mt-8 space-y-4" @submit="onSubmit">
      <input type="hidden" name="remember" value="true">
      <div>
        <input-components id="email-address" type="email" placeholder="Email address" autocomplete="email"
                          label="Email address" name="email" rules="required|email"/>
      </div>
      <div>
        <input-components id="password" type="password" placeholder="Password" autocomplete="current-password"
                          label="Password" name="password" rules="required|min:6"/>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox"
                 class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password?</a>
        </div>
      </div>
      <div>
        <button type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <!-- Heroicon name: solid/lock-closed -->
                        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </span>
          Sign in
        </button>
      </div>
    </Form>
  </page-components>
</template>
<script setup>
import {Form} from 'vee-validate';
import store from '../../store';
import InputComponents from "../../components/form/login/InputComponents.vue";
import PageComponents from "../../components/form/login/PageComponents.vue";
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();
let errorMsg = ref('');
const onSubmit = (values) => {
  store.dispatch('LOGIN', values)
      .then(() => {
        router.push({name: 'Home'})
      })
      .catch(err => errorMsg.value = err.response.data.error)
}
</script>