<template>
  <div id="app">
    <div class="btns">
      <clButton>123</clButton>
      <clButton type="success">123</clButton>
      <clButton type="primary">123</clButton>
      <clButton type="el-primary">123</clButton>
      <clButton type="info">123</clButton>
      <clButton type="warning">123</clButton>
      <clButton type="danger">123</clButton>
      <br />
      <clButton round>123</clButton>
      <clButton round type="success">123</clButton>
      <clButton round type="primary">123</clButton>
      <clButton round type="el-primary">123</clButton>
      <clButton round type="info">123</clButton>
      <clButton round type="warning">123</clButton>
      <clButton round type="danger">123</clButton>
      <br />
      <clButton circle>123</clButton>
      <clButton circle type="success">123</clButton>
      <clButton circle type="primary">123</clButton>
      <clButton circle type="el-primary">123</clButton>
      <clButton circle type="info">123</clButton>
      <clButton circle type="warning">123</clButton>
      <clButton circle type="danger">123</clButton>
      <br />
      <clButton plain>123</clButton>
      <clButton plain circle type="success">123</clButton>
      <clButton plain round type="primary">123</clButton>
      <clButton plain type="el-primary">123</clButton>
      <clButton plain type="info">123</clButton>
      <clButton plain type="warning">123</clButton>
      <clButton plain type="danger">123</clButton>
      <clButton icon="cl-two-dimensional-code-two" type="warning">123</clButton>
      <br />
      <clButton icon="cl-star" plain circle></clButton>
      <clButton icon="cl-preview-close-one" plain circle type="success"></clButton>
      <clButton icon="cl-info" plain circle type="primary"></clButton>
      <clButton icon="cl-printer" plain circle type="el-primary"></clButton>
      <clButton icon="cl-down" plain circle type="info"></clButton>
      <clButton icon="cl-two-dimensional-code-two" plain circle type="warning"></clButton>
      <clButton icon="cl-close" plain circle type="danger"></clButton>
      <br />
      <clButton icon="cl-star">123</clButton>
      <clButton icon="cl-preview-close-one" type="success">123</clButton>
      <clButton icon="cl-info" type="primary">123</clButton>
      <clButton icon="cl-printer" type="el-primary">123</clButton>
      <clButton icon="cl-down" type="info">123</clButton>
      <clButton icon="cl-two-dimensional-code-two" type="warning">123</clButton>
      <clButton @click="loading = !loading" icon="cl-close" type="danger">123</clButton>
      <br />
      <clButton loading @click="loadingTest" icon="cl-star">123</clButton>
      <clButton loading @click="loadingTest" icon="cl-preview-close-one" type="success">123</clButton>
      <clButton loading @click="loadingTest" icon="cl-info" type="primary">123</clButton>
      <clButton loading @click="loadingTest" icon="cl-printer" type="el-primary">123</clButton>
      <clButton loading @click="loadingTest" icon="cl-down" type="info">123</clButton>
      <clButton loading @click="loadingTest" icon="cl-two-dimensional-code-two" type="warning">123</clButton>
      <clButton loading @click="loadingTest" icon="cl-close" type="danger">123</clButton>
      <clButton :loading="loading" @click="loadingTest" type="danger">123<i class="clfont cl-close"></i></clButton>
      <clButton :loading="loading" @click="loadingTest" type="danger">123</clButton>
    </div>
  </div>
</template>

<script>
import { clButton } from '../components/lib'
export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  components: { clButton },
  methods: {
    loadingTest() {
      console.log('isloading')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
