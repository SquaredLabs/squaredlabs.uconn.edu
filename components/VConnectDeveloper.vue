<template>
  <div id="container">
    <div id="content">
      If you’re a UConn or non-UConn developer but want to get involved with ⬚²
      labs you can:
      <p>
        <span class="contentStyleList">
          <span class="black">1</span>) Contribute to any of our open source
          <v-link lighter-background href="/projects"> projects </v-link>,
        </span>
        <span class="contentStyleList">
          <span class="black">2</span>) contact us about presenting a in an area
          of your expertise, and/or
        </span>
        <span class="contentStyleList">
          <span class="black">3</span>) make a monetary contribution to the lab.
        </span>
      </p>

      <div class="connectButtons">
        <v-connect-card
          title="Contribute on GitHub"
          link="https://github.com/squaredlabs"
        >
          <v-connect-button-art-git-hub />
        </v-connect-card>
        <v-connect-card
          title="Contact ⬚² labs"
          link="mailto:squaredlabs@uconn.edu"
        >
          <v-connect-button-art-mail />
        </v-connect-card>
        <v-connect-card
          title="Donate to ⬚² labs"
          link="http://www.foundation.uconn.edu/send-your-gift/"
        >
          <v-connect-button-art-btc />
        </v-connect-card>
      </div>
    </div>
  </div>
</template>

<script>
import VLink from "~/components/VLink.vue"
import VConnectCard from "~/components/VConnectCard.vue"
import VConnectButtonArtMail from "~/components/VConnectButtonArtMail.vue"
import VConnectButtonArtGitHub from "~/components/VConnectButtonArtGitHub.vue"
import VConnectButtonArtBtc from "~/components/VConnectButtonArtBtc.vue"
export default {
  components: {
    VLink,
    VConnectCard,
    VConnectButtonArtMail,
    VConnectButtonArtGitHub,
    VConnectButtonArtBtc
  },
  props: {
    back: { type: Function, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
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
.connectButtons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 40px;
  color: black;
}
.connectCard {
  margin: 1em;
  width: calc(33% - 2em);
  min-width: 15em;
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
</style>
