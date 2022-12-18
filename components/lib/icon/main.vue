<template>
  <section v-if="name || icon" class="cl-icon">
    <div class="cl-icon__content">
      <svg v-if="name" class="icon" aria-hidden="true">
        <use :xlink:href="'#cl-' + name"></use>
      </svg>
      <i v-else class="clfont" :class="'cl-' + icon"></i>
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
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
@import './icon.scss';
</style>
