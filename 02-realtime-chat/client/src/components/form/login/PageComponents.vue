<script setup>
const props = defineProps({
    title: String,
    login: {default: true, type: Boolean}
})
</script>
<template>
    <div class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f3f3f3]">
        <div class="max-w-sm w-full space-y-8 bg-white p-5 rounded-3xl shadow-md">
            <div>
                <img class="mx-auto h-16 w-auto" src="../../../assets/img/logo.png" alt="Workflow">
                <h2 class="text-center text-2xl font-extrabold text-gray-900">{{title}}</h2>
                <p v-if="login" class="mt-2 text-center text-sm text-gray-600">
                   Or don't have an account
                    <router-link :to="{name: 'Register'}" class="font-medium text-[#fca61f] hover:text-orange-500"> Sign up </router-link>
                </p>
                <p v-else class="mt-2 text-center text-sm text-gray-600">
                    Or have an account
                    <router-link :to="{ name: 'Login' }" class="font-medium text-[#fca61f] hover:text-orange-500"> Sign In </router-link>
                </p>
            </div>
            <slot />
        </div>
    </div>
</template>