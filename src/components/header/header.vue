<style lang="less" scoped>
.ivu-layout-header {
    background: #000;
    height: 10vh;
    line-height: 10vh;
    position: fixed;
    width: 100%;
    z-index: 1000;
    .ivu-menu-dark {
        background: #000;
    }
    .ivu-menu-horizontal {
        height: 10vh;
        min-height: 10vh;
    }
    .layout-nav {
        height: 100%;
        .ivu-menu-item {
            top: 1.5vh;
        }
    }
    .layout-logo {
        cursor: pointer;
        width: 150px;
        height: 100%;
        line-height: 1rem;
        vertical-align: middle;
        background: url("../../images/logo@2x.png") no-repeat center;
        background-size: contain;
        float: left;
        position: relative;
        left: 20px;
    }
    .mobileMenu {
        text-align: right;
        flex-direction: row-reverse;
        display: flex;
        align-items: center;
        height: 100%;
    }
}

.layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}

.layout-nav {
    width: 300px;
    margin: 0 20px 0 auto;
}

.layout-footer-center {
    text-align: center;
}
.ivu-menu-item a {
    transition: all 0.3s;
    color: white;
}

.ivu-menu-item a:hover {
    color: #24d39b;
}

.router-link-active {
    color: #24d39b!important;
}

/* MOBILE */
@media (max-width:520px) {
    .ivu-layout-header {
        padding: 0;

        .layout-logo {
            width: 120px;
        }

        .layout-nav {
            width: 140px;
            float: right;
            margin: 0;
            .ivu-menu-item {
                padding: 0 10px;
            }
        }
        .ivu-layout-sider-zero-width-trigger {
            top: 12px;
            background: red;
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


<template>
<Header :name="name">
  <Content>
    <Menu mode="horizontal" :theme="theme" :active-name="activemenu">
      <div class="layout-logo" @click="backHome()">
      </div>
      <div class="layout-nav" v-show="name != 'search'" v-if="clintWidth>520">
        <MenuItem name="1">
        <router-link :to="{ name: 'home', params: {} }" exact>首页</router-link>
        </MenuItem>
        <MenuItem name="2">
        <router-link :to="{ name: 'text', params: {} }" exact>矿池收益</router-link>
        </MenuItem>
        <!-- <MenuItem name="3">
        <router-link :to="{ name: '', params: {} }" exact>挖矿帮助</router-link>
        </MenuItem> -->
        <!-- <MenuItem name="4">
      <router-link :to="{ name: 'search', params: {} }" exact>关于我们</router-link>
      <Icon type="ios-paper"></Icon>
      </MenuItem> -->
      </div>
      <div class="mobileMenu" v-else>
        <Button @click="value = true" type="primary">菜单</Button>
      </div>
      <Drawer title="焱猫矿池" :closable="false" v-model="value" width="200">
        <Menu :theme="light" active-name="1">
          <MenuGroup title="内容管理">
            <MenuItem name="1">
            <Icon type="md-document" /> 文章管理
            </MenuItem>
            <MenuItem name="2">
            <Icon type="md-chatbubbles" /> 评论管理
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="统计分析">
            <MenuItem name="3">
            <Icon type="md-heart" /> 用户留存
            </MenuItem>
            <MenuItem name="4">
            <Icon type="md-leaf" /> 流失用户
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Drawer>
    </Menu>
  </Content>
</Header>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      theme: 'dark',
      activemenu: 1, // 高亮
      isCollapsed: true,
      clintWidth: document.body.clientWidth
    }
  },
  props: ["name"],
  methods: {
    backHome: function() {
      this.$router.push({
        name: 'home',
        params: {}
      })
    }
  },
  computed: {
    menuitemClasses: function() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  watch: {
    clintWidth(val, oldval) {
      console.log(val, oldval)
    }
  },
  mounted() { // 组件初始化后执行
    console.log(this.name);
    console.log(this.clintWidth);
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.clintWidth = window.screenWidth
      })()
    }
  }
}
</script>
