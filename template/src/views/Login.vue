<template>
  <div class="login-wrap">
    <div class="login-box">
      <img src="../assets/images/logo.png" alt="">
      <h1 class="heading">{{name}}</h1>
      <el-form :model="account" :rules="rules" ref="validateForm">
        <el-form-item prop="username">
          <el-input v-model="account.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="account.password" type="password" placeholder="密码" @keydown.enter.native="login"></el-input>
        </el-form-item>
        <el-button type="primary" :loading="isLoading" @click="login" size="large">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import { $page } from '@helper'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import types from '@store/types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  export default{
    data () {
      return {
        isLoading: false,
        account: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'change,blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'change,blur'
            }
          ]
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }
    },

    mounted () {
    },

    components: {
    },

    computed: {
    },

    methods: {
      ...mapMutations({
        updateUserInfo: types.user.mutation.update{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }),
      login () {
        this.$refs['validateForm'].validate((valid) => {
          if (valid) {
            let postData = this.account{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            this.isLoading = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            return $page.user.login(postData).then((result) => {
              this.updateUserInfo(result){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
              this.$router.push('/'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }).catch((err) => {
              this.$message.error(err.msg){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            }).fin(() => {
              this.isLoading = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
            })
          } else {
            return false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
          }
        })
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/mixins.scss";

.login-wrap {
  width: 520px;
  margin: 0 auto;
  padding-top: 150px;
  min-height: 400px;
  position: relative;
}
.login-box {
  width: 520px;
  padding: 30px;
  height: 100%;
  background-color: #fff;
  clear: both;
  display: table;
  border-radius: 3px;
  border: 1px solid #d7dce5;
  .heading{
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
    color: #707473;
  }
  img{
    display: block;
    width: 80px;
    margin: 0 auto 20px;
  }
  .el-form-item{
    margin-bottom: 30px;
  }
  .el-button--primary{
    display: block;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width:320px) {
  .login-wrap {
    width: 100%;
    padding-top: 60px;
  }
  .login-box {
    width: 100%;
    border: 0 none;
  }
}
</style>
