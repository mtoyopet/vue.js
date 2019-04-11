<template>
  <textarea
    class="text-box"
    @input="onInput"
  />
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('inputed')
    }
  }
}
</script>

<style>
.text-box {
  position: absolute;
  bottom: 0;
  top: 60px;
  left: 0;
  width: 200px;
  background-color: #ff0;
  }
</style>
