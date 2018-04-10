<template>
    <section>
        <div class="container-header">
            <p class="header" id="header-1">Like what we do?</p>
            <div id="graphics"></div>
            <p class="header" id="header-2">So do we.</p>
            <p class="header" id="subHeader">
                We’ve got a good thing going here, and we’d like to keep it going. Here’s how you can help.
                <br/>
                <br/> If you’re a…
            </p>
            <Link text="Back" link_ref="-1" fontSize="40" />
        </div>
        <ConnectSelect/>
    </section>
</template>

<script>

  import ConnectSelect from "../components/connect/ConnectSelect.vue";
  import ArrowButton from "../components/ArrowButton.vue";
  import Link from "../components/Link.vue";
  export default {
    components: {
      ConnectSelect,
      ArrowButton,
      Link
    }
  };
</script>
<style scoped lang="scss">
  @import "../styles/vars";
  .container-header{
    background: $pale-grey;
    z-index: 11;
  }
  .header {
    font-family: "SpaceMono";
  }
  #Header-1 {
    font-size: 76px;
    text-align: center;
    color: #6aa1f4;
    color: $dodger-blue;
    margin-top: 5vh;
  }

  #graphics {
    display: flex;
    height: 30vh;
  }
  #header-2 {
    font-size: 50px;
    padding-left: 10vw;
  }
  #subHeader {
    font-size: 20px;
    padding-left: 10vw;
    font-family: "Moderat";
    margin: 0;
  }
  #back {
    position: absolute;
    left: 10px;
    top: 50%;
    width: 10px;
    height: 10px;
    background-color: $dodger-blue;
  }
  @media only screen and (max-width: 750px) {
    #header-1 {
      font-size: 35px;
    }
    #header-2 {
      font-size: 25px;
    }
    #subHeader {
      font-size: 20px;
    }
  }
</style>