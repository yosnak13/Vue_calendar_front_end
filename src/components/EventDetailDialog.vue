<template>
  <v-card class="pb-12">
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>

    <v-card-title>
      <v-row>
        <v-col cols="2" class="d-flex justify-center align-center">
          <v-icon size="20px" :color="event.color || 'blue'">mdi-square</v-icon>
        </v-col>
        <v-col class="d-flex align-center">
          {{ event.name }}
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col cols="2" class="d-flex justify-center align-center">
          <v-icon size="20px">mdi-clock-time-three-outline</v-icon>
        </v-col>
        <v-col class="d-flex align-center">
          {{ event.start.toLocaleString() }} ~ {{ event.end.toLocaleString() }}
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols="2" class="d-flex justify-center align-center">
          <v-icon size="20px">mdi-card-text-outline</v-icon>
        </v-col>
        <v-col class="d-flex align-center">
          {{ event.description || 'no description' }}
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
import { mapGetters, mapActions } from'vuex'

export default {
  name: 'EventDetailDialog',
  computed: {
    ...mapGetters('events', ['event']),
  },
  methods: {
    ...mapActions('events', ['setEvent']),
    closeDialog(){
      this.setEvent(null);
    },
  },
};
</script>
