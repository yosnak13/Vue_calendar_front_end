<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn text v-on='on'>{{ value || '日付を選択' }}</v-btn>
    </template>
    <v-date-picker
    :value="value"
    @input="$emit('input', $event)"
    no-title
    locale="ja-ja"
    :day-format="value => new Date(value).getDate()"
    ></v-date-picker>
    <p>{{ value }}</p>
  </v-menu>
</template>

<script>
export default {
  name: 'DateForm',
  props: ['value'],
}
</script>
