<script>
import { state } from "./../state.js"
import FilterComponent from "./FilterComponent.vue"
import CounterComponent from "./CounterComponent.vue"
import CardsComponent from "./CardsComponent.vue"
export default {
  name: "AppMain",
  components: {
    FilterComponent,
    CounterComponent,
    CardsComponent,
  },
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
<main class="bg-dark">
  <div class="container">
    <h2 class="text-center py-4 text-uppercase m-0 text-light">50 random cards showcase</h2>
    <div class="d-flex align-items-center">
      <FilterComponent v-if="state.cards != []" :cards="state.cards"></FilterComponent>
      <CounterComponent v-if="state.cards != []"></CounterComponent>
    </div>
    <CardsComponent></CardsComponent>
  </div>
</main>
</template>