<template>
  <div class="container">
    <div>
      <h1 class="title">kslab-PC</h1>
      <div>demo page</div>
      <!-- 用法一 -->
      <Button type="primary" @click="increment">计数</Button>
      <div>{{ count }}</div>
      <!-- 用法二 -->
      <Button type="primary" @click="$store.commit('demo/increment')"
        >计数</Button
      >
      <div>{{ $store.state.demo.count }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DemoPage',
  computed: {
    ...mapState('demo', {
      count: state => state.count
    })
  },
  methods: {
    ...mapMutations('demo', {
      increment: 'increment'
    })
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
