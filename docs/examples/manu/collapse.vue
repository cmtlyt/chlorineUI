<template>
  <section>
    <div class="wrap-row">
      <cl-button type="primary" :plain="collapse" @click="collapse = false">展开</cl-button>
      <cl-button type="primary" :plain="!collapse" @click="collapse = true">收起</cl-button>
    </div>
    <cl-manu mode="vertical" :manuData="manuData" v-model="active" :collapse="collapse"></cl-manu>
  </section>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      active: 't2-1',
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
    }
  },
}
</script>
