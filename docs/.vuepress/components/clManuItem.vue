<template>
  <section class="cl-manu-item" :data-idx="idx" :class="{ active: $parent.active == idx, disabled }">
    <div class="title-box">
      <slot name="icon">
        <i class="clfont" v-if="icon" :class="icon | formatIconName"></i>
      </slot>
      <div class="title">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  props: {
    idx: [String, Number],
    icon: String,
    disabled: { type: Boolean, default: false },
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

<style scoped>
@import '~@style/manuItem.css';
</style>
