<template>
  <div class="card">
    <img class="card__img" :src="img" alt="" />
    <div class="card__content">
      <p class="font2 font2--content">{{ p1 }}</p>
      <h4 class="font1 font1--pname">{{ productname }}</h4>
      <p class="font2 font2--content">{{ p2 }}</p>
      <div class="price">
        <span class="font1 font1--price1">{{ priceN }}</span>
        <span class="font1 font1--price2">{{ price }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  p1: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  p2: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  priceN: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>
