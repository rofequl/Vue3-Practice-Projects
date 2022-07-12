<script setup>
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
    id: String,
    type: String,
    autocomplete: String,
    placeholder: String,
    label: String,
    name: String,
    rules: String,
})
</script>
<template>
<div>
<label :for="id" class="sr-only">{{ label }}</label>
    <Field :id="id" :name="name" :type="type" :autocomplete="autocomplete" required class="appearance-none relative block w-full px-3 py-2 
                            border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 
                            focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-100 focus:bg-white"
        :placeholder="placeholder" :rules="rules" />
    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"><ErrorMessage :name="name" /></span>
</div>
</template>
