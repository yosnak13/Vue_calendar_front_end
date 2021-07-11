<template>
  <div v-if="visibility">
    <p>visibility: true</p>
    {{ message }}
  </div>
  <div v-else>
    <p>visibility: false</p>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data: () =>  ({
      message: "Hello world",
      visibility: true,
    }),
  };
</script>
