<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart(this.datacollections, this.options)
  },
  data () {
    return {
      'datacollections': {
        labels: ['Janualy','Febrary','March','April', 'May', 'June'],
        datasets: [
          {
            label: 'Test Results in the last six month',
            backgroundColor: 'rgba(56,186,140,0.4)',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            bointBorderColor: '#249EBF',
            data: [180,200,246,179,240,250]
          }
        ]
      },
      'options': {
        scales: {
          yAxes: [{
            ticks: { beginAtZero: false},
            gridLine: {display: true}
          }],
          xAxes: [{
            gridLine: {display: false}
          }]
        },
        legend: {display: true},
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
