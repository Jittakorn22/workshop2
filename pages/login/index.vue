<template>
  <div>
    <Card>
      <form action="#" @submit.prevent="onSubmit" class="grid grid-cols-1 gap-4">
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button>{{ $t('login') }}</button>
      </form>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
});

useSEO({
  title: 'Login',
});

// const { signIn } = useSession();

const onSubmit = (e: { target: HTMLFormElement | undefined }) => {
  const data = new FormData(e.target);
  const email = data.get('email');
  const password = data.get('password');
};
</script>
