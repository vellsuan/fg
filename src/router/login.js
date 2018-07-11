/**
 * Created by zhenmin on 2018/6/14 9:28.
 */
"use strict";
const login = () => import('./../pages/login/Index').then(m => m.default);

const loginRouter = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

export default loginRouter;
