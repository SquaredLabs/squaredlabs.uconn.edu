<template>
  <section>
    <div class="container-header">
        <p class="header" id="Header-1">Like what we do?</p>
        <div id="graphics"></div>
        <p class="header" id="Header-2">So do we.</p>
        <p class="header" id="SubHeader">
            We’ve got a good thing going here, and we’d like to keep it going.
            Here’s how you can help.
            <br/>
            <br/>
            If you’re a…
        </p>
    </div>
    <ConnectSelect/>
  </section>
</template>

<script>
import Construction from "../components/Construction.vue";
import ConnectSelect from "../components/ConnectSelect.vue";

export default {
  components: {
    ConnectSelect
  }
}
</script>
<style scoped lang="scss">
@import "../styles/vars";
    .header{
        font-family: "SpaceMono";
    }
    #Header-1{
        font-size: 76px;
        text-align: center;
        color: #6aa1f4;
        color: $dodger-blue;
        margin-top:5vh;
    }
    #graphics{
        display:flex;
        height: 30vh;
    }
    #Header-2{
        font-size: 50px;
        padding-left: 10vw;
    }
    #SubHeader{
        font-size: 20px;
        padding-left: 10vw;
        font-family: "Moderat";
    }
</style>