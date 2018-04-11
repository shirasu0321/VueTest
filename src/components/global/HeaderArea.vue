<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click="clickDrawner"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'head',
  methods: mapActions('Head', {
    'clickDrawner': 'clickDrawner'
  })
}
</script>
