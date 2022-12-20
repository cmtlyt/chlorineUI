<template>
  <section class="cl-icon" :style="{ 'font-size': size + 'px' }">
    <div class="cl-icon__content" :class="{ rotate: rotate }">
      <i v-if="icon || name" class="clfont" :class="('cl-' + (icon || name)) | removeHeadCl"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clIcon',
  props: {
    name: { type: String, default: '' },
    icon: { type: String, defalut: '' },
    size: { type: [Number, String] },
    rotate: { type: Boolean, default: false },
  },
  data() {
    return {}
  },
  methods: {},
  filters: {
    removeHeadCl(value) {
      return value.replace('cl-cl-', 'cl-')
    },
  },
}
</script>

<style scoped>
@import '~@style/icon.css';
</style>
