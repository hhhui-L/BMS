<template>
    <div>
      <div id="charts" style="width:100%;height:700px;}"></div>
    </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'Bms',
  // 进入路由之前执行
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.getData()
    })
  },
  // 离开路由之前执行
  beforeRouteLeave: (to, from, next) => {
    next()
  },
  data () {
    return {
      option: {
        title: {
          text: '电压与电流变化情况',
          x: 'center', // 水平安放位置，默认为左对齐，可选为：
          y: 'top'
        },
        // 提示框
        tooltip: {
          trigger: 'axis'
        },
        // 图例
        legend: {
          data: ['电压(V)', '电流(A)'],
          x: 'left',
          y: 'top'
        },
        // 工具栏：内置有导出图片、数据视图、动态类型切换、数据区域缩放、重置五个工具
        toolbox: {
          show: true, // 是否显示工具栏组件
          feature: {
            /* dataZoom: { // 数据区域缩放，目前只支持直角坐标系的缩放
              yAxisIndex: 'none'
            }, */
            dataView: { readOnly: false }, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新
            magicType: { type: ['line', 'bar'] }, // 动态类型切换
            restore: {}, // 配置项还原
            saveAsImage: {} // 保存为图片
          },
          width: 'auto', // 图例宽度
          height: 'auto', // 图例高度
          x: 'right',
          y: 'top'
        },
        xAxis: {
          type: 'category', // 类目轴，适用于离散的类目数据，为该类型时必须通过data设置类目数据
          // 非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围
          // 可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效['20%', '20%']
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: {
          type: 'value'
          /* axisLabel: {
            formatter: '{value} °C'
          } */
        },
        series: [
          {
            name: '电压(V)',
            type: 'line',
            data: [1.3, 1.6, 1.4, 1.2, 1.7, 1.1, 1.3, 1.5, 1.2, 1.9],
            // 标注
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            // 标线
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '电流(A)',
            type: 'line',
            data: [18.1, 19.9, 15.7, 21.3, 22.7, 18.4, 16.9, 16.3, 17.5, 19.7],
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
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/data.json'
      }).then(function (repos) {
        console.log(repos)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
