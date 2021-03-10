<template>
    <div>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['2']">
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
        </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{$store.getters.getUser.name}}</span>
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
  methods: {
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
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
