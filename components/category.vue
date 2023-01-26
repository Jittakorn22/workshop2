<template>
  <div class="category">
    <img class="category__img" :src="imgC" alt="" />
    <p class="font1 font1--p2">{{ category }}</p>
  </div>
</template>
<script setup lang="ts">
const prop = defineProps({
  category: {
    type: String,
    required: true,
  },
  imgC: {
    type: String,
    required: true,
  },
});
</script>
