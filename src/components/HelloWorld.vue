<template>
  <div>
    <button @click="clickedEvent()">ボタン</button>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    methods: {
      clickedEvent(){
        console.log('clicked!');
      }
    },
  };
</script>
