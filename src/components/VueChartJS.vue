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
        <h3>Circle Chart</h3>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Leine Chart1</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Line Chart2</h3>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from '@/components/BarChart'
import LineChart from '@/components/LineChart'

export default {
  name: 'VueChartJS',
  components: {
    BarChart,
    LineChart
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

