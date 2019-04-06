<template>
  <div
    class="add-button"
    @click="onClick"
  />
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('clicked')
    }
  }
}
</script>

<style>
.add-button {
  position: fixed;
  width: 80px;
  height: 80px;
  bottom: 20px;
  left: 20px;
  border-radius: 50%;
  background: #fff;
}
</style>
