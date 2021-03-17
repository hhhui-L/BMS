<template>
  <div>
    <!-- 描述：选择条件，清空和搜索按钮-->
    <div class="filter-container">
      <div class="letf-items" style="float: left;margin-bottom: 10px">
        <el-input placeholder="实验名称"
                  style="width: 200px;margin-right: 10px"
                  class="filter-item"
                  v-model="queryExpData.experiment_name"/>
        <el-input placeholder="电池型号"
                  style="width: 200px;margin-right: 10px"
                  class="filter-item"
                  v-model="queryExpData.battery_type"/>
        <el-select v-model="queryExpData.experiment_type" placeholder="实验类型"
                   style="width: 120px;margin-right: 10px" class="filter-item">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="right-items" style="float: right;margin-bottom: 10px">
        <el-button class="filter-item"
                   style="margin-left: 10px;"
                   type="primary"
                   icon="el-icon-search" @click="handleSearch">搜索</el-button>
        <el-button class="filter-item"
                   style="margin-left: 10px;"
                   type="primary"
                   icon="el-icon-delete"
                   @click="handleClear">清空</el-button>
      </div>
    </div>
      <!-- 实验列表区域 -->
      <el-table
        :key="tableKey"
        :data="tableData"
        border
        stripe
        highlight-current-row
        style="width: 100%;margin-top:10px"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          type="index"
          label="序号"
          width="55"
          :index="dataIndex">
        </el-table-column>
        <el-table-column label="实验名称" width="210" prop="project">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.project }}</span>
          </template>
        </el-table-column>

        <el-table-column label="实验时间" width="210">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.manager }}</span>
          </template>
        </el-table-column>

        <el-table-column label="实验类型" width="110">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.member }}</span>
          </template>
        </el-table-column>

        <el-table-column label="上限电压(V)" width="150">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.desc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="下限电压(V)" width="150">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.desc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="截止电流(A)" width="150">
          <template slot-scope="scope">
            <span class="link-type">{{ scope.row.desc }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleCheck(scope.$index, scope.row)">查看</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block" style="float: right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="current_page"
          :page-sizes="pageSizeList"
          :page-size="page_size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataQuery',
  data () {
    return {
      // 列表数据默认为空
      tableData: [],
      // 每页数据条数
      page_size: 10,
      // 当前页码
      current_page: 1,
      pageSizeList: [10, 20, 30, 50],
      totalCount: 400,
      queryExpData: {
        experiment_name: null,
        experiment_type: null,
        battery_type: null,
        time_start: null,
        time_end: null,
        offset: 0,
        limit: 1000
      },
      options: [{
        value: 'charge',
        label: '充电'
      }, {
        value: 'discharge',
        label: '放电'
      }, {
        value: 'standing',
        label: '静置'
      }],
      value: ''
    }
  },
  methods: {
    handleSearch () {
    },
    handleClear () {
      this.queryExpData.experiment_name = null
      this.queryExpData.battery_type = null
      this.queryExpData.experiment_type = null
    },
    handleCheck () {
      this.$router.push('/dataquery/dataRecord')
    }
  }
}
</script>

<style scoped>

</style>
