<template>
<div class="layout">
  <Header :name="name"></Header>
  <Layout>
    <section id="main">
      <Content>
        <div class="banner">
        </div>
        <p class="adress" v-show="clintWidth<520">{{this.GLOBAL.userAddress}}</p>
        <p class="adressETH" v-show="clintWidth<520">
          余额: {{this.earnings[3].value}} ETH
        </p>
        <div class="machine" v-show="clintWidth>520">
          <Row type="flex" justify="center" v-if="machine.length">
            <Col :sm="4" :md="6" :lg="6" v-for="(item,index) in machine" :key="item.name">
            <div class="icon" :class="item.icon"></div>
            <p class="title">{{item.name}}</p>
            <p class="details">{{item.value}}</p>
            </Col>
          </Row>
        </div>
        <div class="earnings" v-show="clintWidth>520">
          <Row type="flex" justify="center" v-if="earnings.length">
            <Col class="icon" :sm="4" :md="6" :lg="6" v-for="(item,index) in earnings" :key="item.name">
            <p class="title">{{item.name}}</br>(ETH)</p>
            <p class="details">{{item.value}}</p>
            </Col>
          </Row>
        </div>
        <p class="adress" v-show="clintWidth>520">钱包地址: {{this.GLOBAL.userAddress}}</p>
      </Content>
    </section>
    <section id="payRecord">
      <Content class="mill">
        <Tabs value="name2" v-if="dataTables" @on-click="tabClick">
          <TabPane style="margin-top:2rem" label="数据" :name="clintWidth<520?'name2':'name1'" v-if="clintWidth<520">
            <Card>
              <p slot="title">主要信息</p>
              <Row type="flex" justify="space-between" v-if="machine.length">
                <Col span="6">
                <div class="icon"></div>
                <p class="title">当前算力</p>
                <p class="details">{{this.userinfo.hr1}}</p>
                </Col>
                <Col span="6">
                <div class="icon"></div>
                <p class="title">24H平均算力</p>
                <p class="details">{{this.userinfo.hr2}}</p>
                </Col>
                <Col span="6">
                <div class="icon"></div>
                <p class="title">24H收益</p>
                <p class="details">{{this.userinfo.balance24}}</p>
                </Col>
              </Row>
              <Row style="margin-top:1rem;" type="flex" justify="space-between" v-if="earnings.length">
                <Col span="12">
                <div class="icon"></div>
                <p class="title">总支付</p>
                <p class="details">{{this.userinfo.paid}}</p>
                </Col>
                <Col span="12">
                <div class="icon"></div>
                <p class="title">总收益</p>
                <p class="details">{{this.userinfo.paid + this.userinfo.balance}}</p>
                </Col>
              </Row>
            </Card>

            <Card style="margin-top:2rem;">
              <p slot="title">矿机信息</p>
              <Row type="flex" justify="space-between" v-if="machine.length">
                <Col span="6">
                <div class="icon"></div>
                <p class="title">矿机总数</p>
                <p class="details">{{this.userinfo.online + this.userinfo.offline}}</p>
                </Col>
                <Col span="6">
                <div class="icon"></div>
                <p class="title">在线机器</p>
                <p class="details">{{this.userinfo.online}}</p>
                </Col>
                <Col span="6">
                <div class="icon"></div>
                <p class="title">离线机器</p>
                <p class="details">{{this.userinfo.offline}}</p>
                </Col>
              </Row>
            </Card>

            <Card style="margin-top:2rem;font-size:12px">
              如果「本地算力 / 24H」和「平均算力 / 24H」的算力差别超过 5%，请检
              查软件日志（网络和超频）和软件抽水。
            </Card>
          </TabPane>
          <TabPane style="margin-top:2rem" label="支付记录" :name="clintWidth<520?'name1':'name2'">
            <Table :columns="columnsPayments" size="small" :data="payment" v-if="payments.length"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page size="small" :total="payments.length" :current="current2" :page-size-opts="[10,50,100]" placement="top" @on-change="changePage2" show-sizer :page-size="pageSize2" @on-page-size-change="changeSize2"></Page>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Content>
    </section>
    <section id="domain">
      <Content class="domain">
        <h2>算力曲线图</h2>
        <div class="shape"></div>
        <Card :style="{marginTop:'5vh'}">
          <div id="myChart" :style="{width: '100%', height: '60vh'}"></div>
        </Card>
      </Content>
    </section>
    <section id="mill">
      <Content class="mill">
        <Tabs value="name1" v-if="dataTables" @on-click="tabClick">
          <TabPane :label="'在线矿机' +  '(' + OnlineData.length + ')' " name="name1">
            <Table :columns="columnsMills" size="small" :data="OnlineDataTables" v-if="dataTables.length"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page size="small" :total="OnlineData.length" :current="current" :page-size-opts="[10,50,100]" placement="top" @on-change="changePage" show-sizer :page-size="pageSize" @on-page-size-change="changeSize"></Page>
              </div>
            </div>
          </TabPane>
          <TabPane :label="'离线矿机' +  '(' + OfflineData.length + ')' " name="name2">
            <Table :columns="columnsMills" size="small" :data="OfflineDataTables" v-if="dataTables.length"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page size="small" :total="OfflineData.length" :current="current1" :page-size-opts="[10,50,100]" placement="top" @on-change="changePage1" show-sizer :page-size="pageSize1" @on-page-size-change="changeSize1"></Page>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Content>
    </section>
  </Layout>
  <!-- <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item"><img src="http://img.hb.aicdn.com/043e6a83a298ae612bd6bc33c259632d8502bc8f1161b-fyZNqN_fw658"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="http://img.hb.aicdn.com/043e6a83a298ae612bd6bc33c259632d8502bc8f1161b-fyZNqN_fw658"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="http://img.hb.aicdn.com/043e6a83a298ae612bd6bc33c259632d8502bc8f1161b-fyZNqN_fw658"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper> -->
  <Footer></Footer>
</div>
</template>

<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import Header from '../../components/header/header.vue'
import Footer from '../../components/footer/footer.vue'
import Table from '../../components/table/table.vue'
export default {
  data() {
    return {
      name: 'wallet',
      pool: this.GLOBAL.pool, //矿池代号
      clintWidth: document.body.clientWidth,
      userinfo: {},
      hashrate: {},
      machine: [{
          name: '矿机数量',
          icon: 'icon-1',
          value: ''
        },
        {
          name: '当前算力',
          icon: 'icon-4',
          value: ''
        },
        {
          name: '24H平均算力',
          icon: 'icon-3',
          value: ''
        },
        // {
        //   name: '在线矿机',
        //   icon: 'icon-4',
        //   value: ''
        // },
        // {
        //   name: '离线矿机',
        //   icon: 'icon-4',
        //   value: ''
        // },
      ],
      earnings: [{
          name: '24小时收益',
          value: ''
        },
        {
          name: '总收益',
          value: ''
        },
        {
          name: '总支付',
          value: ''
        },
        {
          name: '余额',
          value: ''
        },
      ],
      swiperOption: {
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
      columnsMills: [{
          title: '矿机',
          key: 'mill',
          sortable: true,
        },
        {
          title: '当前算力',
          key: 'hr1s'
        },
        {
          title: '24H 平均算力',
          key: 'hr2s',
        },
        {
          title: '拒绝率',
          key: 'rejects'
        },
        {
          title: '更新时间',
          key: 'lastShares'
        },
        {
          title: '最后更新',
          key: 'lastShare'
        },
      ],
      columnsPayments: [{
          title: '序号',
          key: 'index'
        }, {
          title: '时间',
          key: 'time',
        },
        {
          title: '总量',
          key: 'amountFloat'
        },
        {
          title: '交易',
          key: 'txid',
        },
        {
          title: '状态',
          key: 'index'
        },
        {
          title: '状态',
          key: 'index'
        },
      ],
      dataTables: [],
      OnlineData: [],
      OfflineData: [],
      OnlineDataTables: [], //在线矿机
      OfflineDataTables: [], //离线矿机
      payments: [], //支付记录
      payment: [], //显示支付记录
      current: 1, //当前页数
      current1: 1, //当前页数
      current2: 1, //当前页数
      pageSize: 10, //当前每页展示数量
      pageSize1: 10, //当前每页展示数量
      pageSize2: 10, //当前每页展示数量
      total: 0,
    }
  },
  components: {
    Header: Header,
    Footer: Footer,
    Table: Table
  },
  methods: {
    async drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let res = await this.axios.post(this.api.pool_sheet, JSON.stringify({
        wallet: this.GLOBAL.userAddress
      }))
      let timeArr = []
      let workersArr = []
      let powerArr = []
      console.log(res, "算力曲线数据");
      this.hashrate = res.data
      this.hashrate.data.forEach((item) => {
        timeArr.push(item.time)
        workersArr.push(item.workers)
        powerArr.push(item.power)
      })

      timeArr = timeArr.map(function(item) {
        return item.substring(2).split('-').join('/')
      })
      console.log(timeArr, workersArr, powerArr);

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
    async getUserInfo() {
      let res = await this.axios.post(this.api.userinfo, JSON.stringify({
        token: "asd",
        pool: this.pool,
        address: this.GLOBAL.userAddress
      }))
      this.userinfo = res.data.data
      console.log(this.userinfo, 'userinfo')
      this.payments = res.data.data.payments
      this.earnings[0].value = this.userinfo.balance24
      this.earnings[1].value = (this.userinfo.paid + this.userinfo.balance).toFixed(8)
      this.earnings[2].value = this.userinfo.paid
      this.earnings[3].value = this.userinfo.balance
      this.machine[0].value = this.userinfo.online + this.userinfo.offline
      this.machine[1].value = this.userinfo.hr1
      this.machine[2].value = this.userinfo.hr2
      for (let key in this.userinfo.workers) {
        this.userinfo.workers[key].mill = key
        this.dataTables.push(this.userinfo.workers[key])
      }
      this.dataTables.map((item) => {
        if (item.isOnline == 1) {
          this.OnlineData.push(item)
        } else {
          this.OfflineData.push(item)
        }
      })

      //初始化在线矿机的列表
      if (this.OnlineData.length > 0) {
        for (var i = 0; i < (this.OnlineData.length >= this.pageSize ? this.pageSize : this.OnlineData.length); i++) {
          this.OnlineDataTables.push(this.OnlineData[i])
        }
      }
      if (this.OfflineData.length > 0) {
        for (var i = 0; i < (this.OfflineData.length >= this.pageSize1 ? this.pageSize1 : this.OfflineData.length); i++) {
          this.OfflineDataTables.push(this.OfflineData[i])
        }
      }
      if (this.payments.length > 0) {
        for (var i = 0; i < (this.payments.length >= this.pageSize2 ? this.pageSize2 : this.payments.length); i++) {
          this.payment.push(this.payments[i])
        }
      }
      console.log(this.OfflineDataTables, "哈哈");
    },
    changePage(val) {
      console.log(val, "当前" + val + "页数");
      this.current = val
    },
    changePage1(val) {
      console.log(val, "当前" + val + "页数");
      this.current1 = val
    },
    changePage2(val) {
      console.log(val, "当前" + val + "页数");
      this.current2 = val
    },
    changeSize(val) {
      console.log(val, "当前" + val + "页");
      this.pageSize = val
    },
    changeSize1(val) {
      console.log(val, "当前" + val + "页");
      this.pageSize1 = val
    },
    changeSize2(val) {
      console.log(val, "当前" + val + "页");
      this.pageSize2 = val
    },
    checkDataMax(a, b, c, d) { //a:当前显示的表格信息b:当前表格对应的所有信息c:当前的页数d:当前的每页显示数量
      a.splice(0, a.length) //清空当前的显示数据
      for (var i = d * (c - 1) + 1; i <= ((b.length > d * c) ? (d * c) : (b.length)); i++) {
        a.push(b[i - 1]);
      }
    },
    tabClick(name) {
      console.log(name);
      [this.pageSize, this.pageSize1, this.pageSize2] = [10, 10, 10]
    }
  },
  watch: {
    current: function() {
      this.checkDataMax(this.OnlineDataTables, this.OnlineData, this.current, this.pageSize)
    },
    current1: function() {
      this.checkDataMax(this.OfflineDataTables, this.OfflineData, this.current1, this.pageSize1)
    },
    current2: function() {
      this.checkDataMax(this.payment, this.payments, this.current2, this.pageSize2)
    },
    pageSize: function() {
      this.checkDataMax(this.OnlineDataTables, this.OnlineData, this.current, this.pageSize)
    },
    pageSize1: function() {
      this.checkDataMax(this.OfflineDataTables, this.OfflineData, this.current1, this.pageSize1)
    },
    pageSize2: function() {
      this.checkDataMax(this.payment, this.payments, this.current2, this.pageSize2)
    }
  },
  created() {},
  beforeMount() {},
  mounted() {
    this.GLOBAL.userAddress = this.$route.query.eth
    this.drawLine()
    this.getUserInfo()
  },
}
</script>

<style lang="less" scoped>
@import "../../style/wallet/wallet.less";
</style>
