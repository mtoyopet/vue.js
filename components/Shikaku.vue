<template>
  <div
    :style="{
      left: `${posX}px`,
      top: `${posY}px`,
      background: bgColor
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
    <div class="color-pallet">
      <color-btn
      v-for="color in colorList"
      :key="color"
      :color="color"
      :index="index"
      />
    </div>
  </div>
</template>

<script>
import DeleteBtn from '~/components/DeleteBtn.vue'
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'
import ColorBtn from '~/components/ColorBtn.vue'

export default {
  components: {
    DeleteBtn,
    DragHandler,
    TextBox,
    ColorBtn
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
    text: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  computed: {
    colorList: () => ['#D9EBF7', '#C6F7F8', '#B7E1E5', '#A5B7B8']
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

.color-pallet {
  position: absolute;
  bottom: 0;
}
</style>
