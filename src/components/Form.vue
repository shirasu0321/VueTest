<template>
  <div> 
    Formページ
    <head-comp></head-comp>
    <component :is="isComponent"></component>
    <button v-on:click="buttonAction">{{button}}</button>
  </div>
</template>

<script>
import HeadComp from '@/components/HeadComp'
import TextareaComp from '@/components/TextareaComp'
import StringComp from '@/components/StringComp'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'form',
  methods: mapActions('Form', {
    'buttonAction': 'buttonAction'
  }),
  computed: {
    ...mapGetters('Form', {
      'button': 'getButton',
      'isComponent': 'GetComponent'
    })
  },
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

