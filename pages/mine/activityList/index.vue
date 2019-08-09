<template>
  <div class="container">
    <div>
      <h1 class="title">{{ title }}</h1>
      <Button
        type="primary"
        @click="$store.commit('mine/activityList/increment')"
        >计数</Button
      >
      <div>{{ $store.state.mine.activityList.count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  // components: {},
  // props: {}
})
export default class ActivityList extends Vue {
  title: string = '我参加的活动'

  get count() {
    return this.$store.state.mine.activityList.count
  }

  increment() {
    this.$store.commit('mine/activityList/increment')
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
