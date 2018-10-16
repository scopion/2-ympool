<style lang="less" scoped>
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
