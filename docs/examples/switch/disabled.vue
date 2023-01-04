<template>
  <section>
    <div class="wrap-row">
      <cl-switch v-model="switchValue" disabled />
      <cl-switch v-model="switchValue2" disabled />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      switchValue: true,
      switchValue2: false,
    }
  },
}
</script>
