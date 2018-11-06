<style lang="less" scoped>
@img: '../../images';
.ivu-layout-header {
    .ivu-layout-content {
        max-width: 1350px;
    }
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
            padding: 0 10px;
            margin: 0 10px;
        }
    }
    .layout-logo {
        cursor: pointer;
        transition: all 0.3s;
        width: 150px;
        height: 100%;
        line-height: 1rem;
        vertical-align: middle;
        background: url("@{img}/logo@2x.png") no-repeat center;
        background-size: contain;
        float: left;
        position: relative;
        left: 0;
    }

    .layout-logo:hover {
        transform: scale(1.05);
    }
    .mobileMenu {
        text-align: right;
        flex-direction: row-reverse;
        display: flex;
        align-items: center;
        height: 100%;
        .ivu-btn-primary {
            background: url("@{img}/menu.png") no-repeat center;
            background-size: contain;
            border: transparent;
            padding: 0.8rem;
        }
    }
}

.layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}

.layout-nav {
    width: 400px;
    float: right;
    display: flex;
    align-items: center;
}

.layout-footer-center {
    text-align: center;
}
a.ivu-menu-item {
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    height: 2rem;
    justify-content: center;
    position: relative;
    color: white!important;
}
.pcActive {
    color: white;
    border-radius: 5px;
    background: #01113e;
    border: 1px solid #294ced;
}
.ivu-menu-item a:hover {}
.ivu-drawer-body {
    padding: 16px 16px 16px 0!important !important;
    .active {
        color: #2d8cf0;
        background: #e2f5ff;
    }
}

/* MOBILE */
@media (max-width:520px) {
    .ivu-layout-header {
        padding: 0;

        .layout-logo {
            width: 120px;
        }

        .layout-nav {
            width: 180px;
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

    .ivu-drawer {
        .ivu-drawer-body {
            .ivu-menu-item {
                font-size: 1rem;
                padding: 20px;
                a {
                    color: #515a6e;
                }
            }
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
    <Menu mode="horizontal" :theme="theme" :active-name="activemenu" @on-select="select()">
      <div class="layout-logo" @click="backHome()">
      </div>
      <div class="layout-nav" v-if="clintWidth>520">
        <MenuItem name="index" v-for="(item,index) in pages" :to="{ name: item.path, params: {} }" :key="item.name" :class="item.path==name?'pcActive':''">{{item.name}}
        </MenuItem>
        <!-- <MenuItem name="3" target="_blank" to="http://ympool.com/YMadmin/index.html#/login">矿池后台</MenuItem> -->
      </div>
      <div class="mobileMenu" v-else>
        <Button @click="value = true" type="primary"></Button>
      </div>
      <Drawer :closable="false" v-model="value">
        <Menu :active-name="activemenu" @on-select="select()">
          <MenuGroup>
            <MenuItem name="index" v-for="(item,index) in pages" :key="item.name" :class="item.path==name?'active':''" v-if="name.length">
            <router-link :to="{ name: item.path, params: {} }" exact>{{item.name}}</router-link>
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
      clintWidth: document.body.clientWidth,
      pages: [{
        path: 'home',
        name: '首页'
      }, {
        path: 'help',
        name: '挖矿帮助'
      }, {
        path: 'about',
        name: '关于我们'
      }]
    }
  },
  props: ["name"],
  methods: {
    backHome: function() {
      this.$router.push({
        name: 'home',
        params: {}
      })
    },
    select(val) {
      console.log(val);
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
