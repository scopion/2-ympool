<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <section>
      <Content class="background">
        <div class="mianTitle">
          <Row>
            <Col span="24">
            <h1>焱猫矿池服务平台</h1></Col>
          </Row>
          <Row>
            <Col span="24">
            <p>稳定 高效 收益高</p>
            </Col>
          </Row>
          <div class="shape"></div>
        </div>
        <Content class="search">
          <Input class="input" v-model="value14" placeholder="输入钱包地址......" size="large" autofocus number search clearable/>
        </Content>
        <Content class="data">
          <Row type="flex" justify="space-around">
            <Col span="8">
            <div class="dataTiem-1">
            </div>
            <p>在线矿工</p>
            <p class="details">277</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-2">
            </div>
            <p>矿池算力</p>
            <p class="details">277</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-3">
            </div>
            <p>全网算力</p>
            <p class="details">277</p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span="8">
            <div class="dataTiem-4">
            </div>
            <p>当前区块</p>
            <p class="details">277</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-5">
            </div>
            <p>全网难度</p>
            <p class="details">277</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-6">
            </div>
            <p>24小时收益</p>
            <p class="details">277</p>
            </Col>
          </Row>
        </Content>
      </Content>
    </section>
    <Content class="domain">
      <h2>全网版图</h2>
      <div class="shape"></div>
      <div id="myChart" :style="{width: '100%', height: '50vh'}"></div>
    </Content>
    <section id="introduce">
      <Content class="introduce">
        <h2>领先的矿池服务平台</h2>
        <div class="shape"></div>
        <Row type="flex" justify="space-between" class="code-row-bg">
          <Col span="4">
          <div class="introduce-1">
          </div>
          <p>用户视角</p>
          <p>稳定服务,解决用户需求</p>
          </Col>
          <Col span="4">
          <div class="introduce-2">
          </div>
          <p>小金库</p>
          <p>收益及时到您钱包里</p>
          </Col>
          <Col span="4">
          <div class="introduce-3">
          </div>
          <p>轻松支付</p>
          <p>每日结算,便捷式支付</p>
          </Col>
          <Col span="4">
          <div class="introduce-4">
          </div>
          <p>安全监控</p>
          <p>监控账户状态,防止攻克</p>
          </Col>
        </Row>
        <h1>焱猫矿池，留下一段挖矿的光辉岁月史</h1>
      </Content>
    </section>
    <Footer></Footer>
  </Layout>
</div>
</template>
<script>
import Header from '../../components/header/header.vue' //公共头
import Footer from '../../components/footer/footer.vue' //公共尾
export default {
  data() {
    return {
      value14: ''
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  methods: {
    drawLine() {
      var data = [
        ["2000-06-05", 116],
        ["2000-06-06", 129],
        ["2000-06-07", 135],
        ["2000-06-08", 86],
        ["2000-06-09", 73],
        ["2000-06-10", 85],
        ["2000-06-11", 73],
        ["2000-06-12", 68],
        ["2000-06-13", 92],
        ["2000-06-14", 130],
        ["2000-06-15", 245],
        ["2000-06-16", 139],
        ["2000-06-17", 115],
        ["2000-06-18", 111],
        ["2000-06-19", 309],
        ["2000-06-20", 206],
        ["2000-06-21", 137],
        ["2000-06-22", 128],
        ["2000-06-23", 85],
        ["2000-06-24", 94],
        ["2000-06-25", 71],
        ["2000-06-26", 106],
        ["2000-06-27", 84],
        ["2000-06-28", 93],
        ["2000-06-29", 85],
        ["2000-06-30", 73],
        ["2000-07-01", 83],
        ["2000-07-02", 125],
        ["2000-07-03", 107],
        ["2000-07-04", 82],
        ["2000-07-05", 44],
        ["2000-07-06", 72],
        ["2000-07-07", 106],
        ["2000-07-08", 107],
        ["2000-07-09", 66],
        ["2000-07-10", 91],
        ["2000-07-11", 92],
        ["2000-07-12", 113],
        ["2000-07-13", 107],
        ["2000-07-14", 131],
        ["2000-07-15", 111],
        ["2000-07-16", 64],
        ["2000-07-17", 69],
        ["2000-07-18", 88],
        ["2000-07-19", 77],
        ["2000-07-20", 83],
        ["2000-07-21", 111],
        ["2000-07-22", 57],
        ["2000-07-23", 55],
        ["2000-07-24", 60]
      ];
      var dateList = data.map(function(item) {
        return item[0];
      });
      var valueList = data.map(function(item) {
        return item[1];
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({

        // Make gradient line here
        visualMap: [{
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        }, {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: dateList.length - 1
        }],


        title: [{
          left: 'center',
          text: 'Gradient along the y axis'
        }, {
          top: '55%',
          left: 'center',
          text: 'Gradient along the x axis'
        }],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [{
          data: dateList
        }, {
          data: dateList,
          gridIndex: 1
        }],
        yAxis: [{
          splitLine: {
            show: false
          }
        }, {
          splitLine: {
            show: false
          },
          gridIndex: 1
        }],
        grid: [{
          bottom: '60%'
        }, {
          top: '60%'
        }],
        series: [{
          type: 'line',
          showSymbol: false,
          data: valueList
        }, {
          type: 'line',
          showSymbol: false,
          data: valueList,
          xAxisIndex: 1,
          yAxisIndex: 1
        }]
      });
    }
  },
  mounted() { // 组件初始化后执行
    this.drawLine();
  }
}
</script>
<!-- <style lang="less" src="../../style/home.less"></style> -->
<style lang='less'>
@import "../../style/home.less";
</style>
