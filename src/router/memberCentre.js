/**
 * Created by zhenmin on 2018/6/14 15:20.
 */
"use strict";
const memberList = () => import('./../pages/member_centre/member_list/Index').then(m => m.default);
const personalDetails = () => import('./../pages/member_centre/member_list/personal_details/Index').then(m => m.default);

const candidateRouter = [
  {
    // 会员列表
    path: 'memberList',
    name: 'memberList',
    component: memberList
  },
  {
    // 会员列表 > 个人详情
    path: 'personalDetails',
    name: 'personalDetails',
    component: personalDetails
  }
]

export default candidateRouter;
