<template>
  <div>
    <h1 class="text-h1">Calendar</h1>
    <v-list>
      <v-list-item v-for="event in events" :key="event.id">
        {{ event.name }}
      </v-list-item>
    </v-list>
    <v-btn type="submit" @click="fetchEvents()">fetchEvents</v-btn>

    <v-sheet height="100vh">
      <v-calendar
        v-model="value"
        :events="events"
        @change = "fetchEvents">
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Calendar",
  data: () => ({
    value: new Date('2020-10-01'),
  }),
  computed: {
    ...mapGetters("events", ["events"]),
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
  },
};
</script>
