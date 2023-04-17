<script>
import { state } from "./state.js"
export default {
  data() {
    return {
      state,
    }
  },
  created() {
    state.fetchCards(state.apiUrl);
  }
}
</script>

<template>

</template>

<style>

</style>
