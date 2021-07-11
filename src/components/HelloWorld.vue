<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data: () => ({
      message: "Hello world!",
    }),
  };
</script>
