<template>
  <section>
    <cl-switch
      v-model="switchValue"
      active-value="激活"
      inactive-value="未激活"
      active-text="激活"
      inactive-text="未激活"
      @change="change"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      switchValue: '激活',
    }
  },
  methods: {
    change(v) {
      console.log(v)
    },
  },
}
</script>
