<template>
  <div>
    <h1>Calendar</h1>
    <p>events:</p>
    <p>{{ events }}</p>
    <button type="submit">fetchEvents</button>
  </div>
</template>
<script>
export default {
  name: "Calendar",
  data: () => ({
    events: [],
  }),
};
</script>
