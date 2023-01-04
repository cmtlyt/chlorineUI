<template>
  <section>
    <cl-switch v-model="switchValue" />
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
