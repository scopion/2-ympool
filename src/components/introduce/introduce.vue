<template>
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
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@img: '../../images';

#introduce {
    height: 60rem;
    margin-top: 10vh;
    padding: 0rem 0 10rem;
    position: relative;
    text-align: center;
    background: url("@{img}/MiningArt@2x.png") no-repeat;
    background-size: 100%;
    background-position: bottom;

    h1 {
        position: absolute;
        bottom: 10rem;
        left: 0;
        right: 0;
        font-size: 3rem;
        text-align: center;
        color: white;
    }

    h2 {
        font-size: 2rem;
        font-weight: normal;
    }

    p {
        font-size: 1rem;
        font-weight: 600;
        color: #1b234d;
    }

    .shape {
        margin: 1rem auto;
        width: 10rem;
    }

    .introduceItem {
        height: 5rem;
        width: 4rem;
        background-size: 100%;
        background-position: center;
        margin: 1rem auto;
    }

    .introduce-1 {
        background: url("@{img}/introduce-1.png") no-repeat center;
    }

    .introduce-2 {
        background: url("@{img}/introduce-2.png") no-repeat center;
    }

    .introduce-3 {
        background: url("@{img}/introduce-3.png") no-repeat center;
    }

    .introduce-4 {
        background: url("@{img}/introduce-4.png") no-repeat center;
    }
}

/* MOBILE */
@media (max-width:520px) {
    #introduce {
        height: 50rem;
        min-height: 50rem;
        margin: 5rem 0 0;

        h1 {
            font-size: 1rem;
            bottom: 2rem;
        }

        h2 {
            font-size: 1rem;
            bottom: 2rem;
        }

        .shape {
            height: 2px;
        }

        .code-row-bg {
            margin-top: 3rem;
        }

        .introduceItem {
            height: 4rem;
            width: 4rem;
        }
    }
}
/* MOBILE */
/* PC */
@media (min-width:320px) {}
@media (min-width: 768px) {}
@media (min-width: 992px) {}
@media (min-width:1200px) {}
/* PC */
</style>
