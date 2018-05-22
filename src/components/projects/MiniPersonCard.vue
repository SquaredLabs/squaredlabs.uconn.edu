<template>
  <div style="position: relative;">
    <img
      :src="icon"
      class="mini__icon" >
    <div class="mini__card">
      <strong><slot name="name" /></strong><br>
      <span><slot name="position" /></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/styles/vars";

.mini__icon {
  width: 80px;
  height: 80px;
}

.mini__card {
  background: white;
  color: black;
  padding: 10px;
  position: absolute;
  top: 22px;
  bottom: 10px;
  left: 40px;
  white-space: nowrap;
}
</style>
