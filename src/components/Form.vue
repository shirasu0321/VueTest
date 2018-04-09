<template>
  <div> 
    Formページ
    <head-comp></head-comp>
    <textarea-comp></textarea-comp>
    <string-comp></string-comp>
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
  data () {
    return {
      button: '確認'
    }
  },
  methods: mapActions('Form', {
    'buttonAction': 'buttonAction'
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

