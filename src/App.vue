<script>
import { state } from "./state.js"
import AppHeader from "./components/AppHeader.vue"
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      state,
    }
  },
  created() {
    this.state.fetchCards(this.state.apiUrl);
  }
}
</script>

<template>

  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</template>

<style>

</style>
