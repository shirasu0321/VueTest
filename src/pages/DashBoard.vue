<template>
  <div class="chartCard">
    <v-container grid-list-xl>
    <v-layout row justify-space-between>
    <v-flex xs8>  
      <v-card>
        <v-card-title>
            Bar Chart
        </v-card-title>
        <bar-chart></bar-chart>
      </v-card>
    </v-flex>
    <v-flex xs8> 
      <v-card>
        <v-card-title>
            Line Chart
        </v-card-title>
        <line-chart></line-chart>
      </v-card>
    </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6>  
        <v-card>
          <v-card-title>
            Reactive Bar Chart
          </v-card-title>
          <reactive-bar :chartData="chartData"></reactive-bar>
          <v-card-text><v-btn color="primary" @click="fillData">ランダム</v-btn></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>

</template>

<script>
import LineChart from '@/components/DashBoard/LineChart'
import BarChart from '@/components/DashBoard/BarChart'
import ReactiveBar from '@/components/DashBoard/ReactiveBarChart'

export default {
  components: {
    BarChart,
    LineChart,
    ReactiveBar
  },
  data () {
    return {
      chartData: {}
    }
  },
  methods: {
    fillData () {
      this.chartData = {
        labels: ['2月', '6月', '10月'],
        datasets: [
          {
            label: 'Test',
            backgroundColor: '#f87979',
            data: [12, 15, 8]
          }
        ]
      }
    }
  },
  created () {
    this.chartData = {
      labels: ['2月', '6月', '10月'],
      datasets: [
        {
          label: 'Test',
          backgroundColor: '#f87979',
          data: [8,12,15]
        }
      ]
    }
  }
}
</script>

<style scopped>

</style>


