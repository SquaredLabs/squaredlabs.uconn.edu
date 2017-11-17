<template>
    <div class="project" :style="`background: url('${background}') center/150% no-repeat`">
        <h3 class="project__title">{{ name }}</h3>
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

.project__title {
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: white;
  color: #0c120c;
  font-size: 25px;
  line-height: 1.24;
  max-width: 55%;
  padding: 10px;
  transition: color 0.3s ease;
}
</style>
