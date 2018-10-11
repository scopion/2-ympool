<template>
<section id="footer">
  <Content>
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
  </Content>
</section>
</template>

<script>
export default {}
</script>

<style lang="less">
#footer {
    background: #000;
    background-image: url("../../images/footer.png");
    background-repeat: no-repeat;
    background-size:  auto;
    background-position: center -30%;
    text-align: center;
    color: white;
    .layout-footer-center {
        background: transparent;
        .white {
            height: 0.4rem;
            width: 45rem;
            margin: 0 auto;
            background: white;
            border-radius: 1rem;
        }
        h1,.copyright {
          color: white
        }
        img {
            margin: 2rem 0;
            vertical-align: middle;
            width: 15rem;
        }
        .copyright {
            margin: 6rem 0 0;
        }
    }
}
</style>
