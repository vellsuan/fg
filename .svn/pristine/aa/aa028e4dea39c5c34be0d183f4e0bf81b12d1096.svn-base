<template>
  <div class="page member-list-page">
    <div class="page-nav-tit">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/memberList'}">会员列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <SearchHeader ref="searchHeader" @getParams="searchList"/>
    <div class="listData">
      <el-row class="btn-group">
        <el-button type="primary" class="wd76">启用</el-button>
        <el-button class="wd76">禁用</el-button>
        <el-button class="wd94">管理储蓄卡</el-button>
        <el-button class="wd94">管理银行卡</el-button>
        <el-button class="wd114">信用额度管理</el-button>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @row-click="clickRow"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div v-show="pageTotal">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageCount"
          :layout="pageLayout"
          :total="pageTotal">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from './SearchHeader'

export default {
  name: 'myCandidate',
  components: {
    SearchHeader
  },
  data () {
    return {
      tableData: [],
      currentPage: 1,
      pageCount: 10,
      pageSizes: [5, 10, 15, 20],
      pageLayout: 'total, sizes, prev, pager, next, jumper',
      pageTotal: 0,
      multipleSelection: []
    }
  },
  methods: {
    /**
     * 改变选中状态时触发
     */
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    /**
     * 点击行触发
     * @param item
     */
    clickRow (item) {
      console.log(item);
      this.$router.push("personalDetails")
    },
    /**
     * 改变每页显示多少条
     * @param val
     */
    handleSizeChange (val) {
      this.pageCount = val
    },
    /**
     * 改变当前页码
     * @param val
     */
    handleCurrentChange (val) {
      this.currentPage = val
    },
    /**
     * 按照条件搜索列表
     */
    searchList (params) {
      console.log(params)
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
  .member-list-page {
    .listData {
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      .btn-group {
        text-align: left;
        padding: 10px 20px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        z-index: 10;
        .el-button {
          height: 28px;
          line-height: 28px;
          color: #336FFF;
          border: 1px solid #336FFF;
          padding: 0;
        }
        .el-button:first-child {
          background-color: #336FFF;
          color: #fff;
        }
      }
      .is-leaf {
        text-align: center;
      }
    }
  }
</style>
