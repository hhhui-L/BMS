<template>
  <div class="login-block" align="center" >
    <el-form ref="form" :rules="loginRules" :model="loginForm" class="login-box">

      <h3 class="login-title">欢迎登录</h3>

      <el-form-item prop="username">
        <el-row>
          <el-col :span='2'>
            <span class="el-icon-s-custom"></span>
          </el-col>
          <el-col :span='22'>
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="password">
        <el-row>
          <el-col :span='2'>
            <span class="el-icon-lock"></span>
          </el-col>
          <el-col :span='22'>
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin('form')" style="width: 100%">登录</el-button>
      </el-form-item>

    </el-form>
    <router-view />
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
          this.$router.push({ name: 'Main', params: { name: this.loginForm.username } })
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
  .login-block{
    /*background-color: #B3C0D1*/
  }
  .login-title{
    text-align: center;
  }
  .login-box{
    width: 400px;
    margin: 200px auto;
    border: 1px solid #DCDFE6;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 30px #DCDFE6;
    display: inline-block;
  }
</style>
