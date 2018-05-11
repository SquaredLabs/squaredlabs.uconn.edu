<template>
  <div id="container">
    <div id="content">
      If you’re a UConn or non-UConn developer but want to get involved with ⬚² labs you can:

      <p><span class="contentStyleList">
        <span class="black">1</span>) Contribute to any of our open source
        <SLink
          text="projects"
          font-size="16"
          color="white"
          link_ref="/projects"/>,
      </span>
        <span class="contentStyleList">
          <span class="black">2</span>) contact us about presenting a
          <SLink
            text="workshop"
            font-size="16"
            color="white"
            link_ref="/workshops"/>
          in an area of your expertise, and/or
        </span>
        <span class="contentStyleList">
          <span class="black">3</span>) make a monetary contribution to the lab.
      </span></p>

      <div id="icons">
        <div class="icon"><img
          alt="Gitlab"
          src="~/assets/images/connect/gitlab.svg" ></div>
        <div class="icon"><img
          alt="Mail"
          src="~/assets/images/connect/mail.svg" ></div>
        <div class="icon"><img
          alt="Bitcoin"
          src="~/assets/images/connect/btc.svg"></div>
      </div>
    </div>
    <SLink
      :link_ref="back"
      text="Return to selection"
      font-size="16"
      color="white"/>
  </div>
</template>

<script>
import SLink from "../Link.vue"
export default {
  components: {
    SLink
  },
  props: ["backToSelect"],
  methods: {
    back() {
      this.backToSelect()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
#container {
  position: relative;
  top: -70px;
  background-color: $dodger-blue;
  height: 700px;
}
#content {
  padding-left: 145px;
  padding-right: 145px;
  color: white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
#content .contentStyleList {
  color: white;
}
#content .contentStyleEmphasis {
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  background-position: 50% calc(50% - 5px);
  background-repeat: no-repeat;
  color: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.contentStyleEmphasis:hover {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  );
  background-position: 50% calc(50% - 2px);
  cursor: pointer;
}
.black {
  color: black;
}
#icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;
  color: black;
}
@media only screen and (max-device-width: 949px) {
  #icons {
    justify-content: space-around;
  }
}

.icon {
  width: 200px;
  height: 100px;
  background-color: white;
  margin: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.icon:hover {
  cursor: pointer;
}
.icon img {
  height: 45px;
  margin: 0 auto;
  display: block;
  margin-top: 28px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.icon:hover img {
  height: 50px;
  margin-top: 26px;
}
@media only screen and (max-device-width: 949px) {
  #icons {
    justify-content: space-around;
  }
}
#back {
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  display: inline;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40px;
}
@media screen and (max-width: $desktop) {
  /*Tablet View*/
  #content {
    padding: 5px;
    transition: all 0.3s ease;
  }
}
@media screen and (max-width: $tablet) {
  /*Mobile View*/
  #content {
    top: 10%;
    transform: none;
  }
}
</style>
