<template>
  <nav
    :class="{blueTheme:theme=='blue'}"
    class="navbar gridded">
    <div class="mobile">
      <SLink
        class="menu link row-off-sm-1 off-sm-2 col-sm-2"
        @click="toggleMenu">
        [menu ↑]
      </SLink>
    </div>
    <router-link
      class="brand col-sm-2 off-sm-1 off-md-0 col-md-1 col-1"
      to="/">
      <figure class="brand">
        <img src="~/assets/images/wordmark.png">
      </figure>
    </router-link>
    <SLink
      class="link col-sm-1 off-3 off-lg-6"
      href="/home">
      home
    </SLink>
    <SLink
      class="link col-sm-1"
      href="/projects">
      projects
    </SLink>
    <SLink
      class="link col-sm-1"
      href="/people">
      people
    </SLink>
    <!--<SLink
        class="link"
        href="/workshops">
        workshops
      </SLink>!-->
    <SLink
      class="link lab col-sm-1"
      href="/labs">
      the lab
    </SLink>
    <SLink
      class="link col-sm-1"
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
  mounted() {
    // if (window.matchMedia("(max-width: 700px)").matches) {
    //   ;(function() {
    //     console.log("mq fired")
    //     var nav = document.querySelector("nav.gridded.navbar")
    //     nav.style.height = document.documentElement.scrollHeight
    //   })()
    // }

    var el = document.querySelectorAll("nav > .link")
    el.forEach(function(el) {
      el.addEventListener("click", function() {
        console.log("menu reset")
        document.querySelector("nav").classList.remove("expanded")
        document.querySelector("nav ~ *.dimmed").classList.remove("dimmed")
      })
    })
  },
  methods: {
    toggleMenu() {
      console.log("menu toggled")
      document.querySelector("nav").classList.toggle("expanded")
      document.querySelector("nav ~ *").classList.toggle("dimmed")
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
    bottom: 40px;
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

.blueTheme .brand img {
  filter: brightness(0) invert(1);
}

.navbar {
  padding: 20px 0;
  margin-top: 0;
  position: relative;
  z-index: 3;
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
</style>

<style lang="scss">
nav ~ * {
  transition: opacity 0.25s ease;
}
.dimmed {
  opacity: 0.3;
}
</style>
