<template>
    <a class="link" :href="link" target="_blank">
        <div :class="{ 'link__image-animated': hiddenImage, 'link__image': !hiddenImage}" :style="`background-image: url('${background}'); background-repeat: no-repeat; background-position: center center; background-size: 15%;`" />
        <img v-if="hiddenImage" class="link__hidden" :src="hiddenImage" />

    </a>
</template>

<script>
export default {
  props: ["link", "background", "hidden-image"]
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";

.link {
  height: 100px;
  background-color: #ffffff;
  overflow: hidden;
}

.link__image-animated,
.link__hidden {
  transform: translateY(0);
  transition-duration: 0.2s;
}

.link__image,
.link__image-animated {
  height: 100%;
}

.link__hidden {
  max-width: 100%;
}

.link:hover .link__image-animated {
  transform: translateY(-20px);
}

.link:hover .link__hidden {
  transform: translateY(-50px);
}
</style>
