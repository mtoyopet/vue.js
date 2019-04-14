<template>
  <div
    class="red-color-btn"
    @click="$emit('change-to-red')"/>
</template>

<script>
export default {

}
</script>

<style scoped>
.red-color-btn {
  position: absolute;
  bottom: 0;
  top: 256px;
  left: 0;
  width: 50px;
  background-color: rgba(255, 47, 0, 0.913);
  }
</style>
