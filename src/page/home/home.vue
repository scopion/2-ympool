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
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '在Vue中使用echarts'
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
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
