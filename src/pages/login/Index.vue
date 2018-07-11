<template>
  <div class="page login-page">
    <!-- <h1>登录页面</h1> -->
    <div class="login-bgcolor">
      <section class="login-contianer">
        <div class="login-left">
          <div class="manage_tip">
            <img class="logo" src="./img/fh.png">
            <p>复华会员中心管理后台</p>
          </div>
          <el-form>
            <el-form-item prop="username" class="username">
              <el-input placeholder="1234张"><i slot="prefix" class="el-input__icon user-icon"><img src="./img/user4.png"></i></el-input>
            </el-form-item>
            <el-form-item prop="password" class="password">
              <el-input type="password" placeholder="请输入密码"><i slot="prefix" class="el-input__icon psd-icon"><img src="./img/icon_login4.png"></i></el-input>
            </el-form-item>
            <div class="tip">
              <div class="arrow">
                <img src="./img/arrow.png">该用户名不存在
              </div>
            </div>
            <el-form-item class="submit">
              <el-button type="primary" class="submit_btn">登录</el-button>
            </el-form-item>
            <div class="remember-psd">
              <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
            </div>
          </el-form>
        </div>
        <div class="login-right"><img src="./img/bg.png" alt=""></div>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {}
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
.login-page{
  .login-bgcolor {
    background-color: rgba(246, 248, 255, 1);
    width: 100%;
    height: 100%;
    .login-contianer {
      width: 838px;
      height: 468px;
      position: absolute;
      top:50%;
      left: 50%;
      margin-left: -419px;
      margin-top: -234px;
      box-shadow: 0 6px 20px rgba($color: #5582ff, $alpha:0.14);
      .login-left {
        float: left;
        width: 370px;
        padding: 80px 60px;
        .manage_tip
          .logo {
            display: block;
            width: 52px;
            height: 26px;
            margin-bottom: 20px;
          }
          p{
            text-align: left;
            line-height: 19px;
            color: rgba(51, 111, 255, 1);
            font-size: 14px;
            margin-bottom: 20px;
          }
        .username {
          margin-bottom: 20px;
          .user-icon{
            display: inline-block;
            width: 44px;
            height: 40px;
            border-right: 1px solid #DCDFE0;
            img {
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-top: 10px;
            }
          }
          .el-form-item__content .el-input input{
            padding-left: 58px;
          }
        }
        .password {
          .psd-icon{
            display: inline-block;
            width: 44px;
            height: 40px;
            border-right: 1px solid #DCDFE0;
            img {
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-top: 10px;
            }
          }
          .el-form-item__content .el-input input{
            padding-left: 58px;
          }
        }
        .tip {
          height: 34px;
          line-height: 12px;
          color: rgba(51, 111, 255, 1);
          font-size: 12px;
          text-align: center;
          position: relative;
          img {
            display: inline-block;
            width: 16px;
            height: 16px;
            position: absolute;
            top: -2px;
            left: 63px;
          }
        }
        .remember-psd {
          text-align: left;
        }
        .submit{
          margin: 0;
          .submit_btn{
            width: 100%;
            height: 40px;
            background: -webkit-linear-gradient(left, #57CCFF , #2B74FF ); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(left, #57CCFF , #2B74FF); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(left, #57CCFF , #2B74FF); /* Firefox 3.6 - 15 */
            background: linear-gradient(to left, #57CCFF , #2B74FF); /* 标准的语法 */
            border: none;
            margin-bottom: 12px;
          }
        }
      }
      .login-right {
        float: right;
        width: 468px;
        height: 100%;
        img {
          width: 468px;
          height: 468px;
        }
      }
    }
  }
}
</style>
