<template>
  <section class="cl-image" :style="{ '--avt-object-fit': fit }">
    <div class="cl-image__content">
      <img class="cl-image__content-image" :src="errImg || src" :alt="alt" @error="loadImageError" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'clImage',
  props: {
    src: { type: String, required: true },
    fit: { type: String, default: 'cover' },
    alt: { type: String, default: '' },
  },
  data() {
    return {
      errImg: '',
    }
  },
  methods: {
    loadImageError(e) {
      this.errImg = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
      this.$emit('error', e)
    },
  },
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
