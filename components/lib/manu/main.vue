<template>
  <section class="cl-manu">
    <div
      class="cl-manu__content"
      @click="clickHander"
      :class="[mode, { collapse }]"
      :style="[
        {
          '--manu-bgc': backgroundColor || manuData?.backgroundColor,
          '--manu-font-color': textColor || manuData?.textColor,
          '--manu-active-color': activeTextColor || manuData?.activeTextColor,
          '--manu-item-hover-color': hoverColor || manuData?.hoverColor,
          '--manu-item-disabled-color': disabledColor || manuData?.disabledColor,
          '--manu-active-border-color':
            activeBoderColor || manuData?.activeBoderColor || activeTextColor || manuData?.activeTextColor,
          '--manu-item-hover-bgc': hoverBackground || manuData?.hoverBackground,
        },
      ]"
    >
      <slot>
        <div
          class="cl-manu-item"
          v-for="(role, idx) in manuData.manuList"
          :key="idx"
          :data-idx="role.idx"
          :class="{ active: active == role.idx, disabled: role.disabled, 'drop-down': dropIdx == role.idx }"
          @click="dropClick(role.idx)"
        >
          <div class="title-box">
            <i class="clfont" v-if="role.icon" :class="role.icon | formatIconName"></i>
            <div class="title">{{ role.title }} <i class="clfont cl-down" v-if="role.submanu?.length"></i></div>
          </div>
          <div class="cl-submanu" v-if="role.submanu?.length">
            <div class="cl-submanu__content">
              <div
                class="cl-manu-item"
                v-for="(tsubrole, tsubidx) in role.submanu"
                :key="tsubidx"
                :data-idx="tsubrole.idx"
                :class="{
                  active: active == tsubrole.idx,
                  disabled: tsubrole.disabled,
                  'drop-down': dropIdx == tsubrole.idx,
                }"
                @click="dropClick(tsubrole.idx)"
              >
                <div class="title-box">
                  <i class="clfont" v-if="tsubrole.icon" :class="tsubrole.icon | formatIconName"></i>
                  <div class="title">
                    {{ tsubrole.title }} <i class="clfont cl-down" v-if="tsubrole.submanu?.length"></i>
                  </div>
                </div>
                <div class="cl-submanu" v-if="tsubrole.submanu?.length">
                  <div class="cl-submanu__content">
                    <div
                      class="cl-manu-item"
                      v-for="(thsubrole, tsubidx) in tsubrole.submanu"
                      :key="tsubidx"
                      :data-idx="thsubrole.idx"
                      :class="{
                        active: active == thsubrole.idx,
                        disabled: thsubrole.disabled,
                        'drop-down': dropIdx == thsubrole.idx,
                      }"
                      @click="dropClick(thsubrole.idx)"
                    >
                      <div class="title-box">
                        <i class="clfont" v-if="thsubrole.icon" :class="thsubrole.icon | formatIconName"></i>
                        <div class="title">
                          {{ thsubrole.title }} <i class="clfont cl-down" v-if="thsubrole.submanu?.length"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'clManu',
  props: {
    manuData: { type: Object },
    value: { type: [String, Number] },
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    hoverColor: String,
    disabledColor: String,
    activeBoderColor: String,
    hoverBackground: String,
    collapse: { type: Boolean, default: false },
    mode: {
      type: String,
      default: 'horizontal',
      validator(v) {
        return ['horizontal', 'vertical'].includes(v)
      },
    },
  },
  data() {
    return {
      dropIdx: null,
    }
  },
  provide() {
    return {
      $parent: this,
    }
  },
  methods: {
    clickHander(event) {
      const $currDom = event.path.find($dom => Array.from($dom.classList || []).includes('cl-manu-item'))
      if ($currDom.querySelector('.cl-submanu')) return
      const domlist = event.path.filter($dom => Array.from($dom.classList || []).includes('cl-manu-item'))
      const idxPath = domlist.map($dom => $dom.dataset.idx)
      this.active = idxPath[0] || this.active
      this.$emit('select', idxPath)
    },
    dropClick(idx) {
      if (this.dropIdx == idx) {
        this.dropIdx = null
      } else {
        this.dropIdx = idx
      }
    },
  },
  computed: {
    active: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
  filters: {
    formatIconName(v) {
      v = 'cl-' + v
      return v.replace('cl-cl-', 'cl-')
    },
  },
}
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
