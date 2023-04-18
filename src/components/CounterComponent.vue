<script>
import { state } from "./../state.js"
export default {
  name: "CounterComponent",
  data() {
    return {
      state,
    }
  },
  methods: {
    retrieveFilteredCardsNumber() {
      return this.state.cards.length;
    }
  }
}
</script>

<template>
  <h5 class="counterComponent p-3 m-0 text-light">Found {{ retrieveFilteredCardsNumber() }} cards</h5>
</template>