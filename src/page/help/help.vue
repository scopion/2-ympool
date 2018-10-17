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
                <Menu theme="light" active-name="1" width="auto">
                  <MenuGroup>
                    <MenuItem name="1">
                    <Icon type="md-document" /> ETH挖矿教程
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon type="md-chatbubbles" /> 如何查看收益
                    </MenuItem>
                    <MenuItem name="3">
                    <Icon type="md-heart" /> 如何获取钱包地址
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="md-leaf" /> 什么是挖矿软件
                    </MenuItem>
                    <MenuItem name="5">
                    <Icon type="md-leaf" /> 什么是算力
                    </MenuItem>
                    <MenuItem name="6">
                    <Icon type="md-leaf" /> 新手教程
                    </MenuItem>
                  </MenuGroup>
                </Menu>
              </Sider>
              <Layout class="content">
                <Content>
                  <Divider orientation="center">ETH挖矿教程</Divider>
                  <Content class="text">
                    1.生成钱包地址</br>
                    2.下载挖矿软件</br>
                    3.连接矿池</br>
                    4.查看矿机状态和收益</br>
                    5.常见问题</br>
                  </Content>
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
