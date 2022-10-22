<template>
  <div class="relative grid gap-4 grid-cols-[18rem_auto] 2xl:grid-cols-[24rem_auto]">
    <conversion/>
    <chat-box/>
  </div>
</template>

<script setup>
import Conversion from "../components/message/conversion/Conversion.vue";
import ChatBox from "../components/message/chatBox/ChatBox.vue";

</script>
