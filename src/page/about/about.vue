<template>
<div class="layout">
  <Layout>
    <Header :name="name"></Header>
    <section id="main">
      <Content class="background">
        <div class="mianTitle">
          <p>我们稳定 高效 收益高</p>

          <Row>
            <Col span="24">
            <h1>我们是一家专业矿池</h1></Col>
          </Row>
          <Row>
            <Col span="24">
            <h1>服务平台</h1>
            </Col>
          </Row>
          <p>We are a professional mining pool service platform Ut enim ad</p>
        </div>

        <content class="card">
          <Row :gutter="16">
            <Col span="8" class="num num1">
            <Card dis-hover>
              <p></p>
              <h1>安全</h1>
              <p>拥有最专业的解决方案，最专业的团队，为您实时监控数据，保证账户的安全信息，免去您的后顾之忧。。护。 </p>
            </Card>
            </Col>
            <Col span="8" class="num num2">
            <Card dis-hover>
              <p></p>
              <h1>便捷</h1>
              <p>轻松操作，每日结算只需要查看收益即可，无需了解底层技术，焱猫矿池已经提供护。 </p>
            </Card>
            </Col>
            <Col span="8" class="num num3">
            <Card dis-hover>
              <p></p>
              <h1>高效</h1>
              <p>我们最好的技术支持团队将永远为您服务，做到客户开口之前。 </p>
            </Card>
            </Col>
          </Row>
        </content>
      </Content>
    </section>
    <section id="text">
      <Content>
        <Row>
          <Col span="10">
          <p>我们是焱猫矿池，我们创造高效的矿池服务平台。</p>
          <h1> About us</h1>
          <!-- <div>
            123
          </div> -->
          </Col>
          <Col span="14"> 专注区块链多年，焱猫矿池是家兼具视野、创新动力、全国领先的矿池服务平 台。稳定/高效/收益高是我们是3大特点。目前已为国内优秀
          </Col>
        </Row>
      </Content>
    </section>
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
      name: 'about',
    }
  },
  components: {
    Header: Header,
    Footer: Footer
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
