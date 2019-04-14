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
    <delete-btn @remove="$store.commit('removeMemo')"/>
    <text-box />
  </div>
</template>

<script>
import DeleteBtn from '~/components/DeleteBtn.vue'
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'

export default {
  components: {
    DeleteBtn,
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
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    onInputed(text) {
      this.$store.commit('setText', {
        test: text, // textだけでもOK
        index: this.index
      })
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
