<template>
  <section class="container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chartjs">vue-chartjs</router-link></li>
    </ul>
    <h1>Demo Of vue-ChartJS</h1>
    <div class="columns">
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h3>Pie Chart</h3>
        <pie-chart></pie-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Leine Chart1</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>HrizentalBar Chart</h3>
        <horizontal-bar></horizontal-bar>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'
import HorizontalBar from '@/components/HorizontalBar'
import PieChart from '@/components/PieChart'

export default {
  name: 'VueChartJS',
  components: {
    BarChart,
    LineChart,
    HorizontalBar,
    PieChart
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

