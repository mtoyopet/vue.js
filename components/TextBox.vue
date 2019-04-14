<template>
  <textarea
    class="text-box"
    @input="onInput"
  />
</template>

<script>
export default {
  methods: {
    onInput(e) {
      this.$emit('inputed', e.target.value)
    }
  }
}
</script>

<style>
.text-box {
  position: absolute;
  bottom: 43px;
  top: 60px;
  left: 0;
  width: 200px;
  background-color: transparent;
  }
</style>
