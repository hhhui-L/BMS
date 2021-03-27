<template>
    <div>
      <!--<button @click="websochetInit">连接</button>-->
      <input type="text" v-model="inputText"/>
      <button @click="send">发送</button>

      <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  name: 'DataStatistics',
  data () {
    return {
      inputText: '', // 获取输入框内容
      message: ''
    }
  },
  mounted () {
    this.websochetInit()
  },
  methods: {
    send () {
      this.readyChat(this.inputText)
    },
    /* webSocket会话 */
    /* 会话过程中实际调用的函数 */
    readyChat (data) {
      const st = {
        operation: data
      }
      const This = this
      if (this.websock.readyState === 1) { // this.websock.readyState = 1 表示连接成功，可以立即发送信息
        this.websocketSend(st)
      } else if (this.websock.readyState === 0) { // 表示正在连接，设置300ms后发送信息
        setTimeout(function () {
          This.websocketSend(data)
        }, 300)
      } else { // 连接未创建或者创建失败，则重新创建连接，并设置500ms后发送信息
        this.websochetInit()
        setTimeout(function () {
          This.websocketSend(data)
        }, 500)
      }
    },
    websochetInit () {
      this.websock = new WebSocket('ws://192.168.1.103:5000/userlink/nn')
      this.websock.onmessage = this.websocketMessage
      this.websock.onopen = function () {
        alert('已连接！')
      }
    },
    /* websochet发送信息 */
    websocketSend (data) {
      this.websock.send(JSON.stringify(data))
    },
    /* websochet接收服务器返回的信息 */
    websocketMessage (e) {
      console.log(e)
      this.message = e.data
    },
    // 关闭
    websocketclose (e) {
      console.log('断开连接', e)
    }
  }
}
</script>

<style scoped>

</style>
