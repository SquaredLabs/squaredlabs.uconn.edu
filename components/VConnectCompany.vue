<template>
  <div id="container">
    <div id="content">
      <p>
        If you’re part of a company and you would like to connect with our team,
        the best way to do that is to give us free stuff that you think we’d
        find useful (apps, hardware, furniture, food, money, etc.) — we’re not
        likely to turn you down, so don’t be shy.
      </p>
      <p>
        When you give us free stuff, we advertise your company’s logo on our
        main page, below, and on any ⬚² labs promotional materials (as
        appropriate). You also get the opportunity to network with some of the
        top talent at UConn (and might even be lucky enough to have some of them
        work for you when they graduate — though they tend to be highly
        competitive in the job market).
      </p>
      <div id="icons">
        <div class="icon">
          <img alt="Gitlab" src="~/assets/images/connect/stage_lg.svg" />
          <div class="subHeader">
            No one's taken the spotlight yet.
            <p>(We're still casting.)</p>
          </div>
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
.contentStyleEmphasis {
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  background-position: 50% calc(50% - 5px);
  background-repeat: no-repeat;
  color: $onyx;
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
#icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
}
.icon {
  text-align: center;
}
.subHeader {
  font-family: "Moderat";
  font-weight: bold;
  color: white;
  font-size: 16px;
  opacity: 0.5;
  padding-top: 20px;
}
.subHeader p {
  font-size: 10px;
  margin: 0;
}
.icon img {
  height: 10em;
  margin: 0 auto;
  display: block;
  margin-top: 28px;
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
