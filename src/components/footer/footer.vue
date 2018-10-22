<template>
<section id="footer">
  <Content>
    <Footer class="layout-footer-center">
      <div class="white" v-show="width>520"></div>
      <img class="logo" src="../../images/LogoW@2x.png">
      <h1>欢迎来到焱猫矿池，一起挖矿吧！</h1>
      <div class="footerBox" v-show="width>520">
        <div class="text">
          <div>
            02018 -版权所有</br>电脑版|本站使用焱猫矿池搭建|管理登录
          </div>
        </div>
        <div class="text1">
          <div>
            02018 -版权所有</br>电脑版|本站使用焱猫矿池搭建|管理登录
          </div>
        </div>
        <div class="img">
          <div class="">
            <div class="footerImg">
              <Poptip trigger="hover" title="手机号" content="15377047300">
                <img src="../../images/tel.png" alt="">
              </Poptip>
              <Poptip trigger="hover" title="QQ交流群号" content="660390608">
                <img src="../../images/qq.png" alt="">
              </Poptip>
            </div>
            <div class="footerText">
              焱猫矿池@ 2018 ympool.com</br>
              扫码关注焱猫矿池公众号
            </div>
          </div>
          <img src="../../images/gongzhonghao.jpg" alt="">
        </div>
      </div>


      <div class="footerBoxM" v-show="width<520">
        <div class="img">
          <div class="">
            <div class="footerImg">
              <Poptip trigger="hover" title="手机号" content="15377047300">
                <img src="../../images/tel.png" alt="">
              </Poptip>
              <Poptip trigger="hover" title="QQ交流群号" content="660390608">
                <img src="../../images/qq.png" alt="">
              </Poptip>
            </div>
            <div class="footerText">
              焱猫矿池@ 2018 ympool.com</br>
              扫码关注焱猫矿池公众号
            </div>
          </div>
          <img src="../../images/gongzhonghao.jpg" alt="">
        </div>
        <div class="text1">
          <div>
            02018 -版权所有</br>电脑版|本站使用焱猫矿池搭建|管理登录
          </div>
        </div>
      </div>
    </Footer>
  </Content>
</section>
</template>

<script>
export default {
  data() {
    return {
      width: document.body.clientWidth
    }
  }
}
</script>

<style lang="less">
#footer {
    background: #120b2f;
    background-image: url("../../images/footer.png");
    background-repeat: no-repeat;
    background-size: 35%;
    background-position: center 65%;
    text-align: center;
    color: white;

    .ivu-layout-content {
        max-width: 1350px;
        .layout-footer-center {
            background: transparent;
            .white {
                height: 0.1rem;
                width: 45rem;
                margin: 0 auto;
                background: white;
                border-radius: 1rem;
            }
            .copyright,
            h1 {
                color: white;
            }
            img.logo {
                margin: 1rem 0;
                vertical-align: middle;
                width: 15rem;

            }
            .footerBox {
                color: white;
                display: flex;
                margin-top: 2vh;
                justify-content: space-between;
                .text {
                    display: flex;
                    color: #120b2f;
                    div {
                        display: flex;
                        align-items: flex-end;
                    }
                }

                .text1 {
                    display: flex;
                    div {
                        display: flex;
                        color: white;
                        align-items: flex-end;
                    }
                }
            }
            .img {
                align-items: flex-end;
                display: flex;
                flex-direction: row;
                .footerImg {
                    text-align: right;
                    padding-right: 1rem;
                    .ivu-poptip {
                        text-align: left;
                    }
                }
                .footerText {
                    text-align: left;
                    padding-right: 1rem;
                }
            }

        }
    }

}

/* MOBILE */
@media (max-width:520px) {
    #footer {
        background-size: 110%;
        .layout-footer-center {
            .white {
                width: 15rem;
                height: 0.2rem;
            }
            img.logo {
                width: 10rem;
            }
            h1 {
                font-size: 1rem;
            }
            .footerBoxM {
                .img {
                    color: white;
                    display: block;
                    .footerImg,
                    .footerText {
                        text-align: center;
                        margin: 0.5rem 0;
                        padding-right: 0;

                    }
                }
            }
            .text1 {
                color: white;
            }
        }
    }
}
/* MOBILE */
</style>
