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
        margin-left: 12rem;
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
.ivu-menu-item a {
    transition: all 0.3s;
    color: white;
}

.ivu-menu-item a:hover {
    color: #87ceed;
}

.router-link-active {
    color: #87ceed!important;
}
</style>


<template>
<Header>
  <Menu mode="horizontal" :theme="theme" :active-name="activemenu">
    <div class="layout-logo" @click.native="">
    </div>
    <div class="layout-nav">
      <MenuItem name="1">
      <router-link :to="{ name: 'home', params: {} }" exact>首页</router-link>
      </MenuItem>
      <MenuItem name="2">
      <router-link :to="{ name: 'search', params: {} }" exact>矿池收益</router-link>
      </MenuItem>
      <MenuItem name="3">
      <router-link :to="{ name: 'text', params: {} }" exact>帮助</router-link>
      </MenuItem>
      <!-- <MenuItem name="4">
      <router-link :to="{ name: 'search', params: {} }" exact>关于我们</router-link>
      <Icon type="ios-paper"></Icon>
      </MenuItem> -->
    </div>
  </Menu>
</Header>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      theme: 'dark',
      activemenu: 1 // 高亮
    }
  },
  methods: {},
  mounted() { // 组件初始化后执行
  }
}
</script>
