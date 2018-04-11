<template>
  <div id="app">
    <v-app id="inspire">
      <header-area></header-area>
    <menubar-area></menubar-area>
    <footer-area></footer-area>
    </v-app>
  </div>
</template>

<script>
import HeaderArea from '@/components/global/HeaderArea'
import MenubarArea from '@/components/global/MenubarArea'
import FooterArea from '@/components/global/FooterArea'

export default {
  components: {
    HeaderArea,
    MenubarArea,
    FooterArea
  }
}
</script>

<style>

</style>
