<template>
  <section>
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
    <br /> <hr /> <br />
    <cl-manu
      :manuData="manuData"
      v-model="active2"
      backgroundColor="#545c64"
      textColor="#fff"
      active-text-color="#ffd04b"
      hoverBackground="#434a50"
      hoverColor="#fff"
    ></cl-manu>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 't2-1',
      active2: 't2-1',
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
  methods: {
    selectHander(idxPath) {
      console.log('select', idxPath)
    },
  },
}
</script>
