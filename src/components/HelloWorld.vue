<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ "id" + item.id }}
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data: () =>  ({
      items: [
        { id: 1, text: 'アイテム1' },
        { id: 2, text: 'アイテム2' },
        { id: 3, text: 'アイテム3' }
      ],
    }),
  };
</script>
