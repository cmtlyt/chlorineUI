<template>
  <section class="cl-button">
    <div
      class="cl-button__content"
      :class="[type, { round, circle, plain, icon: icon, loading, disabled }]"
      v-on="!loading && !disabled && $listeners"
    >
      <span>
        <clIcon v-if="icon || loading" :size="iconSize" :rotate="loading" :name="loading ? 'loading-one' : icon" />
        <slot></slot>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clButton',
  props: {
    type: {
      type: String,
      default: 'base',
      validator: value =>
        ['text', 'base', 'primary', 'success', 'info', 'warning', 'danger', 'el-primary'].includes(value),
    },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    iconSize: { type: [String, Number], default: '' },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
@import '~@style/button.css';
</style>
