<script>
import { state } from "./../state.js"
export default {
  name: "FilterComponent",
  data() {
    return {
      state,
    }
  },
}
</script>

<template>
  <select v-model="state.filter" class="rounded">
    <option value="">--- Select a filter ---</option>
    <option v-for="item in state.types" :value="item">{{ item }}</option>
  </select>
</template>