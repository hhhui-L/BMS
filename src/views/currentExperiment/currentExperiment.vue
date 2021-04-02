<template>
    <div>
      <!--<button @click="requestWs">连接</button>-->
      <div style="position:absolute;height: 100%;width: 100%">
        <div style="height:100%;width: 50%;float:left">
          <input type="text" v-model="inputText"/>
          <button @click="send">发送</button>
          <p>{{message}}</p>
        </div>
        <div style="height:50%;width: 50%;float:left">222</div>
        <div style="height:50%;width: 50%;float:left">333</div>
      </div>
    </div>
</template>

<script>
import { sendWebsocket, closeWebsocket, websocketSend } from '../../network/websocket'
export default {
  name: 'currentExperiment',
  data () {
    return {
      message: '0000',
      inputText: '' // 获取输入框内容
    }
  },
  mounted () {
    this.requestWs()
    this.wsMessage()
    // websocketonmessage()
  },
  methods: {
    send () {
      const obj = {
        operation: this.inputText
      }
      console.log(obj)
      websocketSend(obj)
    },
    // ws连接成功，后台返回的ws数据，组件要拿数据渲染页面等操作
    wsMessage (data) {
      const dataJson = JSON.parse(data)
      this.message = dataJson.result
      console.log(dataJson)
      // 这里写拿到数据后的业务代码
    },
    // ws连接失败，组件要执行的代码
    wsError () {
      // 比如取消页面的loading
    },
    requestWs () {
      // 防止用户多次连续点击发起请求，所以要先关闭上次的ws请求。
      closeWebsocket()
      // 跟后端协商，需要什么参数数据给后台
      /* const obj = {
        monitorUrl: 'xxxxxxxxxxxxx',
        userName: 'xxxxxxxxxx'
      } */
      // 发起ws请求
      // sendWebsocket('ws://127.0.0.1:5000/userlink/nn', null, this.wsMessage, this.wsError)
      sendWebsocket('ws://192.168.0.108:5000/userlink/nn', null, this.wsMessage, this.wsError)
    }
  }
}
</script>

<style scoped>

</style>
