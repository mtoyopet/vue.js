<template>
  <div
    :style="{
      left: `${posX}px`,
      top: `${posY}px`
    }"
    class="shikaku">
  </div>
</template>

<script>
export default {
  props: {
    posX: {
      type: Number,
      required: true
    },
    posY: {
      type: Number,
      required: true
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
