<template>
  <page-components title="Create a new account" :login="false">
    <Form class="mt-8 space-y-4" @submit="onSubmit">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <input-components id="first-name" type="text" placeholder="First Name" autocomplete="first-name"
                            label="First Name" name="first_name" rules="required|alpha_spaces|max:100"/>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <input-components id="last-name" type="text" placeholder="Last Name" autocomplete="last-name"
                            label="Last Name" name="last_name" rules="required|alpha_spaces|max:100"/>
        </div>
      </div>
      <div>
        <input-components id="email-address" type="email" placeholder="Email" autocomplete="email" label="Email"
                          name="email" rules="required|email|max:100"/>
      </div>
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <input-components id="password" type="password" placeholder="Password"
                            autocomplete="current-password" label="Password" name="password"
                            rules="required|min:6|max:20"/>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <input-components id="confirm-password" type="password" placeholder="Confirm Password"
                            autocomplete="confirm-password" label="Confirm Password" name="confirm_password"
                            rules="required|min:6|max:20|confirmed:@password"/>
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
          Sign up
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
import {useRouter} from 'vue-router'

const router = useRouter();
const schema = {
  first_name: 'required|min:3|max:50|alpha_spaces',
  last_name: 'required|min:3|max:50|alpha_spaces',
  email: 'required|min:3|max:20|email',
  password: 'required',
  password_confirmation: 'password_mismatch:@password',
};
const onSubmit = (values, actions) => {
  store.dispatch('REGISTER', values)
      .then(() => {
        router.push({name: 'Home'})
      })
      .catch(err => {
        err.response.data.errors.email ? actions.setFieldError('email', err.response.data.errors.email.msg) : '';
      })
}
</script>