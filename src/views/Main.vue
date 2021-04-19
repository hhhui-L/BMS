<template>
    <div>
      <el-container>
        <el-aside width="200px">
        <el-menu :default-openeds="['3']" :collapse="isCollapse" :collapse-transition="false" >
          <el-menu-item index="1">
            <i class="el-icon-guide"></i>
            <router-link to="/currentexp">当前实验</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-data"></i>
            <router-link to="/bms">电池监测</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <router-link to="/setting">工艺设置</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-marketing"></i>
            <router-link to="/expdata">实验数据</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <router-link to="/manage">项目管理</router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-help"></i>
            <router-link to="/test">项目测试</router-link>
          </el-menu-item>
         <!-- <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>设备监控</template>
            <el-menu-item-group>
              <el-menu-item index="2-2">
                <i class="el-icon-s-data"></i>
                <router-link to="/device/data" >数据统计</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>-->
        </el-menu>
        </el-aside>
        <el-container>
          <el-header style="font-size: 25px">
           <!-- <div style="float: left;margin-right: auto;margin-left: auto">
              <i class="el-icon-s-unfold shrinkBtn" @click="toggleCollapse"></i>
              &lt;!&ndash;<span v-show="!isCollapse">
                &lt;!&ndash;<i class="el-icon-s-fold" style="font-size: 25px"></i>&ndash;&gt;
                <i v-show="!isCollapse" class="el-icon-s-fold expandBtn" @click="isCollapse=true"></i>
                <i v-show="isCollapse" class="el-icon-s-fold shrinkBtn" @click="isCollapse=false"></i>
              </span>&ndash;&gt;
            </div>-->
            <div>
              <el-breadcrumb separator-class="el-icon-arrow-right" style="float:left;margin-top: 18px;margin-bottom: 18px;font-size: 24px">
                <!--<el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>-->
                <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item.name}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div style="float: right">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px;font-size: 25px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item style="font-size: 22px" @click.native="changePwd">修改密码</el-dropdown-item>
                <el-dropdown-item style="font-size: 22px" @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span style="font-size: 25px">{{$store.getters.getUser.name}}</span>
            </div>
          </el-header>
          <el-main style="padding: 0">
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: false,
      breadList: null
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    logout () {
      sessionStorage.setItem('isLogin', 'false')
      this.$router.push('/login')
    },
    changePwd () {
      this.$router.push('/changePwd')
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    getBreadcrumb () {
      const matched = this.$route.matched.filter(item => item.name)
      // const first = matched[0]
      this.breadList = matched
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #EBEEF5;
    line-height: 60px;
  }
  /*.el-menu{
    background-color: #EBEEF5;
  }*/
  .el-aside {
    /*height: 858px;*/
    background-color: #EBEEF5;
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
