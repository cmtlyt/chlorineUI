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
          <clButton class="btn-text" iconSize="20" :icon="isHide ? 'preview-open' : 'preview-close-one'" type="text">
            <span>{{ isHide ? showBtnText : hideBtnText }}</span>
          </clButton>
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
    showBtnBox: { type: Boolean, default: true },
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

<style>
@import '~@style/viewWindow.css';
</style>
