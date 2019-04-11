<template>
  <div
    :style="{
      left: `${posX}px`,
      top: `${posY}px`
    }"
    class="shikaku"
    @mousedown="mouseDown">
    <text-box />
  </div>
</template>

<script>
import TextBox from '~/components/TextBox.vue'

export default {
  components: {
    TextBox
  },
  props: {
    posX: {
      type: Number,
      required: true
    },
    posY: {
      type: Number,
      required: true
    }
  },
  methods: {
    mouseDown() {
      this.$emit('mousedowned')
    }
  }
}
</script>

<style>
.shikaku {
  position: fixed;
  width: 200px;
  height: 300px;
  background: #ff0;
}
</style>
