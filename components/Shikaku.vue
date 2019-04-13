<template>
  <div
    :style="{
      left: `${posX}px`,
      top: `${posY}px`
    }"
    class="shikaku"
    >
    <drag-handler
      @dragStart="$emit('dragStart', $event)"
    />
    <text-box />
  </div>
</template>

<script>
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'

export default {
  components: {
    DragHandler,
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