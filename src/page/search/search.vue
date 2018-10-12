<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <section id="main">
      <Content :style="{padding: '0 50px'}">
        <div class="banner" style="min-height: 200px;">
        </div>
        <div class="machine">
          <Row type="flex" justify="space-around">
            <Col :span="4">
            <div class="icon-1">
            </div>
            <p class="title">矿机数量</p>
            <p class="details">{{userinfo.online + userinfo.offline}}</p>
            </Col>
            <Col :span="4">
            <div class="icon-2">
            </div>
            <p class="title">在线机器</p>
            <p class="details">{{userinfo.online}}</p>
            </Col>
            <Col :span="4">
            <div class="icon-3">
            </div>
            <p class="title">离线机器</p>
            <p class="details">{{userinfo.offline}}</p>
            </Col>
            <Col :span="4">
            <div class="icon-4">
            </div>
            <p class="title">算力</p>
            <p class="details">{{userinfo.hr1}}</p>
            </Col>
          </Row>
        </div>
        <div class="earnings">
          <Row type="flex" justify="center">
            <Col class="icon" :span="4">
            <p class="title">24小时收益</br>(ETH)</p>
            <p class="details">{{userinfo.balance24}}</p>
            </Col>
            <Col class="icon" :span="4">
            <p class="title">待支付</br>(ETH)</p>
            <p class="details">{{userinfo.hr1}}</p>
            </Col>
            <Col class="icon" :span="4">
            <p class="title">总支付</br>(ETH)</p>
            <p class="details">{{userinfo.paid}}</p>
            </Col>
            <Col class="icon" :span="4">
            <p class="title">余额</br>(ETH)</p>
            <p class="details">{{userinfo.balance}}</p>
            </Col>
          </Row>
        </div>
        <p class="adress">{{this.GLOBAL.userAddress}}</p>
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
        <Tabs value="name1">
          <TabPane label="离线矿机" name="name1">
            <Table :columns="columns5" :data="data5"></Table>
          </TabPane>
          <TabPane label="活跃矿机" name="name2">
            <Table :columns="columns5" :data="data5"></Table>
          </TabPane>
        </Tabs>
      </Content>
    </section>
    <section id="payRecord">
      <Content class="payRecord">
        <h2>支付记录</h2>
        <div class="shape"></div>
        <Table :columns="columns5" :data="data5"></Table>
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
      userinfo: {},
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
      columns5: [{
          title: 'Date',
          key: 'date',
          sortable: true
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          sortable: true
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data5: [{
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
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
  },
  mounted() {
    // this.drawLine();
    this.userinfo = this.$route.params
    console.log(this.userinfo)
    console.log(this.GLOBAL.userAddress)
  },
  // props: [],
  // propsData: {},
  // computed: {},
  // methods: {},
  // watch: {},
  // el() {},
  // template: '',
  // render() {},
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // directives: {},
  // filters: {},
  // components: {},
  // parent: null,
  // mixins: [],
  // name: '',
  // extends: {},
  // delimiters: ['{{', '}}'],
  // functional: false
}
</script>

<style lang="less" scoped>
@import '../../style/search.less';
</style>
