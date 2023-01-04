<template>
  <section
    class="cl-switch"
    :style="{
      '--active-color': activeColor,
      '--inactive-color': inactiveColor,
      '--active-text-color': activeTextColor,
      '--inactive-text-color': inactiveTextColor,
      '--switch-width': formatUnit(width),
      '--switch-height': formatUnit(height),
    }"
  >
    <div class="cl-switch__content" :class="{ disabled, active: selfValue }" @click="change">
      <span class="inactive-text" @click.stop="change(false)">{{ inactiveText }}</span>
      <div class="cl-switch-box"></div>
      <span class="active-text" @click.stop="change(true)">{{ activeText }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clSwitch',
  props: {
    value: { type: [String, Boolean, Number], default: false },
    // disabled类
    disabled: { type: Boolean, default: false },
    // text激活文本
    activeText: String,
    inactiveText: String,
    // value激活值
    activeValue: { type: [String, Boolean, Number], default: undefined },
    inactiveValue: { type: [String, Boolean, Number], default: undefined },
    // color样式变量
    activeColor: String,
    inactiveColor: String,
    activeTextColor: String,
    inactiveTextColor: String,
    width: { type: [String, Number], default: 40 },
    height: { type: [String, Number], default: 25 },
  },
  data() {
    return {
      selfValue: null,
    }
  },
  methods: {
    change(flag) {
      if (this.disabled) return
      this.selfValue = typeof flag === 'boolean' ? flag : !this.selfValue
      const activeValue = this.activeValue ?? this.selfValue,
        inactiveValue = this.inactiveValue ?? this.selfValue,
        currValue = this.selfValue ? activeValue : inactiveValue
      this.$emit('input', currValue)
      this.$emit('change', currValue)
    },
    formatUnit(v) {
      const unitMap = ['px', 'pt', 'pc', 'vh', 'vw', 'vmin', 'vmax', 'cm', '%', 'em', 'ex', 'rem']
      for (const unit of unitMap) if (v.toString().split(unit).length == 2) return v
      return v + 'px'
    },
  },
  mounted() {
    this.selfValue = this.value
  },
}
</script>

<style>
@import '~@style/switch.css';
</style>
