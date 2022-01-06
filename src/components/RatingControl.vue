<template>
  <h2>Your Rating</h2>
  <select-button
    v-model="selectValue"
    :options="options"
    @click="$emit('update:modelValue', selectValue)"
  />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      selectValue: this.modelValue,
      options: ['Bad', 'Good', 'Perfect'],
    };
  },
  watch: {
    modelValue(value) {
      this.selectValue = value;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
