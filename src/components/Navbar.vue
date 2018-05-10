<template>
    <div class="navbar" v-bind:class="{blueTheme:theme=='blue'}">
        <div class="mobile">
            <SLink class="link" text="[menu ↑]" fontSize="16px" :link_ref="top"
             :color="theme=='blue'?'white':''"/>
        </div> 
        <router-link class="brand" to="/">
          <figure class="brand">
            <img src="~/assets/images/wordmark.png" /> 
          </figure>
        </router-link>
        <div class="links">
            <SLink class="link" text="home" fontSize="16px" width="true" link_ref="/home"
             :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="projects" fontSize="16px" width="true" link_ref="/projects"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="people" fontSize="16px" width="true" link_ref="/people"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="workshops" fontSize="16px" width="true" link_ref="/workshops"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link lab" text="the lab" fontSize="16px" width="true" link_ref="/labs"
            :color="theme=='blue'?'white':''"/>
            <SLink class="link" text="connect" fontSize="16px" width="true" link_ref="/connect"
            :color="theme=='blue'?'white':''"/>
        </div>
    </div>
</template>
<script>
  import SLink from "../components/Link.vue";

  export default {
    components: {
      SLink
    },
    props:['theme'],
    methods:{
      top(){
        window.scrollTo({top:0,behavior:'smooth'});
      }
    }
  };
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";
.blueTheme .brand img{
  filter: brightness(0) invert(1);
}
.navbar {
  padding: 20px;
  text-align: center;
  z-index: 15;
  display:flex;
  flex-wrap: wrap;
  position: relative;
}
.links{
  display: flex;
  align-items: flex-end;
  align-content: center;
  justify-content: space-between;
  width:70%;
  flex-wrap: wrap;
  font-family: "SpaceMono";
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
  margin-top:5px;
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
  .links{
    flex:0 0 100%;
  }

}

// Mobile
@media (min-width: 0px) and (max-width: $tablet) {
  
  .brand {
    padding-top: 160px;
    flex-basis: 100%;
  }

  .links{
    width: 100%;
  }
  .links .link{
    transform: translateY(-200px);
  }
  .mobile {
    display: block;
    position: fixed;
    font-family: SpaceMono;
    bottom: 25px;
    right: 25px;
    z-index:12;
    transition: all 0.3s ease;
  }
}
</style>