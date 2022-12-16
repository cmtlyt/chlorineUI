<template>
  <section class="cl-button">
    <div
      class="cl-button__content"
      :class="[type, { round, circle, plain, icon: icon, loading }]"
      v-on="!loading && $listeners"
    >
      <span>
        <i v-if="icon || loading" class="clfont" :class="icon"></i>
        <slot></slot>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clButton',
  props: {
    type: { type: String, default: 'base' },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    icon: { type: String, default: '' },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss"></style>
