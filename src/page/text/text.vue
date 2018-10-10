<style lang="less" scoped>
.ivu-layout-header {
    background: #000;
    height: 8vh;
    line-height: 8vh;
    .ivu-menu-dark {
        background: #000;
    }
    .ivu-menu-horizontal {
        height: 8vh;
        min-height: 8vh;
    }
    .layout-nav {
        height: 100%;
        .ivu-menu-item {
            top: 1vh;
        }
    }
    .layout-logo {
        width: 120px;
        height: 50px;
        background: url("../../images/logo@2x.png") no-repeat;
        background-size: contain;
        float: left;
        position: relative;
        top: 2vh;
        left: 20px;
    }
}

.layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}

.layout-nav {
    width: 500px;
    margin: 0 20px 0 auto;
}

.layout-footer-center {
    text-align: center;
}
</style>
<template>
<div class="layout">
  <Layout>
    <Header></Header>
    <Content :style="{padding: '0 50px'}">
      <Card>
        <div style="min-height: 200px;">
          Content
        </div>
      </Card>
    </Content>
    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </Layout>
</div>
</template>
<script>
import Header from '../../components/header/header.vue'
export default {
  data() {
    return {
      name: 'home',
    }
  },
  components: {
    Header: Header
  },
  methods: {},
  mounted() { // 组件初始化后执行
  }
}
</script>
