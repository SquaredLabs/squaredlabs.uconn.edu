<template>
  <nav
    :class="{blueTheme:theme=='blue'}"
    class="navbar gridded">
    <div class="mobile">
      <SLink
        href="#"
        class="link"
        @click="top">
        [menu ↑]
      </SLink>
    </div>
    <router-link
      class="brand col-1 off-1 off-lg-1"
      to="/">
      <figure class="brand">
        <img src="~/assets/images/wordmark.png">
      </figure>
    </router-link>
    <SLink
      class="link col-1 off-lg-6"
      href="/home">
      home
    </SLink>
    <SLink
      class="link col-1"
      href="/projects">
      projects
    </SLink>
    <SLink
      class="link col-1"
      href="/people">
      people
    </SLink>
    <!--<SLink
        class="link"
        href="/workshops">
        workshops
      </SLink>!-->
    <SLink
      class="link lab col-1"
      href="/labs">
      the lab
    </SLink>
    <SLink
      class="link col-1"
      href="/connect">
      connect
    </SLink>
  </nav>
</template>
<script>
import SLink from "../components/Link.vue"

export default {
  components: {
    SLink
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/grid";

.blueTheme .brand img {
  filter: brightness(0) invert(1);
}

.navbar {
  padding: 20px 0;
  margin-top: 0;
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: SpaceMono;
  align-items: end;
}

nav .link {
  line-height: 1.75em;
  height: 1.25em;
}

.brand {
  margin: 0;
}

.brand > img {
  width: 100%;
}

.mobile {
  display: none;
}

@media screen and (min-width: $desktopLg) {
}
</style>
