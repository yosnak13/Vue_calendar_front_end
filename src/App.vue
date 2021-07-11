<template>
  <div id="app">
    <HelloWorld message="Hello Vue" />
    <!--messageの値を渡す-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
