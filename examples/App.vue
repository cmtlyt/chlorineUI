<template>
  <div id="app">
    <cl-view-window>
      <div class="icons">
        <clIcon rotate name="star" />
        <clIcon icon="star" size="18" />
        <clIcon />
      </div>
    </cl-view-window>
    <!-- <clViewWindow>
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
      <template #hide> </template>
    </clViewWindow> -->
    <cl-view-window>
      <div class="content">
        <cl-image src="ahttps://t12.baidu.com/it/u=2992573373,1781925891&fm=58" @error="loadImageError" />
      </div>
    </cl-view-window>
    <cl-view-window :showBtnBox="false">
      <cl-empty>123</cl-empty>
    </cl-view-window>
    <cl-manu v-model="active" @select="selectHander">
      <cl-manu-item idx="t1" icon="star" disabled>title1</cl-manu-item>
      <cl-submanu idx="t2" icon="file-zip">
        <template #title>title2</template>
        <cl-manu-item idx="t2-1">title2-1</cl-manu-item>
        <cl-manu-item idx="t2-2">title2-2</cl-manu-item>
        <cl-submanu idx="t2-3" icon="star">
          <template #title>title2-3</template>
          <cl-manu-item idx="t2-3-1">title2-3-1</cl-manu-item>
          <cl-manu-item idx="t2-3-2">title2-3-2</cl-manu-item>
          <cl-manu-item idx="t2-3-3">title2-3-3</cl-manu-item>
          <cl-submanu idx="t2-3-4">
            <template #title>title2-3-4</template>
            <cl-manu-item idx="t2-3-4-1">title2-3-4-1</cl-manu-item>
            <cl-manu-item idx="t2-3-4-2">title2-3-4-2</cl-manu-item>
            <cl-manu-item idx="t2-3-4-3">title2-3-4-3</cl-manu-item>
          </cl-submanu>
        </cl-submanu>
        <cl-manu-item idx="t2-4">title2-4</cl-manu-item>
      </cl-submanu>
      <cl-submanu idx="t3" icon="pic">
        <template #title>title3</template>
        <cl-manu-item idx="t3-1">title3-1</cl-manu-item>
        <cl-manu-item idx="t3-2">title3-2</cl-manu-item>
        <cl-manu-item idx="t3-3">title3-3</cl-manu-item>
        <cl-submanu idx="t3-2" disabled>
          <template #title>title3-2</template>
          <cl-manu-item idx="t3-2-1">title3-2-1</cl-manu-item>
          <cl-manu-item idx="t3-2-2">title3-2-2</cl-manu-item>
          <cl-manu-item idx="t3-2-3">title3-2-3</cl-manu-item>
        </cl-submanu>
      </cl-submanu>
    </cl-manu>
    <cl-button @click="collapse = !collapse">展开</cl-button>
    <cl-manu
      mode="vertical"
      :manuData="manuData"
      v-model="active2"
      backgroundColor="#545c64"
      textColor="#fff"
      active-text-color="#ffd04b"
      hoverBackground="#434a50"
      hoverColor="#fff"
      style="flex: 1; width: 130px"
      :collapse="collapse"
    ></cl-manu>
  </div>
</template>

<script>
import { clButton, clIcon, clViewWindow, clImage, clEmpty, clManu, clManuItem, clSubmanu } from '../components/lib'
export default {
  name: 'App',
  data() {
    return {
      loading: true,
      active2: 't2-1-2',
      collapse: false,
      manuData: {
        manuList: [
          { title: 'title1', icon: 'cl-camera', idx: 't1', disabled: true },
          {
            title: 'title2',
            icon: 'file-zip',
            idx: 't2',
            submanu: [
              {
                title: 'title2-1',
                idx: 't2-1',
                icon: 'editor',
                submanu: [
                  { title: 'title2-1-1', idx: 't2-1-1' },
                  { title: 'title2-1-2', idx: 't2-1-2' },
                ],
              },
              {
                title: 'title2-2',
                idx: 't2-2',
              },
            ],
          },
          {
            title: 'title3',
            icon: 'pic',
            idx: 't3',
            submanu: [
              { title: 'title3-1', idx: 't3-1', icon: 'dislike' },
              { title: 'title3-2', idx: 't3-2' },
            ],
          },
        ],
      },
      active: 't1',
    }
  },
  components: { clButton, clIcon, clViewWindow, clImage, clEmpty, clManu, clManuItem, clSubmanu },
  methods: {
    loadingTest() {
      console.log('isloading')
    },
    loadImageError(e) {
      // console.log(e)
    },
    selectHander(idxPath) {
      console.log('select', idxPath)
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  box-sizing: border-box;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  min-height: 100vh;
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
  .content {
    padding: 10px;
  }
}
</style>
