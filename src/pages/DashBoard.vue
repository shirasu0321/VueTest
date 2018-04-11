<template>
  <div class="chartCard">
    <v-container grid-list-xl>
    <v-layout row justify-space-between>
    <v-flex xs10>  
      <v-card>
        <v-card-title>
            Bar Chart
        </v-card-title>
        <bar-chart></bar-chart>
      </v-card>
    </v-flex>
    <v-flex xs10> 
      <v-card>
        <v-card-title>
            Line Chart
        </v-card-title>
        <line-chart></line-chart>
      </v-card>
    </v-flex>
    </v-layout>
    </v-container>
  </div>

</template>

<script>
import LineChart from '@/components/DashBoard/LineChart'
import BarChart from '@/components/DashBoard/BarChart'

export default {
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style scopped>

</style>


