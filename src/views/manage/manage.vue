<template>
    <div>
      <div id="charts" style="width:100%;height:700px;}"></div>
    </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'manage',
  data () {
    return {
      option: {
        title: {
          text: '电压变化情况'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['电压(V)']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} V'
          }
        },
        series: [
          {
            name: '电压(V)',
            type: 'line',
            data: [1.3, 1.6, 1.4, 1.2, 1.7, 1.1, 1.3, 1.5, 1.2, 1.9],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      }
    }
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('charts'))
    myChart.setOption(this.option)
  }
}
</script>

<style scoped>

</style>
