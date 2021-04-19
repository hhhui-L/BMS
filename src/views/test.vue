<template>
<!--<div style="height: 900px">
  <div style="position: relative;height:100%;width: 50%;float:left">111</div>
  <div style="position: relative;height:100%;width: 50%;float:right">222</div>
</div>-->
  <div style="position:absolute;height: 100%;width: 100%">
    <div style="height:100%;width: 40%;float:left">
    </div>
    <div style="height:50%;width: 50%;float:left">
      <div style="padding: 8px">
        <el-card style="border-radius: 10px">
          <div slot="header">
            <span class="card-title">实验状态</span>
          </div>
          <el-row style="margin-bottom: 15px">
            <el-col>
              <span style="font-size:25px;font-family: 微软雅黑;font-weight: bold;">{{ nowDate }}</span>
            </el-col>
          </el-row>
          <div>
            <el-row style="padding-left: 30px">
              <el-col :span="6">
                <div>
                  <el-button circle disabled :style="{ height: '30px', width: '30px', background: lightPower }" />
                </div>
                <p>电源指示</p>
              </el-col>
              <el-col :span="6">
                <div>
                  <el-button circle disabled :style="{ height: '30px', width: '30px', background: lightCharge }" />
                </div>
                <p>充电状态</p>
              </el-col>
              <el-col :span="6">
                <div>
                  <el-button circle disabled :style="{ height: '30px', width: '30px', background: lightDischarge }" />
                </div>
                <p>放电状态</p>
              </el-col>
              <el-col :span="6">
                <div>
                  <el-button circle disabled :style="{ height: '30px', width: '30px', background: lightError }" />
                </div>
                <p>故障指示</p>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>
      <div style="padding: 8px">
        <el-card style="border-radius: 10px">
          <div slot="header">
            <span class="card-title">实验参数</span>
          </div>
          <el-row class="elRowBase" :gutter="10">
            <el-col :span="3" style="padding-left: 30px"><span>工艺号: </span></el-col>
            <el-col :span="4" class="content">{{ devId }}</el-col>
            <el-col :span="3"><span>当前阶段: </span></el-col>
            <el-col :span="4" class="content">{{ currentStage }}</el-col>
            <el-col :span="3"><span>循环次数: </span></el-col>
            <el-col :span="4" class="content">{{ cycles }}</el-col>
          </el-row>
          <el-row class="elRowBase" style="margin-top: 30px" :gutter="10">
            <el-col :span="3">
              <div>
                <el-button
                  type="primary"
                  :disabled="false"
                  style="height: 120px; width: 120px;font-size: 30px"
                  circle
                >{{soc+'Ah'}}</el-button>
              </div>
              <p style="padding-left: 25px">剩余电量</p>
            </el-col>
            <el-col :span="5" style="margin-left: 30px">
              <el-row>
                <el-col :span="7">
                <div>
                  <el-card  class="para-card" >
                    <div slot="header" class="header">
                      <span class="card-title">当前电压</span>
                    </div>
                    <div class="text">{{voltage+'V'}}</div>
                  </el-card>
                </div>
              </el-col>
              </el-row>
            </el-col>
            <el-col :span="5">
              <el-row>
                <el-col :span="7">
                  <div>
                    <el-card class="para-card">
                      <div slot="header" class="header">
                        <span class="card-title">当前电流</span>
                      </div>
                      <div class="text">{{current+'A'}}</div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="5">
              <el-row>
                <el-col :span="9">
                  <div>
                    <el-card class="para-card">
                      <div slot="header" class="header">
                        <span class="card-title">电池温度</span>
                      </div>
                      <div class="text">{{batTemperature+'℃'}}</div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="5">
              <el-row>
                <el-col :span="9">
                  <div>
                    <el-card class="para-card">
                      <div slot="header" class="header">
                        <span class="card-title">环境温度</span>
                      </div>
                      <div class="text">{{envTemperature+'℃'}}</div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>

    <!--<div style="height:50%;width: 50%;float:left">
      <div style="padding: 8px">
        <el-card style="border-radius: 10px">
          <div slot="header">
            <span class="card-title">实验参数</span>
          </div>
        </el-card>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      nowDate: '', // 当前日期
      experiment_name: '蓄电池充放电测试',
      battery_model: '双登阀控密封式铅酸蓄电池GFM-200',
      canNotEdit: true,
      limit_voltage: '2V',
      limit_capacity: '200Ah',
      max_discharge_current: '1240A(5S)',
      charge_current: '30A',
      discharge_temperature: '-40℃~50℃',
      charge_temperature: '-20℃~45℃',
      store_temperature: '-20℃~40℃',
      temperature: '15℃~25℃',
      soc: '20',
      devId: '1',
      currentStage: '2',
      cycles: '1',
      voltage: '1.6',
      current: '19.5',
      batTemperature: '17',
      envTemperature: '17',
      // 指示状态
      lightPower: '#67C23A',
      lightCharge: '#DCDFE6',
      lightDischarge: '#DCDFE6',
      lightError: '#F56C6C'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .elRowBase {
    margin-bottom: 10px;
  }
  .btnControl{
    margin-top: 40px;
  }
  .card-title{
     font-size:25px;
     font-family: 微软雅黑;
     font-weight: bold;
   }
  .para-title{
    font-size:20px;
    font-family: 微软雅黑;
    font-weight: bold;
  }
  .para-card{
    border-radius: 10px;
    height: 140px;
    width: 170px;
  }
  .content{
    font-family:微软雅黑;
    font-size: 18px;
    color: #303133;
    border: 1px solid lightskyblue;
    border-radius: 5px;
    padding: 8px;
    height: auto;
  }
  .text{
    font-size: 30px;
    font-family: 微软雅黑;
    font-weight: bold;
    text-align: center;
  }
  .header{
    text-align: center;
  }
</style>
