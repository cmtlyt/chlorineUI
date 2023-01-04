<template>
  <section>
    <cl-switch v-model="switchValue" active-text="激活" inactive-text="未激活" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      switchValue: true,
    }
  },
}
</script>
