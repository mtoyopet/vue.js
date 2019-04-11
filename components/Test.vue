<template>
  <p
    class="test"
    style="position: absolute;"
    @mousedown="mouseDown"
  >てすと</p>
</template>

<script>
// import TextBox from '~/components/TextBox.vue'

export default {
  methods: {
    mouseDown() {
      this.$emit('mouseDown')
    }
  }
}
</script>

<style>
.test {
  background: rgb(59, 59, 54);
  cursor: pointer;
}
</style>
