<script>
import { state } from "./../state.js"
import CardItem from "./CardItem.vue"
export default {
  name: "CardsComponent",
  components: {
    CardItem,
  },
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
  <div class="cardsComponent row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 rounded bg-light">
    <CardItem v-for="card in state.cards" :card="card"></CardItem>
  </div>
</template>