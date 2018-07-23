<template>
  <div id="container">
    <div id="content">
      If you randomly (or not so randomly) stumbled upon our website and after reading it felt a deeper
      connection to our mission you should seriously consider a philanthropic contribution.
      Most funds will go to feeding starving undergraduates on the team.

      <p><strong>Just think:</strong></p>
      <p class="level">At the $1 level:</p>
      <p class="level-reward">You can buy a team member half a bottle of iced tea from a UConn cafe.</p>
      <p class="level">At the $5 level:</p>
      <p class="level-reward">You can buy a team member lunch
      (if they don’t mind just having a bowl of soup).</p>
      <p class="level">At the $10 level:</p>
      <p class="level-reward">You can buy a couple of team members half a pizza
      (footage of them fighting over it can be provided).</p>
      <p class="level">At the $25 level:</p>
      <p class="level-reward">You can sponsor a lunch meeting
      (we will draw straws for which 2 team members will get to eat [appetizers]).</p>
      <p class="level">At the $50 level:</p>
      <p class="level-reward">You can sponsor a UConn cookie platter for one of our workshops.</p>
      <p class="level">At the $100 level:</p>
      <p class="level-reward">You can give a 5 team members a 50 cent raise (for one week).</p>

      <p>In all seriousness, in addition to food, our lab has a variety of needs
      (from white board markers to computer monitors).  Any and all contributions are extremely appreciated 😁.</p>
      <div id="icons">
        <div class="icon">
          <img
            alt="Donate Bitcoin"
            src="~/assets/images/connect/btc.svg" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    back: { type: Function, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
// #container {
//   position: relative;
//   top: -50px;
//   background-color: $dodger-blue;
//   height: 900px;
// }
// #content {
//   padding-left: 145px;
//   padding-right: 145px;
//   color: white;
//   position: relative;
//   top: 50%;
//   transform: translateY(-50%);
// }
.level {
  color: $charcoal-grey;
  margin: 5px 0 5px 0;
}
.level-reward {
  margin: 0;
}
#icons {
  padding-top: 40px;
  display: flex;
  justify-content: center;
}
.icon {
  width: 230px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.icon img {
  height: 45px;
  margin-top: 28px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.icon:hover {
  cursor: pointer;
}
.icon:hover img {
  height: 50px;
  margin-top: 26px;
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
