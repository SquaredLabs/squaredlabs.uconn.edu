<template>
  <div
    :class="{blueTheme:theme=='blue'}"
    class="navbar">
    <div class="mobile">
      <SLink
        href="#"
        class="link"
        @click="top">
        [menu ↑]
      </SLink>
    </div>
    <router-link
      class="brand"
      to="/">
      <figure class="brand">
        <img src="~/assets/images/wordmark.png" >
      </figure>
    </router-link>
    <div class="links">
      <SLink
        class="link"
        href="/home">
        home
      </SLink>
      <SLink
        class="link"
        href="/projects">
        projects
      </SLink>
      <SLink
        class="link"
        href="/people">
        people
      </SLink>
      <SLink
        class="link"
        href="/workshops">
        workshops
      </SLink>
      <SLink
        class="link lab"
        href="/labs">
        the lab
      </SLink>
      <SLink
        class="link"
        href="/connect">
        connect
      </SLink>
    </div>
  </div>
</template>
<script>
import SLink from "../components/Link.vue"

export default {
  components: {
    SLink
  },
  props: {
    theme: { type: String, required: true }
  },
  methods: {
    top() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";
.blueTheme .brand img {
  filter: brightness(0) invert(1);
}
.navbar {
  padding: 20px;
  text-align: center;
  z-index: 15;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.links {
  display: flex;
  align-items: flex-end;
  align-content: center;
  justify-content: space-between;
  width: 70%;
  flex-wrap: wrap;
  font-family: "SpaceMono";
}
.links > a {
  min-width: 7em;
}

.brand {
  flex-basis: calc(100% / 8 * 2);
  flex-grow: 0;
  min-width: 0;
  margin: 0;
  position: relative;
}

.brand > img {
  max-width: 60%;
}

.link {
  margin-top: 5px;
  flex: 0 0 calc(100% / 10);
  align-self: flex-end;
  position: relative;
}

.mobile {
  display: none;
}

// Tablet
@media (min-width: $tablet) and (max-width: $desktop) {
  .navbar {
    align-items: flex-start;
  }
  .brand {
    flex-basis: 100%;
    padding-bottom: 20px;
  }

  .brand > img {
    max-width: 50%;
  }

  .link {
    flex-basis: calc(100% / 7);
  }
  .links {
    flex: 0 0 100%;
  }
}

// Mobile
@media (min-width: 0px) and (max-width: $tablet) {
  .brand {
    padding-top: 160px;
    flex-basis: 100%;
  }

  .links {
    width: 100%;
  }
  .links .link {
    transform: translateY(-200px);
  }
  .mobile {
    display: block;
    position: fixed;
    font-family: SpaceMono;
    bottom: 25px;
    right: 25px;
    z-index: 12;
    transition: all 0.3s ease;
  }
}
</style>
