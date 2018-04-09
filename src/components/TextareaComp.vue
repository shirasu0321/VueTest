<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea v-model="impression"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'textareaComp',
  computed: {
    impression: {
      get () {
        return this.$store.state.impression
      },
      set (value) {
        this.$store.commit('updateImpression', value)
      }
    },
    ...mapGetters('TextArea', {
      'error': 'getError'
    })
  }
}
</script>

<style>
.error {
  color: red;
}
</style>


