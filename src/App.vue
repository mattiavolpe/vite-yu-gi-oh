<script>
import { state } from "./state.js"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      state,
    }
  },
  created() {
    this.state.retrieveNumberOfCards(this.state.apiUrl);
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
