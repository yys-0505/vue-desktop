<template>
  <div id="chart-wrapper" style="width: 100%; height: 100%;">
  </div>
</template>
<script>
import echarts from 'echarts'
require('echarts/map/js/china.js')
export default {
  created () {
    this.$nextTick(() => {
      this.renderMap()
    })
  },
  methods: {
    renderMap () {
      var myChart = echarts.init(document.getElementById('chart-wrapper'))
      var nameTitle = '中国各城市人数分布图'
      var subname = '数据爬取自千栀网123'
      var nameColor = ' rgb(55, 75, 113)'
      var nameFontFamily = '等线'
      var subnameFontSize = 15
      var nameFontSize = 18
      var mapName = 'china'
      var data = [
        {name: '北京', value: 177},
        {name: '天津', value: 42},
        {name: '河北', value: 102},
        {name: '山西', value: 81},
        {name: '内蒙古', value: 47},
        {name: '辽宁', value: 67},
        {name: '吉林', value: 82},
        {name: '黑龙江', value: 67},
        {name: '上海', value: 24},
        {name: '江苏', value: 92},
        {name: '浙江', value: 114},
        {name: '安徽', value: 109},
        {name: '福建', value: 116},
        {name: '江西', value: 91},
        {name: '山东', value: 119},
        {name: '河南', value: 137},
        {name: '湖北', value: 116},
        {name: '湖南', value: 114},
        {name: '重庆', value: 91},
        {name: '四川', value: 125},
        {name: '贵州', value: 62},
        {name: '云南', value: 83},
        {name: '西藏', value: 9},
        {name: '陕西', value: 80},
        {name: '甘肃', value: 56},
        {name: '青海', value: 10},
        {name: '宁夏', value: 18},
        {name: '新疆', value: 167},
        {name: '广东', value: 123},
        {name: '广西', value: 59},
        {name: '海南', value: 14},
        {name: '台湾', value: 4},
        {name: '香港', value: 14},
        {name: '澳门', value: 24}
      ]
      var geoCoordMap = {}
      /* 获取地图数据 */
      myChart.showLoading()
      var mapFeatures = echarts.getMap(mapName).geoJson.features
      myChart.hideLoading()
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp
      })
      var max = 480
      var min = 9 // todo
      var maxSize4Pin = 100
      var minSize4Pin = 20
      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      var option = {
        title: {
          text: nameTitle,
          subtext: subname,
          x: 'center',
          textStyle: {
            color: nameColor,
            fontFamily: nameFontFamily,
            fontSize: nameFontSize
          },
          subtextStyle: {
            fontSize: subnameFontSize,
            fontFamily: nameFontFamily
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            let value = params.value
            let toolTiphtml = params.name + ':<br>'
            if (value) {
              if (typeof (params.value)[2] === 'undefined') {
                toolTiphtml += value + '人'
              } else {
                toolTiphtml += value[2] + '人'
              }
            } else {
              toolTiphtml += 'No Data'
            }
            return toolTiphtml
          }
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['credit_pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
          }
        },
        geo: {
          show: true,
          map: mapName,
          roam: true,
          itemStyle: {
            areaColor: '#031525',
            borderColor: '#3B5077'
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: '#2B91B7'
            }
          }
        },
        series: [
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            itemStyle: {
              color: '#05C3F9'
            }
          },
          {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
            roam: true,
            data: data
          },
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', // 气泡
            symbolSize: function (val) {
              var a = (maxSize4Pin - minSize4Pin) / (max - min)
              var b = minSize4Pin - a * min
              b = maxSize4Pin - a * max
              return a * val[2] + b
            },
            label: {
              formatter: '{@[2]}',
              show: true,
              fontSize: 9,
              color: '#fff'
            },
            itemStyle: {
              normal: {
                color: '#F62157' // 标志颜色
              }
            },
            zlevel: 6,
            data: convertData(data)
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
              return b.value - a.value
            }).slice(0, 5)),
            symbolSize: function (val) {
              return val[2] / 10
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: 'yellow',
                shadowBlur: 10,
                shadowColor: 'yellow'
              }
            },
            zlevel: 1
          }
        ]
      }
      myChart.on('click', function (param) {
        console.log(param)
      })
      myChart.setOption(option)
    }
  }
}
</script>
<style>
</style>
