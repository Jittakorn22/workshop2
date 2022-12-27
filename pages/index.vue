<template>
  <div>Static Page</div>
</template>

<script setup>
const { data: count } = await useFetch('/api/count');
</script>
