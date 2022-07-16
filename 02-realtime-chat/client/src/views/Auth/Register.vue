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
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white
                bg-gradient-to-r from-[#f9a225] to-[#f95f35] hover:from-[#db8e20] hover:to-[#ef5c35] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <lock-closed-icon class="h-5 w-5 text-orange-300 group-hover:text-orange-200"/>
                    </span>
          Sign up
        </button>
      </div>
    </Form>
  </page-components>
</template>
<script setup>
import {LockClosedIcon} from '@heroicons/vue/solid'
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