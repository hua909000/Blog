# echarts常用功能封装|抽象为mixin

## 目前已解锁以下功能：

- [x] 初始化echarts（initChart）
- [x] 获取echarts参数配置（getOption）
- [x] 生成echarts图表（setOption）
- [x] 监听resize事件触发echarts图表更新
- [x] 加载中loading

```js
// charts.js
import echarts from 'echarts'

export default {
  computed: {
    // 初始化echarts
    getChart () {
      return this.$echarts.init(this.$refs.echart)
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
    // 移除resize事件
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
```

example:

```vue
<template>
  <div>
    <div ref="echart" style="height: 600px"></div>
  </div>
</template>

<script>
import Charts from '@/components/Charts.js'

export default {
   // 混入Charts
  mixins: [Charts],
  data () {
    return {
        chartData: []
    }
  },
  mounted () {
    // 模拟ajax请求
    setTimeout(() => {
      this.chartData = [0, 1, 2, 3]
    }, 2000)
  },
  methods: {
    getOption () {
      // 配置options
      return {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        // 代码块...
      }
    }
  }
}
</script>
```
ps：详情请查看[examples](./examples)

### 如何贡献

笔记内容是笔者一个字一个字打上去的，难免会有一些笔误，如果发现笔误可直接在相应文档进行编辑修改。

欢迎提交对本仓库的改进建议~

如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。