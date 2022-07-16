<template>
  <button class="h-7 px-3 button" :class="{'UnfollowButton':following}" @click="submit">
    {{ following ? "Unfollow" : "Follow" }}
  </button>
</template>

<script setup>
import store from "../../../store";

const props = defineProps({
  userid: String,
  following: Boolean,
})

const submit = () => {
  props.following ? store.dispatch('UNFOLLOW_PEOPLE', props.userid) : store.dispatch('FOLLOW_PEOPLE', props.userid);
}

</script>
<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background: var(--buttonBg);
  transition: all 100ms ease-out;
}

.button:hover {
  cursor: pointer;
  color: var(--orange);
  background: transparent;
  border: 2px solid var(--orange);
}

.UnfollowButton {
  color: var(--orange);
  border: 2px solid var(--orange);
  background: transparent;
}

.UnfollowButton:hover {
  color: white;
  border: none;
  cursor: pointer;
  background: var(--buttonBg);
}
</style>
