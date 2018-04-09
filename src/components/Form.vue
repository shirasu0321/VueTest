<template>
  <div> 
    Formページ
    <head-comp></head-comp>
    <textarea-comp></textarea-comp>
    <string-comp></string-comp>
    <button>{{button}}</button>
  </div>
</template>

<script>
import HeadComp from '@/components/HeadComp'
import TextareaComp from '@/components/TextareaComp'
import StringComp from '@/components/StringComp'

export default {
  name: 'form',
  data () {
    return {
      button: '確認'
    }
  },
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>

