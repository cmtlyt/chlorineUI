<template>
  <section class="cl-icon" :style="{ 'font-size': size + 'px' }">
    <div class="cl-icon__content" :class="{ rotate: rotate }">
      <svg v-if="name" class="icon" aria-hidden="true">
        <use :xlink:href="('#cl-' + name) | removeHeadCl"></use>
      </svg>
      <i v-else-if="icon" class="clfont" :class="('cl-' + icon) | removeHeadCl"></i>
    </div>
  </section>
</template>

<script>
import '../../iconfont'
export default {
  name: 'clIcon',
  props: {
    name: { type: String, default: '' },
    icon: { type: String, defalut: '' },
    size: { type: [Number, String] },
    rotate: { type: Boolean, default: false },
  },
  filters: {
    removeHeadCl(value) {
      return value.replace('cl-cl-', 'cl-')
    },
  },
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
