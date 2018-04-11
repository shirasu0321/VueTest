<template>
  <div id="app">
    <v-app id="inspire">
      <header-area></header-area>
      <menubar-area></menubar-area>
      <content-area></content-area>
      <footer-area></footer-area>
    </v-app>
  </div>
</template>

<script>
import HeaderArea from '@/components/global/HeaderArea'
import MenubarArea from '@/components/global/MenubarArea'
import FooterArea from '@/components/global/FooterArea'
import ContentArea from '@/components/global/ContentArea'

export default {
  components: {
    HeaderArea,
    MenubarArea,
    FooterArea,
    ContentArea
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-content: center;
}
.content {
  align-content: center;
}
</style>
