<script>
export default {
  name: "CardItem",
  props: {
    card: Object,
  }
}
</script>

<template>
  <div class="cardItem col text-center my-3">
    <div class="card border-0 bg-dark text-light h-100">
      <img class="img-fluid rounded" :src="card.card_images[0].image_url" :alt="card.name + ' image'">
      <h5 class="py-2 mb-0">{{ card.name }}</h5>
      <span class="pb-2">{{ card.type }}</span>
    </div>
  </div>
</template>