<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <section id="main">
      <Content :style="{padding: '0 50px'}">
        <Card>
          <div style="min-height: 200px;">
          </div>
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
