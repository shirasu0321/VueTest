<script>
import { Bar } from 'vue-chartjs'

export default ({
  name: 'barChart',
  extends: Bar,
  data () {
    return {
      'options': {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      'datacollections': {
        labels: ['English', 'Math', 'Science'],
        datasets: [
          {
            label: 'Test Results',
            backgroundColor: '#96e412',
            data: [60, 90, 70]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart (this.datacollections, this.options)
  }
})
</script>
