<template>
  <div id="app">
    <div class="icons">
      <clIcon rotate name="star" />
      <clIcon icon="star" size="18" />
      <clIcon />
    </div>
    <clViewWindow>
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
        <clButton round disabled type="info">123</clButton>
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
        <clButton plain disabled type="danger">123</clButton>
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
        <clButton icon="cl-two-dimensional-code-two" type="warning" circle></clButton>
        <clButton @click="loading = !loading" icon="cl-close" type="danger">123</clButton>
        <br />
        <div>
          <clButton loading @click="loadingTest" icon="cl-star">123</clButton>
          <clButton loading @click="loadingTest" icon="cl-preview-close-one" type="success">123</clButton>
          <clButton loading @click="loadingTest" icon="cl-info" type="primary">123</clButton>
          <clButton loading @click="loadingTest" icon="cl-printer" type="el-primary">123</clButton>
          <clButton loading @click="loadingTest" icon="cl-down" type="info">123</clButton>
          <clButton loading @click="loadingTest" icon="cl-two-dimensional-code-two" type="warning">123</clButton>
          <clButton loading @click="loadingTest" icon="cl-close" type="danger">123</clButton>
          <clButton :loading="loading" @click="loadingTest" type="danger">123<clIcon icon="star" /></clButton>
          <clButton :loading="loading" @click="loadingTest" type="danger">123</clButton>
          <clButton :loading="loading" @click="loadingTest" type="text">123</clButton>
          <clButton :loading="loading" @click="loadingTest" disabled type="text">123</clButton>
        </div>
      </div>
      <template #hide> 123 </template>
    </clViewWindow>
    <clViewWindow>
      <clButton icon="cl-star"> 123 </clButton>
      <clButton type="success">123</clButton>
      <template #hide>
      </template>
    </clViewWindow>
  </div>
</template>

<script>
import { clButton, clIcon, clViewWindow } from '../components/lib'
export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  components: { clButton, clIcon, clViewWindow },
  methods: {
    loadingTest() {
      console.log('isloading')
    },
  },
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  .btns {
    padding: 20px;
    & > .div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .icons {
    font-size: 30px;
  }
}
</style>
