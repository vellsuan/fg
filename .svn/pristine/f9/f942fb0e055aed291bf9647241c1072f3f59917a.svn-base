<template>
  <div class="page layout-page">
    <div class="header positionR">
      <div class="logo positionA"></div>
      <div class="header-bar positionR">
        <h1 class="system-name positionA">欢迎登陆复华商家管理后台系统！</h1>
        <div class="user-info positionA">
          <ul class="clearfix">
            <li class="fleft"><i class="icon iconfont icon-touxiang"></i></li>
            <li class="fleft"><span class="user-name">admin</span></li>
            <li class="fleft"><i class="icon iconfont icon-triangle-bottom"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content positionR">
      <el-scrollbar class="side-nav-wrap positionA">
        <SideNav :sideNavList="sideNavList"></SideNav>
      </el-scrollbar>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from './SideNav';
import MenuData from './MenuData.json'

export default {
  name: 'layout',
  components: {
    SideNav
  },
  data () {
    return {
      sideNavList: []
    }
  },
  methods: {},
  created () {
    this.sideNavList = MenuData.result.mune || []
  },
  mounted () {

  },
  updated () {

  }
}
</script>

<style lang="scss">
.layout-page {
  .header {
    height: 60px;
    background-color: rgba(255, 255, 255, 1);
    padding-left: 168px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    .logo {
      left: 0;
      top: 0;
      z-index: 1;
      width: 168px;
      height: 100%;
      background: url("./img/logo.png") no-repeat center rgba(12, 26, 54, 1);
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }
    .header-bar {
      height: 100%;
      .system-name {
        left: 20px;
        top: 0;
        z-index: 1;
        height: 100%;
        line-height: 60px;
        color: rgba(152, 152, 152, 1);
        font-size: 12px;
      }
      .user-info {
        right: 20px;
        top: 0;
        z-index: 1;
        height: 100%;
        line-height: 60px;
        color: rgba(45, 45, 45, 1);
        font-size: 14px;
        cursor: pointer;
        .icon-touxiang {
          font-size: 28px;
          color: rgba(51, 111, 255, 1);
          margin-right: 15px;
        }
        .user-name {
          padding: 0 3px;
        }
        .icon-triangle-bottom {
          font-size: 10px;
          color: rgba(51, 111, 255, 1);
          padding: 0 5px;
        }
      }
    }
  }
  .content {
    height: calc(100vh - 60px);
    background-color: rgba(246, 248, 255, 1);
    .side-nav-wrap {
      left: 0;
      top: 0;
      z-index: 2;
      width: 168px;
      height: 100%;
      background-color: rgba(12, 26, 54, 1);
      box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.05);
      overflow: hidden;
      .el-scrollbar__wrap {
        overflow: auto;
      }
    }
    .page-content {
      height: 100%;
      padding: 0 16px 40px 184px;
      overflow: auto;
    }
  }
}
</style>
