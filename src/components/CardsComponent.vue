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
  <div class="cardsComponent row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
    <CardItem v-if="state.cards != []" v-show="card.type === state.filter || state.filter === ''" v-for="card in state.cards" :card="card"></CardItem>
  </div>
</template>