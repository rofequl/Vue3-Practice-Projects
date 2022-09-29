<template>
  <div class="container-fluid">
    <div class="row">
      <sidebar/>
      <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <navbar/>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "../components/layout/Sidebar.vue";
import Navbar from "../components/layout/Navbar.vue";
</script>