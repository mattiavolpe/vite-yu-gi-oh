<script>
import { state } from "./../state.js"
import axios from "axios"
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
      apiArchetypesUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
      archetypes: [],
    }
  },
  methods: {
    retrieveArchetypes(url) {
      axios.get(url)
      .then(response => {
        this.archetypes = response.data;
      })
      .catch(error => {
        console.error(error.message);
      })
    },
  },
  mounted() {
    this.retrieveArchetypes(this.apiArchetypesUrl);
  }
}
</script>

<template>
<main class="bg-dark">
  <div class="container">
    <h2 v-if="state.filter == ''" class="text-center py-4 text-uppercase m-0 text-light">50 random cards showcase</h2>
    <h2 v-else class="text-center py-4 text-uppercase m-0 text-light">{{ state.filter }} cards showcase</h2>
    <div class="d-flex align-items-center">
      <FilterComponent @changeArchetype="state.filterByArchetype(state.filter)" :archetypes="archetypes"></FilterComponent>
      <CounterComponent></CounterComponent>
    </div>
    <CardsComponent></CardsComponent>
  </div>
</main>
</template>