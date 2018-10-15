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
    <Header :name="name"></Header>
    <Content :style="{padding: '0 50px'}">
      <Card>
        <div style="min-height: 200px;padding:5rem">
          <h1>这是备用页面</h1>
        </div>
      </Card>
    </Content>
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
      name: 'text',
    }
  },
  components: {
    Header: Header,
    Footer: Footer
  },
  methods: {},
  mounted() { // 组件初始化后执行
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
