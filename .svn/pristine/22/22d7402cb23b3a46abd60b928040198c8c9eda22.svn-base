<template>
  <div class="page personal-details-page">
    <div class="page-nav-tit">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/memberList'}">会员列表</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalDetails'}">个人详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="table-list">
      <div class="table-item">
        <table>
          <thead>
          <tr>
            <th colspan="6">会员信息</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>昵称：</td>
            <td></td>
            <td>会员编号：</td>
            <td></td>
            <td rowspan="5" style="vertical-align: top">会员照片：</td>
            <td rowspan="5"></td>
          </tr>
          <tr>
            <td>手机：</td>
            <td></td>
            <td>会员等级：</td>
            <td></td>
          </tr>
          <tr>
            <td>当月消费次数：</td>
            <td></td>
            <td>最后消费时间：</td>
            <td></td>
          </tr>
          <tr>
            <td>邮箱：</td>
            <td></td>
            <td>紧急联系人：</td>
            <td></td>
          </tr>
          <tr>
            <td>紧急联系人电话：</td>
            <td></td>
            <td>家庭地址：</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="table-item">
        <table>
          <thead>
          <tr>
            <th colspan="6">客户信息</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>姓名：</td>
            <td></td>
            <td>出生日期：</td>
            <td></td>
            <td>年份：</td>
            <td></td>
          </tr>
          <tr>
            <td>证件类型：</td>
            <td></td>
            <td>证件号码：</td>
            <td></td>
            <td>学历：</td>
            <td></td>
          </tr>
          <tr>
            <td>毕业院校：</td>
            <td></td>
            <td>入学时间：</td>
            <td></td>
            <td>房产状况：</td>
            <td></td>
          </tr>
          <tr>
            <td>公司名称：</td>
            <td></td>
            <td>公司性质：</td>
            <td></td>
            <td>所属行业：</td>
            <td></td>
          </tr>
          <tr>
            <td>人员规模：</td>
            <td></td>
            <td>入职时间：</td>
            <td></td>
            <td>职业：</td>
            <td></td>
          </tr>
          <tr>
            <td>公司地址：</td>
            <td></td>
            <td>公司电话：</td>
            <td></td>
            <td>月收入：</td>
            <td></td>
          </tr>
          <tr>
            <td>有无社保：</td>
            <td></td>
            <td>户口所在地：</td>
            <td></td>
            <td>有无子女：</td>
            <td></td>
          </tr>
          <tr>
            <td>婚姻状况：</td>
            <td></td>
            <td>配偶姓名：</td>
            <td></td>
            <td>配偶电话：</td>
            <td></td>
          </tr>
          <tr>
            <td>身高：</td>
            <td></td>
            <td>体重：</td>
            <td></td>
            <td>肩宽：</td>
            <td></td>
          </tr>
          <tr>
            <td>胸围：</td>
            <td></td>
            <td>腰围：</td>
            <td></td>
            <td>臀围：</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="table-item">
        <table>
          <thead>
          <tr>
            <th colspan="6">资金数据</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>储值卡余额：</td>
            <td></td>
            <td>电子钱包：</td>
            <td></td>
            <td>积分：</td>
            <td></td>
          </tr>
          <tr>
            <td>信用额度：</td>
            <td></td>
            <td>可用信用额度：</td>
            <td></td>
            <td>绑定银行卡数量：</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="tabs-wrap positionR">
      <el-tabs v-model="tabsActive">
        <el-tab-pane label="订单" name="1">123</el-tab-pane>
        <el-tab-pane label="储值卡" name="2">456</el-tab-pane>
        <el-tab-pane label="银行卡" name="3">789</el-tab-pane>
        <el-tab-pane label="信用额度" name="4">000</el-tab-pane>
        <el-tab-pane label="积分" name="5">999</el-tab-pane>
      </el-tabs>
      <div class="search-form positionA">
        <label>注册时间</label>
        <el-date-picker
          v-model="registTime"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" class="search">查询</el-button>
        <el-button class="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import moduleName from 'module'

export default {
  name: 'personalDetails',
  components: {},
  data () {
    return {
      tabsActive: "1",
      registTime: ""
    }
  },
  methods: {},
  created () {

  },
  mounted () {

  },
  updated () {

  }
}
</script>

<style lang="scss">
.table-list {
  background-color: #fff;
  .table-item {
    >table {
      width: 100%;
      text-align: left;
      font-size: 12px;
      th {
        position: relative;
        z-index: 1;
        font-weight: normal;
        font-size: 16px;
        line-height: 48px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        padding: 0 20px;
      }
      td {
        line-height: 18px;
        padding: 10px 20px;
        border: 1px solid rgba(222, 224, 231, 1);
      }
      td:nth-child(2n-1) {
        width: 140px;
        background-color: rgba(245, 245, 245, 1);
      }
    }
  }
}
.tabs-wrap {
  background-color: #fff;
  .el-tabs__item {
    width: 88px;
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
  }
  .el-tabs__item.is-active {
    color: #336FFF;
  }
  .search-form {
    top: 0;
    right: 20px;
    .el-range-editor {
      width: 246px;
      height: 28px;
      margin: 6px 20px 6px 10px;
      .el-input__icon,
      .el-range-separator {
        line-height: 20px;
      }
      .el-range-input {
        width: 84px;
        height: 18px;
      }
    }
    .el-button {
      width: 66px;
      height: 28px;
      padding: 0;
      span {
        display: inline-block;
        height: 100%;
        line-height: 28px;
      }
    }
    .reset {
      color: #336FFF;
      border: 1px solid #336FFF;
    }
  }
}
</style>
