<template>
  <div class="main-content-container container-fluid px-4 my-auto h-100">
    <div class="row no-gutters h-100">
      <div class="col-lg-3 col-md-5 auth-form mx-auto my-auto">
        <div class="card">
          <div class="card-body">
            <img class="auth-form__logo d-table mx-auto mb-3"
                 src="../../assets/img/logo.png"
                 alt="Shards Dashboards - Register Template">
            <h5 class="auth-form__title text-center mb-4">Access Your Account</h5>
            <Form @submit="onSubmit">
              <div class="form-group">
                <label for="email-address">Email address</label>
                <Field rules="required|email" name="email" v-slot="{ field, errors }">
                  <input type="email" class="form-control" id="email-address" placeholder="Enter email"
                         v-bind="field" autocomplete="email" :class="{'is-invalid': !!errors.length }"/>
                </Field>
                <div class="invalid-feedback">
                  <ErrorMessage name="email"/>
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <Field name="password" v-slot="{ field, errors }" rules="required|min:6">
                  <input type="password" class="form-control" id="password" placeholder="Password"
                         v-bind="field" :class="{'is-invalid': !!errors.length }" autocomplete="current-password"/>
                </Field>
                <div class="invalid-feedback">
                  <ErrorMessage name="password"/>
                </div>
              </div>
              <button type="submit" class="btn btn-pill btn-accent d-table mx-auto">Access Account</button>
            </Form>
          </div>
        </div>
        <div class="auth-form__meta d-flex mt-4">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import store from "../../store/index.js";
import router from "../../router/index.js";
import {ref} from "vue";

let errorMsg = ref('');
const onSubmit = (values) => {
  store.dispatch('LOGIN', {emailOrPhone: values.email, password: values.password})
      .then(() => {
        router.push({name: 'Dashboard'})
      })
      .catch(err => errorMsg.value = err.response.data.error)
}
</script>
