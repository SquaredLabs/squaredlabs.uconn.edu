<template>
  <a
    :href="link"
    class="connectCard link col-sm-2 col-md-2"
    target="_blank">
    <div
      :class="{ 'linkImageAnimated': hiddenImage, 'linkImage': !hiddenImage}"
      :style="`background-image: url('${background}'); background-repeat: no-repeat; background-position: center center; background-size: 15%;`" />
    <img
      v-if="hiddenImage"
      :src="hiddenImage"
      class="linkHidden" >

  </a>
</template>

<script>
export default {
  props: {
    link: { type: String, default: null },
    background: { type: String, required: true },
    hiddenImage: { type: String, default: null }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.connectCard {
  height: 100px;
  background-color: #ffffff;
  overflow: hidden;
}

.linkImageAnimated,
.linkHidden {
  transform: translateY(0);
  transition-duration: 0.2s;
}

.linkImage,
.linkImageAnimated {
  height: 100%;
}

.linkHidden {
  max-width: 100%;
}

.link:hover .linkImageAnimated {
  transform: translateY(-20px);
}

.link:hover .linkHidden {
  transform: translateY(-50px);
}
</style>
