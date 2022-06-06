<template>
    <page-components>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
                <router-link :to="{name: 'SurveyCreate'}"
                             class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mt-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add new Survey
                </router-link>
            </div>
        </template>

    </page-components>
</template>

<script setup>
import PageComponents from "../components/PageComponents.vue";
</script>

<style scoped>

</style>
