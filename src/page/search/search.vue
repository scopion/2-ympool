<template>
<div class="layout">
  <Header :name="name"></Header>
  <Layout>
    <section id="main">
      <Content>
        <div class="banner">
        </div>
        <p class="adress" v-show="clintWidth<520">钱包地址: {{this.GLOBAL.userAddress}}</p>
        <div class="machine">
          <Row type="flex" justify="center" v-if="machine.length">
            <Col :sm="4" :md="6" :lg="6" v-for="(item,index) in machine" :key="item.name">
            <div class="icon" :class="item.icon"></div>
            <p class="title">{{item.name}}</p>
            <p class="details">{{item.value}}</p>
            </Col>
          </Row>
        </div>
        <div class="earnings">
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
    <!-- <section id="domain">
      <Content class="domain">
        <h2>收益概况图</h2>
        <div class="shape"></div>
        <Card :style="{marginTop:'5vh'}">
          <div id="myChart" :style="{width: '100%', height: '60vh'}"></div>
        </Card>
      </Content>
    </section> -->
    <section id="mill">
      <Content class="mill">
        <Tabs value="name1" v-if="dataTables">
          <TabPane :label="'在线矿机' +  '(' + OnlineData.length + ')' " name="name1">
            <Table :columns="columnsMills" size="small" :data="OnlineDataTables" v-if="dataTables.length"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="OnlineData.length" :current="current" @on-change="changePage"></Page>
              </div>
            </div>
          </TabPane>
          <TabPane :label="'离线矿机' +  '(' + OfflineData.length + ')' " name="name2">
            <Table :columns="columnsMills" size="small" :data="OfflineDataTables" v-if="dataTables.length"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="OfflineData.length" :current="current1" @on-change="changePage1"></Page>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Content>
    </section>
    <section id="payRecord">
      <Content class="payRecord">
        <h2>支付记录</h2>
        <div class="shape"></div>
        <Table :columns="columnsPayments" size="small" :data="payments" v-if="dataTables.length"></Table>
        <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
            <Page :total="payments.length" :current="current2" @on-change="changePage2"></Page>
          </div>
        </div>
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
      name: 'search',
      pool: this.GLOBAL.pool, //矿池代号
      clintWidth: document.body.clientWidth,
      userinfo: {},
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
          title: '最后更新',
          key: 'lastShare'
        },
      ],
      columnsPayments: [{
          title: '序号',
          key: 'address'
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
          key: 'address'
        },
      ],
      dataTables: [],
      OnlineData: [],
      OfflineData: [],
      OnlineDataTables: [], //在线矿机
      OfflineDataTables: [], //离线矿机
      payments: [], //支付记录
      current: 1,
      current1: 1,
      current2: 1,
      total: 0,
    }
  },
  components: {
    Header: Header,
    Footer: Footer,
    Table: Table
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
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
      this.earnings[1].value = (this.userinfo.paid + this.userinfo.balance)
      this.earnings[2].value = this.userinfo.paid
      this.earnings[3].value = this.userinfo.balance
      this.machine[0].value = this.userinfo.online + this.userinfo.offline
      this.machine[1].value = this.userinfo.hr1
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
      for (var i = 0; i < 10; i++) {
        this.OnlineDataTables.push(this.OnlineData[i])
        this.OfflineDataTables.push(this.OfflineData[i])
      }
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
      this.current1 = val
    },
    checkDataMax(a, b, c) {
      a.splice(0, a.length) //清空当前的显示数据
      for (var i = 10 * (c - 1) + 1; i <= ((b.length > 10 * c) ? (10 * c) : (b.length)); i++) {
        a.push(b[i - 1]);
      }
      console.log(a);
    },
  },
  watch: {
    current: function() {
      this.checkDataMax(this.OnlineDataTables, this.OnlineData, this.current)
    },
    current1: function() {
      this.checkDataMax(this.OfflineDataTables, this.OfflineData, this.current1)

    },
    current2: function() {
      this.checkDataMax(this.payments, this.payments, this.current2)
    }
  },
  created() {},
  beforeMount() {},
  mounted() {
    // this.drawLine()
    this.GLOBAL.userAddress = this.$route.query.address
    this.getUserInfo()
  },
}
</script>

<style lang="less" scoped>
@import "../../style/search/search.less";
</style>
