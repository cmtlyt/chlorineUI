<template>
  <section class="cl-view-window">
    <div class="cl-view-window__content">
      <div class="cl-view-window__content-view">
        <slot></slot>
      </div>
      <div class="cl-view-window__content-hide-view" :style="{ height: hideViewHeight + 'px' }">
        <div class="content" ref="hideContent">
          <slot name="hide"></slot>
        </div>
      </div>
      <div class="cl-view-window__content-btns" v-if="showBtnBox" @click="isHide = !isHide">
        <slot name="btns">
          <div class="btn-text">
            <i :class="'clfont cl-' + (isHide ? 'preview-open' : 'preview-close-one')"></i>
            <span>{{ isHide ? showBtnText : hideBtnText }}</span>
          </div>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clViewWindow',
  props: {
    showBtnText: { type: String, default: '显示' },
    hideBtnText: { type: String, default: '隐藏' },
    showBtnBox: { type: Boolean, default: false },
  },
  data() {
    return {
      isHide: true,
      hideViewHeight: 0,
    }
  },
  watch: {
    isHide(v) {
      if (v) {
        this.hideViewHeight = 0
      } else {
        setTimeout(() => {
          this.hideViewHeight = this.$refs.hideContent.offsetHeight
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
