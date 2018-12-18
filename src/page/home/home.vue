<template>
<div class="layout">
  <Layout>
    <Header :name="name"></Header>
    <section id="main">
      <Content class="background">
        <div class="mianTitle">
          <Row>
            <Col span="24">
            <h1>焱猫矿池服务平台</h1>
            </Col>
          </Row>
          <Row>
            <Col span="24">
            <p>稳定 高效 收益高</p>
            </Col>
          </Row>
          <div class="shape"></div>
        </div>
        <Content class="search">
          <Input class="input" v-model="searchInput" search @on-change="inputChange($event)" @on-search="search()" placeholder="输入钱包地址......" size="large" autofocus>
          </Input>
          <p>挖矿地址：eth.ympool.com:8008</p>
          <!-- <div class="searchBar"><span @click="search()"></span>
</div> -->
        </Content>
        <Card class="data" dis-hover v-show="clintWidth>520">
          <Row type="flex" justify="space-around">
            <Col :span="4">
            <p class="details">在线矿工</p>
            <div class="dataItem dataItem-1">
            </div>
            <p>{{poolinfo.miners}}</p>
            </Col>
            <Col :span="4">
            <p class="details">矿池算力</p>
            <div class="dataItem dataItem-2">
            </div>
            <p>{{poolinfo.hr1}}</p>
            </Col>
            <Col :span="4">
            <p class="details">全网算力 </p>
            <div class="dataItem dataItem-3">
            </div>
            <p>{{poolinfo.hr2 | fixed(2)}} <b>TH</b> </p>
            </Col>
            <Col :span="4">
            <p class="details">当前区块</p>
            <div class="dataItem dataItem-4">
            </div>
            <p>{{poolinfo.blocks}}</p>
            </Col>
            <Col :span="4">
            <p class="details">全网难度</p>
            <div class="dataItem dataItem-5">
            </div>
            <p>{{poolinfo.difficult}}</p>
            </Col>
            <Col :span="4">
            <p class="details">24H百兆收益</p>
            <div class="dataItem dataItem-6">
            </div>
            <p>{{poolinfo.estReward | fixed(4) }} ETH</p>
            </Col>
          </Row>
        </Card>
        <Card class="data" dis-hover v-show="clintWidth<520">
          <Row type="flex" justify="space-around">
            <Col :span="4">
            <div class="dataItem dataItem-1">
            </div>
            <p>{{poolinfo.miners}}</p>
            <p class="details">在线矿工</p>
            </Col>
            <Col :span="4">
            <div class="dataItem dataItem-2">
            </div>
            <p>{{poolinfo.hr1}}</p>
            <p class="details">矿池算力</p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col :span="4">
            <div class="dataItem dataItem-3">
            </div>
            <p>{{poolinfo.hr2 | fixed(2)}}</p>
            <p class="details">全网算力 TH/s</p>
            </Col>
            <Col :span="4">
            <div class="dataItem dataItem-4">
            </div>
            <p>{{poolinfo.blocks}}</p>
            <p class="details">当前区块</p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col :span="4">
            <div class="dataItem dataItem-5">
            </div>
            <p>{{poolinfo.difficult}}</p>
            <p class="details">全网难度</p>
            </Col>
            <Col :span="4">
            <div class="dataItem dataItem-6">
            </div>
            <p>{{poolinfo.estReward | fixed(4) }} ETH</p>
            <p class="details">24H百兆收益</p>
            </Col>
          </Row>
        </Card>
      </Content>
    </section>
    <section id="domain">
      <Content class="domain">
        <h2>算力曲线图</h2>
        <div class="shape"></div>
        <Card :style="{marginTop:'5vh',padding:'16px 0'}">
          <div id="myChart" :style="{width: '100%', height: '55vh'}"></div>
        </Card>
      </Content>
    </section>
    <Slogan></Slogan>
    <Introduce></Introduce>
    <Footer></Footer>
  </Layout>
</div>
</template>
<script>
import Header from '../../components/header/header.vue' //公共头
import Footer from '../../components/footer/footer.vue' //公共尾
import Slogan from '../../components/slogan/slogan.vue' //公共尾
import Introduce from '../../components/introduce/introduce.vue' //公共尾
export default {
  data() {
    return {
      name: 'home',
      pool: this.GLOBAL.pool, //矿池代号
      clintWidth: document.body.clientWidth,
      searchInput: '',
      value15: '',
      poolinfo: {},
      hashrate: {},
      map1: [],
      map2: [],
      timer: null,
    }
  },
  components: {
    Header: Header,
    Footer: Footer,
    Slogan: Slogan,
    Introduce: Introduce,
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
      console.log(this.searchInput)
    },
    async search() { //查询
      if (this.searchInput.length == 42) { //判断钱包格式
        this.GLOBAL.userAddress = this.searchInput
        let query = {
          eth: this.GLOBAL.userAddress
        }
        this.$router.push({
          name: 'wallet.html',
          query: query,
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
    async drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let res = await this.axios.get(this.api.pool_allsheet)
      let timeArr = []
      let workersArr = []
      let powerArr = []
      console.log(res, "算力曲线数据");
      this.hashrate = res.data
      this.hashrate.data.forEach((item) => {
        timeArr.push(item.time)
        workersArr.push(item.worker)
        powerArr.push(item.power)
      })

      timeArr = timeArr.map(function(item) {
        return item.substring(2).split('-').join('/')
      })
      console.log(Math.max(...powerArr));
      app.title = '算力曲线图';

      var colors = ['#4d74ff', '#ff4d4d', '#675bba'];
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表

      myChart.setOption({
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: this.clintWidth > 575 ? '20%' : 0,
        },
        toolbox: {
          show: this.clintWidth > 575 ? true : false,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {
              readOnly: false
            },
            magicType: {
              type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{
            show: true,
            start: 0,
            end: 100
          },
          {
            show: this.clintWidth > 575 ? true : false,
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            show: this.clintWidth > 575 ? true : false,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: false,
            left: '93%'
          }
        ],
        legend: {
          data: ['算力', '在线矿工', '平均温度']
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: timeArr
        }],
        yAxis: [{
            show: this.clintWidth > 575 ? true : false,
            type: 'value',
            name: '算力',
            min: 0,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value} G'
            }
          },
          {
            show: this.clintWidth > 575 ? true : false,
            type: 'value',
            name: '在线矿工',
            min: 0,
            position: 'right',
            offset: 80,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} 人'
            }
          },
        ],
        series: [{
            name: '算力',
            smooth: true,
            sampling: 'average',
            type: 'line',
            data: powerArr,
            markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
          },
          {
            name: '在线矿工',
            smooth: true,
            sampling: 'average',
            type: 'line',
            yAxisIndex: 1,
            data: workersArr,
            markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ]
            },
          },
        ]
      });
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
  filters: {
    fixed: function(a, b) {
      return Number(a).toFixed(b)
    }
  },
  mounted() { // 组件初始化后执行
    this.common.msg()
    this.drawLine()

    console.log(this.$md5('holle'));
  },
  created() {
    this.getPoolInfo()
    this.timer = setInterval(() => {
      this.getPoolInfo()
    }, 5000)
  },
  beforeUpdate() {},
  beforeDestroy() {
    if (this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.timer); //关闭
    }
  }
}
</script>
<style lang='less' scoped>
@import "../../style/home/home.less";
</style>
