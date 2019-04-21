<template>
  <div
    class="delete-button"
    @click="$emit('remove')"
  >×</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.delete-button {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 34px;
  color: black;
  cursor: pointer;
  }
</style>
