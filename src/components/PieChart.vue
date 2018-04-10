<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart(this.datacolections, this.options)
  },
  data () {
    return {
      'datacolections': {
        labels: ['O', 'G', 'A', 'N'],
        datasets: [{
          backgroundColor: [
            '#6affb5',
            '#00f078',
            '#00974b',
            '#353c1a'
          ],
          data: [10, 30, 40, 20]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
