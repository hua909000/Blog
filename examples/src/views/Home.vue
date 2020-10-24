<template>
  <div class="home">
    <div ref="echart" style="height: 600px"></div>
  </div>
</template>

<script>
import Charts from "../components/Charts.js";

export default {
  name: "Home",
  // 混入Charts
  mixins: [Charts],
  data() {
    return {
      chartData: [],
    };
  },
  mounted() {
    // 模拟ajax请求
    setTimeout(() => {
      this.chartData = [0, 1, 2, 3];
    }, 2000);
  },
  methods: {
    getOption() {
      // 参考官网实例：https://echarts.apache.org/examples/zh/editor.html?c=line-simple
      return {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      };
    },
  }
};
</script>
