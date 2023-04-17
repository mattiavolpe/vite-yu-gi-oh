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
    <div class="card">
      <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name + ' image'">
      <h4 class="my-2">{{ card.name }}</h4>
      <span class="pb-3">{{ card.type }}</span>
    </div>
  </div>
</template>