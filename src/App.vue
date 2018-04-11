<template>
  <div id="app">
    <v-app id="inspire">
      <header-area></header-area>
      <menubar-area></menubar-area>
      <router-view></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>
