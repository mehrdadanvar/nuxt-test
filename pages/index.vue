<template>
  <div>
    <h1>Hi</h1>
    <p>{{ test.mehrdad.name }}</p>
    <p>{{ test.mehrdad.id }}</p>
  </div>
</template>

<script setup>
  let { data: test } = await useFetch("/api/devil");
  let info = ref(test);
</script>

<style></style>
