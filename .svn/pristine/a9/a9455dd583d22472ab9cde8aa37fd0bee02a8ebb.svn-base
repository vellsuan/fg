import Vue from 'vue'
import Router from 'vue-router'
import loginPage from "./login"
import layout from "./../pages/layout/Index"
import memberCentreRouter from "./memberCentre"

Vue.use(Router)

const router = new Router({
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        ...memberCentreRouter
      ]
    },
    ...loginPage
  ]
});
// 路由监控如果路由没有配置则跳转上一页面
router.beforeEach((to, from, next) => {
  // 不需要进行授权验证的直接通过
  if(to.matched.length && to["matched"][0]["meta"].authed) {
    next();
    return;
  }
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next('/');
  } else {
    next();// 如果匹配到正确跳转
  }
});
export default router;
