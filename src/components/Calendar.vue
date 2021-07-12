<template>
  <div>
    <h1>Calendar</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.name }}
      </li>
    </ul>
    <button type="submit" @click="fetchEvents()">fetchEvents</button>
    <CalendarDetails />
  </div>
</template>

<script>
import axios from "axios";
import CalendarDetails from './CalendarDetails.vue';

export default {
  name: "Calendar",
  components: {
    CalendarDetails,
  },
  data: () => ({
    events: [],
  }),
  methods: {
    fetchEvents() {
      axios
        .get("http://localhost:3000/events")
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
