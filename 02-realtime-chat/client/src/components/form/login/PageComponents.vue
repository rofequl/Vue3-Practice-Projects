<script setup>
const props = defineProps({
    title: String,
    login: {default: true, type: Boolean}
})
</script>
<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-sm w-full space-y-8 bg-white p-5 rounded-3xl shadow-md">
            <div>
                <img class="mx-auto h-24 w-auto" src="../../../assets/img/logo.png" alt="Workflow">
                <h2 class="text-center text-3xl font-extrabold text-gray-900">{{title}}</h2>
                <p v-if="login" class="mt-2 text-center text-sm text-gray-600">
                   Or don't have an account
                    <router-link :to="{name: 'Register'}" class="font-medium text-indigo-600 hover:text-indigo-500"> Sign up </router-link>
                </p>
                <p v-else class="mt-2 text-center text-sm text-gray-600">
                    Or have an account
                    <router-link :to="{ name: 'Login' }" class="font-medium text-indigo-600 hover:text-indigo-500"> Sign In </router-link>
                </p>
            </div>
            <slot />
        </div>
    </div>
</template>