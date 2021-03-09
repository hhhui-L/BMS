<template>
    <div>电池监测</div>
</template>

<script>
export default {
  name: 'Bms',
  // 进入路由之前执行
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.getData()
    })
  },
  // 离开路由之前执行
  beforeRouteLeave: (to, from, next) => {
    next()
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/data.json'
      }).then(function (repos) {
        console.log(repos)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
