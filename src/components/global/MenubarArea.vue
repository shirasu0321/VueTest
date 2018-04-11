<template>
  <v-navigation-drawer
    clipped
    hide-overlay
    v-model="drawer"
    fixed
    app
  >
    <v-list dense>
      <v-list-tile @click="changePage('/')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="changePage('dashboad')">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="changePage('settings')">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'menu',
  methods: {
    ...mapActions('Menu', {
      'changePage': 'changePage'
    })
  },
  computed: {
    ...mapGetters('Menu', {
      'drawer': 'getDraw'
    })
  }
}
</script>

