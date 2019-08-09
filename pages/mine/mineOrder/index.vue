<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <Button type="primary" @click="$store.commit('demo/increment')"
        >计数</Button
      >
      <div>{{ $store.state.demo.count }}</div>
      <div v-for="item in orderData" :key="item.id">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.address }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  // components: {},
  // props: {}
})
export default class MineOrder extends Vue {
  title: string = '我的订单'

  mounted() {
    this.getData()
  }

  get orderData() {
    return this.$store.state.mine.mineOrder.data
  }

  getData() {
    this.$store.dispatch('mine/mineOrder/getOrder')
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
