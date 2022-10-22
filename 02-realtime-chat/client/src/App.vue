<template>
  <router-view/>
</template>

<script>
import {computed, watch} from "vue";
import store from "./store";
import socket from "./core/plugins/socket";

const user = computed(() => store.getters.currentUser)
watch(user, () => {
  if (user.value._id) socket.emit("new-user-add", user.value._id);
})

</script>
