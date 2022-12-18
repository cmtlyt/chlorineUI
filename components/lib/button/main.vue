<template>
  <section class="cl-button">
    <div
      class="cl-button__content"
      :class="[type, { round, circle, plain, icon: icon, loading, disabled }]"
      v-on="!loading && !disabled && $listeners"
    >
      <span>
        <clIcon v-if="icon || loading" :rotate="loading" :name="loading ? 'loading-one' : icon" />
        <slot></slot>
      </span>
    </div>
  </section>
</template>

<script>
import clIcon from '../icon/main.vue'
export default {
  name: 'clButton',
  components: { clIcon },
  props: {
    type: {
      type: String,
      default: 'base',
      validator: value => ['base', 'primary', 'success', 'info', 'warning', 'danger', 'el-primary'].includes(value),
    },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    icon: { type: String, default: '' },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
@import './button.scss';
</style>
