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
    filterArchetype(filter) {
      if (filter === "") {
        this.state.retrieveNumberOfCards(this.state.apiCardsUrl);
      } else {
        console.log("FILTERED");
        axios.get(`${this.state.apiCardsUrl}?archetype=${filter}`)
        .then(response => {
          console.log(response.data.data);
          this.state.cards = response.data.data;
        })
        .catch(error => {
          console.error(error.message);
        })
      }
    }
  },
  mounted() {
    this.retrieveArchetypes(this.apiArchetypesUrl);
  }
}
</script>

<template>
<main class="bg-dark">
  <div class="container">
    <h2 class="text-center py-4 text-uppercase m-0 text-light">50 random cards showcase</h2>
    <div class="d-flex align-items-center">
      <FilterComponent @changeArchetype="filterArchetype(state.filter)" v-if="state.cards != []" :archetypes="archetypes"></FilterComponent>
      <CounterComponent v-if="state.cards != []"></CounterComponent>
    </div>
    <CardsComponent></CardsComponent>
  </div>
</main>
</template>