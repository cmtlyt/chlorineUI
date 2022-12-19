<template>
  <section class="cl-button">
    <div
      class="cl-button__content"
      :class="[type, { round, circle, plain, icon: icon, loading, disabled }]"
      v-on="!loading && !disabled && $listeners"
    >
      <span>
        <svg
          v-if="icon || loading"
          class="icon"
          aria-hidden="true"
          :style="{ height: iconSize + 'px', width: iconSize + 'px' }"
          :class="{ rotate: loading }"
        >
          <use :xlink:href="('#cl-' + (loading ? 'loading-one' : icon)) | removeHeadCl"></use>
        </svg>
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
