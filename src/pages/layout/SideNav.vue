<template>
  <div class="side-nav">
    <dl
      v-for="(item, index) in sideNavList"
      :key="index"
      class="navitem"
      :class="[index === currentMenu ? 'active' : '']">
      <dt class="positionR" @click="toggleNavView(index)">
        <i class="icon iconfont" :class="item.funcIcon"></i>
        {{item.name}}
      </dt>
      <router-link
        v-for="(child, idx) in item.childFunction"
        v-if="child.funcUrl"
        :key="idx"
        :to="{ name: child.funcUrl}"
        tag="dd" exact>
        {{child.name}}
      </router-link>
    </dl>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    sideNavList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentMenu: ''
    }
  },
  methods: {
    /**
     * 点击一级菜单
     * @param index
     */
    toggleNavView (index) {
      this.currentMenu = index;
    }
  },
  created () {

  },
  mounted () {

  },
  updated () {

  }
}
</script>

<style lang="scss">
.side-nav {
  .navitem {
    cursor: pointer;
    > dt {
      height: 46px;
      line-height: 22px;
      color: #fff;
      font-size: 14px;
      text-align: left;
      padding: 12px 0 12px 48px;
      .icon {
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        margin: auto;
        line-height: 46px;
        font-size: 16px;
      }
    }
    > dd {
      display: none;
      line-height: 20px;
      color: #fff;
      font-size: 12px;
      text-align: left;
      padding: 6px 6px 6px 48px;
      background-color: rgba(17, 34, 67, 1);
    }
  }
  .navitem:first-child {
    > dt {
      .icon {
        font-size: 20px;
      }
    }
  }
  .navitem.active {
    > dt {
      background: -webkit-linear-gradient(left,#57CCFF,#2B74FF);
      background: -o-linear-gradient(left,#57CCFF,#2B74FF);
      background: -moz-linear-gradient(left,#57CCFF,#2B74FF);
      background: -ms-linear-gradient(left,#57CCFF,#2B74FF);
      background: linear-gradient(left,#57CCFF,#2B74FF);
      box-shadow: 0 2px 4px 0 rgba(51, 111, 255, 0.2);
    }
    > dd {
      display: block;
    }
    > dd.active {
      background-color: rgba(51, 111, 255, .5);
    }
  }
}
</style>
