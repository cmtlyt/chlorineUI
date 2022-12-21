<template>
  <section class="cl-manu-item" :key="idx" :data-idx="idx" :class="{ active: $parent.active == idx, disabled }">
    <div class="title-box">
      <slot name="icon">
        <i class="clfont" v-if="icon" :class="icon | formatIconName"></i>
      </slot>
      <div class="title"><slot name="title"></slot><i class="clfont cl-down"></i></div>
    </div>
    <div class="cl-submanu">
      <div class="cl-submanu__content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clSubmanu',
  props: {
    idx: [String, Number],
    icon: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['$parent'],
  data() {
    return {}
  },
  methods: {},
  filters: {
    formatIconName(v) {
      v = 'cl-' + v
      return v.replace('cl-cl-', 'cl-')
    },
  },
}
</script>

<style lang="scss">
@import './style.scss';
</style>
