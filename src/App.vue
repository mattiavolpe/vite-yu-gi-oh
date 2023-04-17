<script>
import { state } from "./state.js"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import LoaderComponent from "./components/LoaderComponent.vue"
import AppFooter from "./components/AppFooter.vue"
export default {
  components: {
    AppHeader,
    AppMain,
    LoaderComponent,
    AppFooter,
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
  <AppMain v-if="!state.loading"></AppMain>
  <LoaderComponent v-else></LoaderComponent>
  <AppFooter></AppFooter>

</template>