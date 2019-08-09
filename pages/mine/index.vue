<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <Button type="primary" @click="$store.commit('demo/increment')"
        >计数</Button
      >
      <div>{{ $store.state.demo.count }}</div>
      <nuxt-link to="/mine/mineOrder">我的订单</nuxt-link>
      <nuxt-link to="/mine/activityList">我的活动列表</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  // components: {},
  // props: {}
})
export default class MineHome extends Vue {
  title: string = '个人中心'

  get count() {
    return this.$store.state.demo.count
  }

  increment() {
    this.$store.commit('demo/increment')
  }
  // computed: {
  //   ...mapState('demo', {
  //     count: state => state.count
  //   })
  // },
  // methods: {
  //   ...mapMutations('demo', {
  //     increment: 'increment'
  //   })
  // }
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
