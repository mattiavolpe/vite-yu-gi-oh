<script>
export default {
  name: "CounterComponent",
  props: {
    cards: Object,
  }
}
</script>

<template>
  <h5 class="counterComponent p-3 bg-dark text-light">Found {{ cards.length }} cards</h5>
</template>

<style lang="scss" scoped>
.counterComponent {
  margin: 16px -12px;
}
</style>