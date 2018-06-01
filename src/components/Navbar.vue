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
      class="brand col-lg-2 off-lg-0 col-1 off-1" 
      to="/">
      <figure class="brand">
        <img src="~/assets/images/wordmark.png">
      </figure>
    </router-link>
    <SLink 
      class="link col-lg-2 col-1" 
      href="/home">
      home
    </SLink>
    <SLink 
      class="link col-lg-2 col-1" 
      href="/projects">
      projects
    </SLink>
    <SLink 
      class="link col-lg-2 col-1" 
      href="/people">
      people
    </SLink>
    <!--<SLink
        class="link"
        href="/workshops">
        workshops
      </SLink>!-->
    <SLink 
      class="link lab col-lg-2 col-1" 
      href="/labs">
      the lab
    </SLink>
    <SLink 
      class="link col-lg-2 col-1" 
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
  padding: 20px;
  margin-top: 0;
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: SpaceMono;
  // display: grid;
  // grid-column-gap: 20px;
  align-items: end;
  // grid-template-columns: repeat(4, 1fr);
}

// @media screen and (min-width: $tablet) {
//   .navbar {
//     grid-template-columns: repeat(6, 1fr);
//   }
// }

// @media screen and (min-width: $desktop) {
//   .navbar {
//     grid-template-columns: repeat(8, 1fr);
//   }
// }

nav .link {
  // grid-column: span 1;
  line-height: 1.75em;
  height: 1.25em;
}

.brand {
  // grid-column: 2 / 3;
  margin: 0;
}

.brand > img {
  width: 100%;
}

.mobile {
  display: none;
}
</style>
