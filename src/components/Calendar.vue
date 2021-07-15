<template>
  <div>
    <v-sheet height="6vh" class="d-flex align-center">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-sheet>

    <v-sheet height="94vh">
      <v-calendar
        v-model="value"
        :events="events"
        @change = "fetchEvents">
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { format } from "date-fns";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Calendar",
  data: () => ({
    value: new Date('2020-10-01'),
  }),
  computed: {
    ...mapGetters("events", ["events"]),
    title() {
      return format(this.value, "yyyy年 M月")
    },
  },
  methods: {
    ...mapActions("events", ["fetchEvents"]),
  },
};
</script>
