<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted () {
    this.renderChart (this.datacollections, this.options)
  },
  data () {
    return {
      'datacollections': {
        labels: ['English', 'Math', 'Science'],
        datasets: [
          {
            label: 'Test Results',
            backgroundColor: '#d0ffe8',
            data: [60, 90, 70]
          }
        ]
      },
      options: {
        scales: { xAxes: [{ ticks: { beginAtZero: true } }]},
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
