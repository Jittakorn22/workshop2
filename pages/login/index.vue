<template>
  <div>
    <form action="#" @submit.prevent="onSubmit">
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button>{{ $t('login') }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const onSubmit = (e: { target: HTMLFormElement | undefined }) => {
  const data = new FormData(e.target);
  const email = data.get('email');
  const password = data.get('password');
};
</script>
