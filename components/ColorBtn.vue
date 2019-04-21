<template>
  <div
    class="color-btn"
    :style="{ background: color }"
    @click="changeColor"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    changeColor() {
      this.$store.commit('changeColor', {
        color: this.color,
        index: this.index
      })
    }
  }
}
</script>

<style scoped>
.color-btn {
  height: 50px;
  width: 50px;
  float: left;
  border: solid;
  border-color: #A2A8A8;
  border-width: 0.5px;
  }
</style>
