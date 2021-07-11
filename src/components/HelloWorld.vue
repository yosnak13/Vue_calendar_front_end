<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: ['message'] //親コンポーネントからmessageを受け取る
  };
</script>
