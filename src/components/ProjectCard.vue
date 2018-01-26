<template>
    <div class="project" :style="`background: url('${background}') center/150% no-repeat`">
      <div class="project__content">
        <p class="project__title">{{ name }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ["name", "background"]
};
</script>

<style lang="scss" scoped>
.project {
  background-color: orange;
  height: 20vw;
  position: relative;
  transition: all 0.3s;
}

.project:before {
  background-color: black;
  height: 100%;
  width: 100%;
  content: "";
  opacity: 0.2;
  position: absolute;
  display: block;
  transition: opacity 0.3s ease;
}

.project__content {
  background: white;
  max-width: 55%;
  padding: 10px;
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 2;
}

.project:hover > .project__content {
  min-width: 100%;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
}

.project__title {
  margin: 0;
  color: #0c120c;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.24;
  transition: color 0.3s ease;
}
</style>
