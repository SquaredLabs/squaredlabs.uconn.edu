<template>
    <div class="navbar">
        <div class="mobile">
            [menu ↑]
        </div> 
        <figure class="brand">
            <img src="../images/wordmark.png" /> 
        </figure>
        <!-- <div class="links"> -->
            <router-link class="link" to="/">home</router-link>
            <router-link class="link" to="/projects">projects</router-link>
            <router-link class="link" to="/people">people</router-link>
            <router-link class="link" to="/workshops">workshops</router-link>
            <a class="link" href="#">the lab</a>
            <router-link class="link" to="/connect">connect</router-link>
        <!-- </div> -->
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.navbar {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.brand {
  flex-basis: calc(100% / 8 * 2);
  flex-grow: 0;
  min-width: 0;
  margin: 0;
}

.brand > img {
  max-width: 60%;
}

.link {
  flex-basis: calc(100% / 8);
  align-self: flex-end;
  position: relative;
  color: $onyx;
  font-family: SpaceMono;
  transition: all 0.15s ease;
  text-decoration: none;
}

.link:before {
  content: "";
  position: absolute;
  display: block;
  height: 1em;
  left: 20px;
  right: 20px;
  background-color: $dodger-blue-50;
  transition: background-color 0.3s ease;
  z-index: -1;
}

.link:hover, .router-link-exact-active {
  bottom: -2px;
}

.link:hover:before, .router-link-exact-active:before {
  background-color: $dodger-blue;
  top: -2px;
}

.mobile {
  display: none;
}

// Tablet
@media (min-width: $tablet) and (max-width: $desktop) {
  .brand {
    flex-basis: 100%;
    padding-bottom: 20px;
  }

  .brand > img {
    max-width: 50%;
  }

  .link {
    flex-basis: calc(100% / 6);
  }

  .link:before {
    left: 10px;
    right: 10px;
  }
}

// Mobile
@media (min-width: 0px) and (max-width: $tablet) {
  .brand {
    padding-top: 160px;
    flex-basis: 100%;
  }

  .link {
    display: none;
    position: absolute;
    bottom: 200px;
    right: 25px;
  }

  .mobile {
    display: block;
    position: fixed;
    font-family: SpaceMono;
    padding-left: 16px;
    padding-right: 16px;
    bottom: 25px;
    right: 25px;
    z-index: 1;
  }

  .mobile:after {
    content: "";
    position: absolute;
    display: block;
    height: 1em;
    top: -4px;
    left: 0;
    right: 0;
    height: 100%;
    background-color: $dodger-blue-50;
    transition: background-color 0.3s ease;
  }
}
</style>