<template>
<div class="layout">
  <Layout>
    <Header :name="name"></Header>
    <section id="main">
      <Content class="background">
        <div class="mianTitle">
          <!-- <p>我们稳定 高效 收益高</p> -->
          <Row>
            <Col span="24">
            <h1>我们是一家专业矿池</h1></Col>
          </Row>
          <Row>
            <Col span="24">
            <h1>服务平台</h1>
            </Col>
          </Row>
          <p>We are a professional mining pool service platform</p>
        </div>

        <content class="card">
          <Row :gutter="16">
            <Col span="8" class="num num1">
            <Card dis-hover>
              <p></p>
              <h1>安全</h1>
              <p v-show="clintWidth>520">拥有最专业的解决方案，最专业的团队，为您实时监控数据，保证账户的安全信息，免去您的后顾之忧。</p>
            </Card>
            </Col>
            <Col span="8" class="num num2">
            <Card dis-hover>
              <p></p>
              <h1>便捷</h1>
              <p v-show="clintWidth>520">轻松操作，每日结算只需要查看收益即可，无需了解底层技术，焱猫矿池已经提供。 </p>
            </Card>
            </Col>
            <Col span="8" class="num num3">
            <Card dis-hover>
              <p></p>
              <h1>高效</h1>
              <p v-show="clintWidth>520">我们最好的技术支持团队将永远为您服务，做到客户开口之前。 </p>
            </Card>
            </Col>
          </Row>
        </content>
      </Content>
    </section>
    <section id="text">
      <Content>
        <Row v-show="clintWidth>520">
          <Col :sm="12" :md="10" :lg="10">
          <p>我们是焱猫矿池，我们创造高效的矿池服务平台。</p>
          <h1> About us</h1>
          </Col>
          <Col :sm="12" :md="10" :lg="14">专注区块链多年，焱猫矿池是家兼具视野、创新动力、全国领先的矿池服务平台。稳定高效/收益高是我们的三大特点。目前已为国内优秀企业提供了专业有效的挖矿服务专业解决方案。
          </Col>
        </Row>
        <Row v-show="clintWidth<520" class="center">
          <Col :sm="12" :md="10" :lg="10">
          <p>我们是焱猫矿池，我们创造高效的矿池服务平台。</p>
          <h1> About us</h1>
          </Col>
        </Row>
        <Row v-show="clintWidth<520">
          <Col :sm="12" :md="10" :lg="14">专注区块链多年，焱猫矿池是家兼具视野、创新动力、全国领先的矿池服务平台。稳定高效/收益高是我们的三大特点。目前已为国内优秀企业提供了专业有效的挖矿服务专业解决方案。
          </Col>
        </Row>
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
      name: 'about',
      clintWidth: document.body.clientWidth,
    }
  },
  components: {
    Header: Header,
    Footer: Footer,
    Slogan: Slogan,
    Introduce: Introduce,
  },
  methods: {},
  computed: {},
  filters: {},
  mounted() { // 组件初始化后执行
  },
  created() {},
  beforeUpdate() {}
}
</script>
<style lang='less' scoped>
@import "../../style/about/about.less";
</style>
