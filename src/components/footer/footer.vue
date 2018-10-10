<template>
<Footer class="layout-footer-center">
  <div class="white"></div>
  <img src="../../images/LogoW@2x.png">
  <h1>欢迎来到焱猫矿池，一起挖矿吧！</h1>
  <div class="copyright">
    <Row>
      <Col span="8" offset="8"></Col>
      <Col span="8"></Col>
    </Row>
    <Row>
      <Col span="8" offset="8">02018 -版权所有</Col>
      <Col span="8">焱猫矿池@ 2018 ympool.com</Col>
    </Row>
    <Row>
      <Col span="8" offset="8">电脑版|本站使用焱猫矿池搭建|管理登录</Col>
      <Col span="8">扫码关注焱猫矿池公众号</Col>
    </Row>
  </div>
</Footer>
</template>

<script>
export default {}
</script>

<style lang="less">
.layout-footer-center {
    background: #000;
    text-align: center;
    color: white;
    .white {
        height: 0.4rem;
        width: 45rem;
        margin: 0 auto;
        background: white;
        border-radius: 1rem;
    }
    img {
        margin: 2rem 0;
        vertical-align: middle;
        width: 15rem;
    }
    .copyright {
      margin: 6rem 0 0rem;
    }
}
</style>
