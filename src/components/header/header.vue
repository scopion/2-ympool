<style lang="less" scoped>
.ivu-layout-header {
    background: #000;
    height: 10vh;
    line-height: 10vh;
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
@media (min-width:320px) {
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
    }
}
/* MOBILE */
/* PC */
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
      <div class="layout-nav" v-show="name != 'search'">
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
    </Menu>
  </Content>
</Header>
</template>

<script>
export default {
  data() {
    return {
      theme: 'dark',
      activemenu: 1 // 高亮
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
  mounted() { // 组件初始化后执行
    console.log(this.name);
  }
}
</script>
