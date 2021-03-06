import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)

export default {
  login() {
    console.log(111)
  },
  search() {

  },
  formatDate(timestamp) { //时间戳格式化
    let data = new Date(timestamp * 1000)
    const Y = data.getFullYear() + '-';
    const M = (data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1) + '-';
    const D = data.getDate() + ' ';
    const h = data.getHours() + ':';
    const m = data.getMinutes() + ':'
    const s = data.getSeconds()
    return Y + M + D + h + m + s
  },
  msg(a, b, c) {
    return {
      content: a,
      duration: b,
      closable: c
    }
  },
  map: function(a, b) {
    // 绘制图表
    return {
      visualMap: [{ //渐变色
        show: false,
        type: 'continuous',
        min: Math.min.apply(null, a),
        max: Math.max.apply(null, b),
        color: ['rgb(255, 70, 131)', 'rgb(255, 190, 131)'],
      }],
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: a,
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          animation: false,
          label: {
            backgroundColor: '#ccc',
            borderColor: '#aaa',
            borderWidth: 1,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            textStyle: {
              color: '#222'
            }
          }
        },
        formatter: function(params) {
          return params[0].name + '<br />' + params[0].value;
        }
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      series: [{
        data: b,
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
      }]
    }
  }
}
