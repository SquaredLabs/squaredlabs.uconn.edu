<template>
  <nav :class="{ blueTheme: theme == 'blue' }" class="navbar gridded">
    <div class="mobile">
      <v-link
        class="menu link row-off-sm-1 off-sm-2 col-sm-2"
        @click="toggleMenu"
      >
        [menu ↑]
      </v-link>
    </div>
    <router-link class="brand col-sm-2 off-sm-1 off-md-0 col-md-1 col-1" to="/">
      <img
        class="brand"
        src="~/assets/images/wordmark.svg"
        alt="Squared Labs"
      />
    </router-link>
    <v-link class="link col-sm-1 off-3 off-lg-6" href="/home"> home </v-link>
    <v-link class="link col-sm-1" href="/projects"> projects </v-link>
    <v-link class="link col-sm-1" href="/people"> people </v-link>
    <v-link class="link lab col-sm-1" href="/labs"> the lab </v-link>
    <v-link class="link col-sm-1" href="/connect"> connect </v-link>
  </nav>
</template>
<script>
import VLink from "~/components/VLink.vue"

export default {
  components: {
    VLink
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  mounted() {
    var navLinks = document.querySelectorAll("nav > .link")
    navLinks.forEach(function(navLinks) {
      navLinks.addEventListener("click", function() {
        document.querySelector(".menu.link").textContent = "[menu ↑]"
        document.querySelector("nav").classList.remove("expanded")
        if (document.querySelector("nav ~ *.dimmed"))
          document.querySelector("nav ~ *.dimmed").classList.remove("dimmed")
      })
    })
    window.addEventListener("scroll", function() {
      var footbar = document.querySelector(".footbar")
      var footHeight =
        parseInt(window.getComputedStyle(footbar).height, 10) + 3.5
      var docHeight = document.body.clientHeight
      var winHeight = window.innerHeight
      var scrollPos = window.scrollY
      var spaceLeft = docHeight - winHeight - scrollPos
      if (spaceLeft <= 94) {
        var navElements = document.querySelectorAll("nav > *")
        for (var i = 0; i < navElements.length; i++) {
          navElements[i].style.bottom = footHeight - spaceLeft + "px"
        }
      }
    })
  },
  methods: {
    toggleMenu() {
      if (document.querySelector("nav.expanded")) {
        document.querySelector(".menu.link").textContent = "[menu ↑]"
        document.querySelector("nav").classList.remove("expanded")
        document.querySelector("nav ~ *").classList.remove("dimmed")
      } else {
        document.querySelector(".menu.link").textContent = "[menu ↓]"
        document.querySelector("nav").classList.add("expanded")
        document.querySelector("nav ~ *").classList.add("dimmed")
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/grid";

.mobile {
  display: none;
}

@media screen and (max-width: $tablet) {
  nav > .link,
  div.mobile {
    width: calc((100vw - 100px) / 2 + 20px);
    right: 20px;
    bottom: 50px;
    position: fixed;
  }
  nav > .link {
    z-index: -1;
    opacity: 0;
    transition: bottom 0.2s ease, opacity 0.3s ease;
  }
  div.mobile {
    display: initial;
    height: 1.25em;
    .link {
      width: 100%;
    }
  }
  nav {
    > a.link {
      transform: translateY(0);
      &:nth-child(3) {
        transition: all 0.08s ease 0.12s;
      }
      &:nth-child(4) {
        transition: all 0.08s ease 0.09s;
      }
      &:nth-child(5) {
        transition: all 0.08s ease 0.06s;
      }
      &:nth-child(6) {
        transition: all 0.08s ease 0.03s;
      }
      &:nth-child(7) {
        transition: all 0.08s ease;
      }
    }
  }
  nav.expanded {
    > a.link {
      opacity: 1;
      &:nth-child(3) {
        transform: translateY(-40px);
        transition: all 0.12s ease;
      }
      &:nth-child(4) {
        transform: translateY(-80px);
        transition: all 0.12s ease 0.03s;
      }
      &:nth-child(5) {
        transform: translateY(-120px);
        transition: all 0.12s ease 0.06s;
      }
      &:nth-child(6) {
        transform: translateY(-160px);
        transition: all 0.12s ease 0.09s;
      }
      &:nth-child(7) {
        transform: translateY(-200px);
        transition: all 0.12s ease 0.12s;
      }
    }
  }
}

@media screen and (max-width: $tablet) and (min-height: 600px) {
  nav > .link,
  div.mobile {
    width: calc((100vw - 100px) / 2 + 12px);
  }
}

.brand {
  width: 100%;
}

.blueTheme .brand {
  filter: brightness(0) invert(1);
}

.navbar {
  padding: 20px 0;
  margin-top: 0;
  position: relative;
  z-index: 4;
  text-align: center;
  font-family: SpaceMono;
  align-items: end;
}

nav .link {
  line-height: 1.75em;
  height: 1.25em;
}
</style>

<style lang="scss">
nav ~ * {
  transition: opacity 0.25s ease;
}
.dimmed {
  opacity: 0.3;
}
</style>
