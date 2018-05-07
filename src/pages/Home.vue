<template>
  <v-container grid-list-xl>
    <v-layout row justify-space-between>
    <v-flex> 
    <v-card class="mt-4 mb-4 pa-3">
      <v-card-title>Get Test</v-card-title>
      <v-layout row>
        <v-flex>
          {{nowTime}}
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn @click="getTime">Get</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    </v-flex>
    <v-flex> 
    <v-card class="mt-4 mb-4 pa-3">
      <v-card-title>Post Test</v-card-title>
      <v-layout row>
        <v-flex>
          Please enter your ID
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-text-field v-model="id" label="ID"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          Hello, {{name}} !!
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn @click="getName(id)">Post</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: function() {
    return {id: ""}
  },
  methods: {
    ...mapMutations('Home', [
      'getName',
      'getTime'
    ]),
  },
  computed: {
    ...mapGetters('Home', {
      'name': 'setName',
      'nowTime': 'setTime'
    })
  }
}
</script>

<style scopped>

</style>



