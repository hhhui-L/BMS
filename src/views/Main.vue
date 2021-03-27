<template>
    <div>
      <el-container>
        <el-aside width="200px" >
        <el-menu :default-openeds="['3']" :collapse="isCollapse" :collapse-transition="false">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>项目管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>设备监控</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <i class="el-icon-guide"></i>
                <router-link to="/device/bms">电池监控</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-s-data"></i>
                <router-link to="/device/data" >数据统计</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-s-marketing"></i>
            <router-link to="/dataquery">实验数据</router-link>
          </el-menu-item>
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
            <div style="float: right">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px;font-size: 25px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{$store.getters.getUser.name}}</span>
            </div>
          </el-header>
          <el-main>
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
      isCollapse: false
    }
  },
  methods: {
    logout () {
      sessionStorage.setItem('isLogin', 'false')
      this.$router.push('/login')
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #EBEEF5;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
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
