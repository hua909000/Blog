import echarts from 'echarts'

export default {
  computed: {
    getChart () {
      return echarts.init(this.$refs.echart)
    }
  },
  watch: {
    chartData: {
      handler (val) {
        val && this.initChart()
      }
    }
  },
  mounted () {
    this.getChart.showLoading()
    window.addEventListener('resize', this.chartResize)
    
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.chartResize)
    })
  },
  methods: {
    initChart () {
      this.getChart.setOption(this.getOption())
      this.getChart.hideLoading()
    },
    chartResize () {
      this.getChart.resize()
    }
  }
}