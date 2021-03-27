<template>
  <div class="login-body" align="center">
    <el-form ref="form" :rules="loginRules" :model="loginForm" class="login-box">

      <h3 class="login-title">欢迎登录</h3>

      <el-form-item prop="username">
        <el-row>
          <el-col :span='2'>
            <span class="el-icon-s-custom" style="color: white"></span>
          </el-col>
          <el-col :span='22'>
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="password">
        <el-row>
          <el-col :span='2'>
            <span class="el-icon-lock" style="color: white"></span>
          </el-col>
          <el-col :span='22'>
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="loginBtn" @click="handleLogin('form')" style="width: 100%">登录</el-button>
      </el-form-item>
      <div>
        <router-link :to="{ path: '/forgetpwd'}" class="unlogin">
          忘记密码? |
        </router-link>

        <router-link :to="{path: '/register'}">
          <a href="register.vue" target="_blank" align="right" class="unlogin">注册新账号</a>
        </router-link>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push({ name: 'Main', params: { name: this.loginForm.username } })
          // const data = { username: String(this.loginForm.username), password: String(this.loginForm.password) }
          this.axios({
            url: 'http://localhost:8089', // 请求的地址
            method: 'post' // 请求的方式
            // data: data // 请求的表单数据
          })
            .then(res => {
              alert(res.data)
              console.info('后台返回的数据', res.data)
            }).catch(err => {
              console.info('报错的信息', err.response.message)
            })
          sessionStorage.setItem('isLogin', 'true')
          this.$router.push('/main')
          this.$store.dispatch('asyncUpdateUser', { name: this.loginForm.username })
        } else {
          this.$message.error('用户名或密码错误')
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
  body{
    overflow-y: hidden;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
  }
  .login-body {
    position:relative;
    width: 100vw;
    padding: 0;
    margin: 0;
    height: 100vh;
    background: url("../../assets/background.jpg") no-repeat left top;
    background-size: 100% 100%;
  }
  .login-title{
    text-align: center;
    color: white;
    font-size:24px;
  }
  .login-box{
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border: 1px solid #DCDFE6;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 30px #DCDFE6;
    display: inline-block;
    background: transparent;
  }
  .loginBtn{
    background-color: transparent;
    color:white;
    font-size: 20px;
    width: 200px;
  }
  .unlogin{
    font-size: 20px;
    color: white;
  }
  a {
    /*去掉原有链接文字下划线*/
    text-decoration: none;
    color: #333333;
  }
  .active {
    /*点击时去掉下划线*/
    text-decoration: none;
    color: dodgerblue;
  }
</style>
