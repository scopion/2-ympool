<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <section id="main">
      <Content :style="{padding: '0 50px'}">
        <div class="banner" style="min-height: 200px;">
        </div>
        <div class="machine">
          <Row type="flex" justify="center">
            <Col :span="4">
            <div class="icon-1">
            </div>
            <p class="title">矿机数量</p>
            <p class="details">123123</p>
            </Col>
            <Col :span="4">
            <div class="icon-2">
            </div>
            <p class="title">在线机器</p>
            <p class="details">123123</p>
            </Col>
            <Col :span="4">
            <div class="icon-3">
            </div>
            <p class="title">离线机器</p>
            <p class="details">123123</p>
            </Col>
            <Col :span="4">
            <div class="icon-4">
            </div>
            <p class="title">算力</p>
            <p class="details">123123</p>
            </Col>
          </Row>
        </div>
        <div class="earnings">
          <Row type="flex" justify="center">
            <Col class="icon" :span="4">
            <p>24小时收益</br>(ETH)</p>
            <p class="details">24小时收益</p>
            </Col>
            <Col class="icon" :span="4">
            <p>待支付</br>(ETH)</p>
            <p class="details">待支付</p>
            </Col>
            <Col class="icon" :span="4">
            <p>总支付</br>(ETH)</p>
            <p class="details">总支付</p>
            </Col>
            <Col class="icon" :span="4">
            <p>余额</br>(ETH)</p>
            <p class="details">余额</p>
            </Col>
          </Row>
        </div>
      </Content>
    </section>
    <section id="">
      <Content class="domain">
        <h2>全网版图</h2>
        <div class="shape"></div>
        <Card :style="{marginTop:'5vh'}">
          <div id="myChart" :style="{width: '100%', height: '60vh'}"></div>
        </Card>
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
export default {
  data() {
    return {
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
      }
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  mounted() {
    console.log(this.$route.params)
    this.commonFunction.login()
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
