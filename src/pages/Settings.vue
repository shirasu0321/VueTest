<template>
   <v-container>
     <v-layout>
       <v-flex>
         <v-toolbar color="light-green lighten-1">
         </v-toolbar>
         <v-card color="light-green lighten-3" class="white--text">
           <v-container>
             <v-layout column>
               <v-flex>
                 <v-text-field label="ID"></v-text-field>
               </v-flex>
               <v-flex>
                 <v-text-field label="Name"></v-text-field>
               </v-flex>
               <v-flex>
                 <v-select label="Address" :items="departments"></v-select>
               </v-flex>
             </v-layout>
           </v-container>
         </v-card>
       </v-flex>
     </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mounted () {
    this.getDepartmentItems()
  },
  methods: {
    ...mapActions('Settings', [
      'getDepartmentItems'
    ])
  },
  computed: {
    ...mapGetters('Settings', ['departments'])
  }
}
</script>