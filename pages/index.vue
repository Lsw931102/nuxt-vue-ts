<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">kslab-PC</h1>
      <h2 class="subtitle">Welcome to the iView + Nuxt.js template</h2>
      <div class="links">
        <Button type="primary" target="_blank" to="https://nuxtjs.org/"
          >Documentation</Button
        >
        <Button target="_blank" to="https://github.com/nuxt/nuxt.js"
          >GitHub</Button
        >
        <Button target="_blank" to="https://www.iviewui.com/">iView</Button>
        <nuxt-link to="/demo">demo page</nuxt-link>
        <nuxt-link to="/error">error page</nuxt-link>
        <div>{{ ss }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getList } from '~/services/index'
import Logo from '~/components/Logo/index.vue'

@Component({
  components: { Logo },
  asyncData(op) {
    // 请求
    return getList()
      .then(res => {
        return { ss: res.data.data }
      })
      .catch(err => {
        console.log(err)
      })
  },
  created() {}
  // props: {}
})
export default class MineHome extends Vue {}
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
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
