<script>
import { state } from "./../state.js"
export default {
  name: "FilterComponent",
  emits: ["changeArchetype"],
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
  <select v-model="state.filter" class="rounded" @change="$emit('changeArchetype')">
    <option value="" selected>--- No filter ---</option>
    <option v-for="archetype in archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
  </select>
</template>