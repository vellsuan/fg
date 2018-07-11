<template>
  <div class="member-list-header">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="height:28px;">
      <el-form-item label="姓名">
        <el-input class="name" v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input class="phone" v-model="formInline.phone" placeholder="手机"></el-input>
      </el-form-item>
      <el-form-item label="证件编号">
        <el-input class="IdCode" v-model="formInline.IdCode" placeholder="证件编号"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input class="user" v-model="formInline.user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select class="status" v-model="formInline.status" placeholder="全部">
          <el-option label="全部" value=""></el-option>
          <el-option label="启用" value="1"></el-option>
          <el-option label="禁用" value="0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="block">
      <label>注册时间</label>
      <el-date-picker
        v-model="registTime"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" class="search" @click="sendParams">查询</el-button>
      <el-button class="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
// import moduleName from 'module'

export default {
  name: 'searchHeader',
  components: {},
  data () {
    return {
      formInline: {
        name: '',
        phone: '',
        IdCode: '',
        user: '',
        status: ''
      },
      registTime: ''
    }
  },
  methods: {
    /**
     * 传送数据
     */
    sendParams () {
      this.$emit("getParams", this.formInline)
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
  .member-list-header {
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 12px 20px;
    text-align: left;
    margin-bottom: 45px;
    .el-form-item {
      margin: 0;
      label {
        line-height: 28px;
        color: rgba(152, 152, 152, 1);
        font-size: 12px;
        text-align: right;
        vertical-align: top;
        margin-right: 10px;
        padding: 0;
      }
      .el-form-item__content {
        line-height: 28px;
        .el-input,
        el-select {
          height: 28px;
          margin-right: 10px;
          .el-input__icon {
            line-height: 28px;
          }
        }
        input {
          height: 100%;
          vertical-align: top;
          font-size: 12px;
        }
        .name, .user{
          width: 128px;
        }
        .phone, .IdCode {
          width: 148px;
        }
        .status {
          width: 128px;
          height: 28px;
        }
      }
    }
    .block {
      margin-top: 10px;
      position: relative;
      label {
        height: 28px;
        line-height: 28px;
        color: rgba(152, 152, 152, 1);
        font-size: 12px;
        text-align: right;
        vertical-align: top;
        margin-right: 10px;
      }
      .el-date-editor {
        width: 296px;
        height: 28px;
        line-height: 28px;
        vertical-align: top;
        font-size: 12px;
        .el-range__icon,
        .el-input__icon {
          line-height: 20px;
        }
        .el-range-separator {
          line-height: 20px;
        }
        input {
          width: 110px;
        }
      }
      .el-button {
        width: 66px;
        height: 28px;
        padding: 0;
        position: absolute;
        span {
          display: inline-block;
          height: 100%;
          line-height: 28px;
        }
      }
      .search {
        right: 100px;
        top: 0;
      }
      .reset {
        right: 20px;
        top: 0;
        color: #336FFF;
        border: 1px solid #336FFF;
      }
    }
  }
</style>
