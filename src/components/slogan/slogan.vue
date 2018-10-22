<template>
<section id="slogan">
  <Content>
    <div class="slogan">
      焱猫矿池，留下一段挖矿的光辉岁月史
    </div>
  </Content>

</section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@img: "../../images";
#slogan {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #171026;
    font-size: 3rem;
    color: white;
    position: relative;
    height: 20rem;
    margin-top: 10vh;
    .slogan {
        padding: 2rem 0;
        background: url("@{img}/slogan.png") no-repeat center;
        background-size: contain;
    }
}

/* MOBILE */
@media (max-width:520px) {
    #slogan {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #171026;
        font-size: 1rem;
        color: white;
        position: relative;
        height: 10rem;
        margin-top: 20vh;
        .slogan {
            padding: 1rem 0;
            background-image: url("@{img}/slogan.png");
            background-size: contain;
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
