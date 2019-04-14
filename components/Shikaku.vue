<template>
  <div
    :style="{
      left: `${posX}px`,
      top: `${posY}px`,
      background: `${background}`
    }"
    class="shikaku"
  >
    <drag-handler
      @dragStart="$emit('dragStart', $event)"
    />
    <delete-btn @remove="$store.commit('removeMemo', index)" />
    <text-box
      :text="text"
      @inputed="onInputed"
    />
    <red-color-btn @change-to-red="$store.commit('changeToRed', index)" />
  </div>
</template>

<script>
import DeleteBtn from '~/components/DeleteBtn.vue'
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'
import RedColorBtn from '~/components/RedColorBtn.vue'

export default {
  components: {
    DeleteBtn,
    DragHandler,
    TextBox,
    RedColorBtn
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
    },
    background: {
      type: String,
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

<style scoped>
.shikaku {
  position: fixed;
  width: 200px;
  height: 300px;
}
</style>
