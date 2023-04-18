<script>
import { state } from "./../state.js"
export default {
  name: "FilterComponent",
  data() {
    return {
      state,
    }
  },
  props: {
    archetypes: Array,
  }
}
</script>

<template>
  <select v-model="state.filter" class="rounded">
    <option value="">--- Select a filter ---</option>
    <option v-for="item in archetypes" :value="item.archetype_name">{{ item.archetype_name }}</option>
  </select>
</template>