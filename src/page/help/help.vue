<template>
<div class="layout">
  <Layout>
    <Header :name="name"></Header>
    <section id="help">
      <Content>
        <div class="layout">
          <Layout>
            <Layout>
              <Sider>
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                  <Submenu name="1">
                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                  </Submenu>
                  <Submenu name="2">
                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                  </Submenu>
                  <Submenu name="3">
                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                  </Submenu>
                </Menu>
              </Sider>
              <Layout>
                <Content>
                  <Divider orientation="left">Left Text</Divider>
                  <Divider orientation="left">Left Text</Divider>
                  <Divider orientation="left">Left Text</Divider>
                  <Divider orientation="left">Left Text</Divider>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
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
      name: 'help',
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

<style lang="less" scoped>
@import "../../style/help/help.less";
</style>
