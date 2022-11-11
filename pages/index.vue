<template>
  <div>
    <h1>Hi</h1>
    <p>{{ test }}</p>
  </div>
</template>

<script setup>
  let { data: test } = await useFetch("/api/devil");
  let info = ref(test);
</script>

<style></style>
