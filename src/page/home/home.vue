<template>
<div class="layout">
  <Layout>
    <Header :name="name"></Header>
    <section id="main">
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
          <Input class="input" v-model="searchInput" @on-change="inputChange($event)" @on-enter="search()" placeholder="输入钱包地址......" size="large" autofocus>
          </Input>
          <Button type="primary" shape="circle" icon="ios-search" @click="search()">查询</Button>
          <!--           <div class="searchBar"><span @click="search()"></span>
</div> -->
        </Content>
        <Card class="data" shadow>
          <Row type="flex" justify="space-around">
            <Col span="8">
            <div class="dataItem dataItem-1">
            </div>
            <p>在线矿工</p>
            <p class="details">{{poolinfo.miners}}</p>
            </Col>
            <Col span="8">
            <div class="dataItem dataItem-2">
            </div>
            <p>矿池算力</p>
            <p class="details">{{poolinfo.hr1}}</p>
            </Col>
            <Col span="8">
            <div class="dataItem dataItem-3">
            </div>
            <p>全网算力</p>
            <p class="details">{{poolinfo.hr2}} <b>TH/s</b></p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span="8">
            <div class="dataItem dataItem-4">
            </div>
            <p>当前区块</p>
            <p class="details">{{poolinfo.blocks}}</p>
            </Col>
            <Col span="8">
            <div class="dataItem dataItem-5">
            </div>
            <p>全网难度</p>
            <p class="details">{{poolinfo.difficult}}</p>
            </Col>
            <Col span="8">
            <div class="dataItem dataItem-6">
            </div>
            <p>24小时收益</p>
            <p class="details">{{poolinfo.estReward}} <b>MH/s</b></p>
            </Col>
          </Row>
        </Card>
      </Content>
    </section>
    <!-- <section id="demain">
      <Content class="domain">
        <h2>全网版图</h2>
        <div class="shape"></div>
        <Card shadow>
          <div class="domainIcon">
            <span></span>ethereum (Mhash/s)
          </div>
          <div id="myChart" :style="{width: '100%', height: '60vh'}"></div>
        </Card>
      </Content>
    </section> -->
    <section id="introduce">
      <Content class="introduce">
        <h2>领先的矿池服务平台</h2>
        <div class="shape"></div>
        <Row type="flex" justify="space-between" class="code-row-bg">
          <Col :sm="4" :md="6" :lg="6">
          <div class="introduceItem introduce-1">
          </div>
          <p>用户视角</p>
          <p>稳定服务,解决用户需求</p>
          </Col>
          <Col :sm="4" :md="6" :lg="6">
          <div class="introduceItem introduce-2">
          </div>
          <p>小金库</p>
          <p>收益及时到您钱包里</p>
          </Col>
          <Col :sm="4" :md="6" :lg="6">
          <div class="introduceItem introduce-3">
          </div>
          <p>轻松支付</p>
          <p>每日结算,便捷式支付</p>
          </Col>
          <Col :sm="4" :md="6" :lg="6">
          <div class="introduceItem introduce-4">
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
      name: 'home',
      pool: this.GLOBAL.pool, //矿池代号
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
      this.getPoolInfo()
      setInterval(() => {
        this.getPoolInfo() //矿池信息 绘制曲线
        console.log("已经刷新")
      }, 3000)
      // this.poolratechart() //全网版图
    },
    inputChange(e) {
      console.log(e.target.value);
      console.log(this.searchInput)
    },
    async search() { //查询
      if (this.searchInput.length == 42) { //判断钱包格式
        sessionStorage.setItem("user", this.searchInput)
        this.GLOBAL.userAddress = sessionStorage.getItem("user")
        this.$router.push({
          name: 'search',
          params: '',
        })
      } else {
        this.$Message.error({
          content: "钱包地址格式错误!",
          duration: 1,
          closable: true
        });
        this.searchInput = ''
      }
    },
    async getPoolInfo() { //获取矿池信息
      let res = await this.axios.post(this.api.poolinfo, JSON.stringify({
        token: "asd",
        pool: this.pool,
      }))
      if (res.data.code == "2000") {
        this.poolinfo = res.data.data
        console.log(this.poolinfo, "矿池信息");
      } else {
        this.$Message.error({
          content: "数据请求失败!",
          duration: 1,
          closable: true
        });
      }
    },
    async poolratechart() { //获取全网版块信息
      let res = await this.axios.post(this.api.poolratechart, JSON.stringify({
        token: "asd",
        pool: this.pool,
      }))
      if (res.data.code == "2000") {
        console.log(res)
        this.poolratechart = res.data.data
        this.map1 = this.poolratechart.map(function(item) {
          return item.time
        })
        this.map2 = this.poolratechart.map(function(item) {
          return item.hashrate
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption(this.common.map(this.map1, this.map2))
        console.log(this.poolratechart, "全网版图");
      } else {
        this.$Message.error({
          content: "数据请求失败!",
          duration: 1,
          closable: true
        });
      }
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
    this.common.msg()
    this.$Message.error(this.common.msg(1, 1, true));
    console.log(this.$md5('holle'));
  },
  created() {},
  beforeUpdate() {}
}
</script>
<style lang='less' scoped>
@import "../../style/commonStyle.css";
@import "../../style/home.less";
</style>
