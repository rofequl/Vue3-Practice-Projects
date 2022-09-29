<template>
  <div class="main-navbar sticky-top bg-white">
    <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
      <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
        <div class="input-group input-group-seamless ml-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-search"></i>
            </div>
          </div>
          <input class="navbar-search form-control" type="text" placeholder="Search for something..."
                 aria-label="Search">
        </div>
      </form>
      <ul class="navbar-nav border-left flex-row ">
        <li class="nav-item dropdown">
          <a-dropdown :trigger="['click']">
            <a class="nav-link dropdown-toggle text-nowrap px-3" href="#">
              <img class="user-avatar rounded-circle mr-2" src="../../assets/img/avatar.png" alt="User Avatar">
              <span class="d-none d-md-inline-block">Sierra Brooks</span>
            </a>
            <template #overlay>
              <a-menu class="dropdown">
                <a-menu-item>
                  <i class="material-icons"></i> Profile
                </a-menu-item>
                <a-menu-item>
                  <i class="material-icons">person_add</i> Role Permission
                </a-menu-item>
                <a-menu-item>
                  <i class="material-icons">admin_panel_settings</i> Role
                </a-menu-item>
                <a-menu-item>
                  <i class="material-icons">manage_accounts</i> User
                </a-menu-item>
                <a-menu-divider/>
                <a-menu-item @click="store.dispatch('LOGOUT')">
                  <i class="material-icons text-danger"></i> Logout
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </li>
      </ul>
      <nav class="nav">
        <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
           data-toggle="collapse" data-target=".header-navbar" aria-expanded="false"
           aria-controls="header-navbar">
          <i class="material-icons"></i>
        </a>
      </nav>
    </nav>
  </div>
</template>
<script setup>
import store from "./../../store/index.js";
</script>