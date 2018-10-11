<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <section id="main">
      <Content class="background">
        <div class="mianTitle" :style="{lineHeight:'5rem'}">
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
          <Input class="input" v-model="searchInput" :style="{width:'50%'}" placeholder="输入钱包地址......" size="large" autofocus search number clearable/>
        </Content>
        <Card class="data" :style="{width: '55vw'}">
          <Row type="flex" justify="space-around">
            <Col span="8">
            <div class="dataTiem-1">
            </div>
            <p>在线矿工</p>
            <p class="details">{{poolinfo.miners}}</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-2">
            </div>
            <p>矿池算力</p>
            <p class="details">{{poolinfo.hr1}}</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-3">
            </div>
            <p>全网算力</p>
            <p class="details">{{poolinfo.hr2}} <b>TH/s</b></p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around" :style="{paddingTop: '4vh'}">
            <Col span="8">
            <div class="dataTiem-4">
            </div>
            <p>当前区块</p>
            <p class="details">{{poolinfo.blocks}}</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-5">
            </div>
            <p>全网难度</p>
            <p class="details">{{poolinfo.difficult}}</p>
            </Col>
            <Col span="8">
            <div class="dataTiem-6">
            </div>
            <p>24小时收益</p>
            <p class="details">{{poolinfo.estReward}} <b>MH/s</b></p>
            </Col>
          </Row>
        </Card>
      </Content>
    </section>
    <section id="demain">
      <Content class="domain">
        <h2>全网版图</h2>
        <div class="shape"></div>
        <Card :style="{marginTop:'5vh'}">
          <div id="myChart" :style="{width: '100%', height: '60vh'}"></div>
        </Card>
      </Content>
    </section>
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
      searchInput: '',
      value15: '',
      poolinfo: {},
      poolinfo: {},
      map1: [],
      map2: []
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  methods: {
    init() { //初始化
      this.getPoolInfo() //矿池信息 绘制曲线
      this.poolratechart() //全网版图
    },
    async getPoolInfo() {
      var res = await this.axios.post(this.api.poolinfo, JSON.stringify({
        token: "asd",
        pool: "uu",
      }))
      this.poolinfo = res.data
      console.log(this.poolinfo, "矿池信息");
    },
    async poolratechart() {
      var res = await this.axios.post(this.api.poolratechart, JSON.stringify({
        token: "asd",
        pool: "uu",
      }))
      this.poolratechart = res.data
      this.map1 = this.poolratechart.map(function(item) {
        return item.time
      })

      this.map2 = this.poolratechart.map(function(item) {
        return item.hashrate
      })
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: this.map1,
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
          data: this.map2,
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(255, 158, 68)'
            }, {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }])
          },
        }]
      });
      console.log(this.poolratechart, "全网版图");
    },
  },
  computed: {
    formatNumber() {
      if (this.value15 === '') return 'Enter number';

      function parseNumber(str) {
        const re = /(?=(?!)(d{3})+$)/g;
        return str.replace(re, ',');
      }
      return parseNumber(this.value15);
    }
  },
  mounted() { // 组件初始化后执行
    this.init()
    // this.$router.push({
    //   name: 'search',
    //   params: {
    //   }
    // });
    console.log(this.getPoolInfo());
  },
  created() {},
  beforeUpdate() {}
}
</script>
<style lang='less' scoped>
@import "../../style/home.less";
</style>
