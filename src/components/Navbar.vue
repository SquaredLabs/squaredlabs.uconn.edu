<template>
    <div class="navbar" v-bind:class="{blueTheme:theme=='blue'}">
        <div class="mobile">
            [menu ↑]
        </div> 
        <figure class="brand">
            <img src="../images/wordmark.png" /> 
        </figure>
        <!-- <div class="links"> -->
            <SLink class="link" text="home" fontSize="16px" link_ref="/home"
             :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="projects" fontSize="16px" link_ref="/projects"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="people" fontSize="16px" link_ref="/people"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="workshops" fontSize="16px" link_ref="/workshops"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="the lab" fontSize="16px" link_ref="/labs"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="connect" fontSize="16px" link_ref="/connect"
            :color="theme=='blue'?'white':''"/>
        <!-- </div> -->
    </div>
</template>
<script>
  import SLink from "../components/Link.vue";

  export default {
    components: {
      SLink
    },
    props:['theme']
  };
</script>

<style scoped lang="scss">
@import "../styles/vars";
.blueTheme .brand img{
  filter: brightness(0) invert(1);
}


.navbar {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: center;
  justify-content: space-between;
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
  flex: 0 0 calc(100% / 10);
  align-self: flex-end;
  position: relative;
}

.mobile {
  display: none;
}

// Tablet
@media (min-width: $tablet) and (max-width: $desktop) {
  .navbar{
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

}

// Mobile
@media (min-width: 0px) and (max-width: $tablet) {
  
  .brand {
    padding-top: 160px;
    flex-basis: 100%;
  }

  
  .link{
    transform: translateY(-200px);
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