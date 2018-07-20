<template>
  <div ref="view">
    <div
      id="graphics"
      ref="graphics"
      :style="{transform:'translateX('+(-scroll)+'px)'}">
      <div
        class="graphic"
        background="~/assets/images/square.png"
        @mouseover="startCounter(40)"
        @mouseleave="endCounter">
        <div
          id="pixelsPerDay"
          class="graphicInner">
          <img src="~/assets/images/connect/pixels.svg">
          <p class="statisticText">{{ statCount }}m</p>
          <p class="statisticSubText">pixels per day</p>
        </div>
      </div>
      <div
        class="graphic"
        @mouseover="startCounter(10)"
        @mouseleave="endCounter">
        <div
          id="covfefe"
          class="graphicInner">
          <img src="~/assets/images/connect/kawffeeh.svg">
          <p class="statisticText">{{ statCount }}</p>
          <p class="statisticSubText">coffees per day</p>
        </div>
      </div>
      <div class="graphic" >
        <div
          id="icons"
          class="graphicInnerI">
          <div class="graphicIcon">
            <div
              id="icon1"
              class="graphicIconI"
              @mouseover="startCounter(commits)"
              @mouseleave="endCounter">
              <svg
                width="64"
                height="64"
                class="octicon octicon-git-branch"
                viewBox="0 0 10 16"
                version="1.1"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>
              </svg>
              <p class="statisticTextS">{{ statCount }}</p>
              <p class="statisticSubTextS">commits</p>
            </div>
          </div>
          <div class="graphicIcon">
            <div
              id="icon2"
              class="graphicIconI"
              @mouseover="startCounter(repos)"
              @mouseleave="endCounter">
              <img
                id="gitlabBlack"
                src="~/assets/images/connect/gitlab.svg">
              <p class="statisticTextS">{{ statCount }}</p>
              <p class="statisticSubTextS">repos</p>
            </div>
          </div>
          <div class="graphicIcon">
            <div
              id="icon3"
              class="graphicIconI"
              @mouseover="startCounter(size)"
              @mouseleave="endCounter">
              <img src="~/assets/images/connect/code_lines.svg">
              <p class="statisticTextS">{{ statCount }}mb</p>
              <p class="statisticSubTextS">in our codebase</p>
            </div>
          </div>
          <div class="graphicIcon">
            <div
              id="icon4"
              class="graphicIconI">
              d
            </div>
          </div>
        </div>
      </div>
      <div
        id="moreStuff"
        class="graphic">
        <div class="graphicInner">
          More stuff here.
        </div>
      </div>
    </div>
    <SLink
      id="graphicLeft"
      class="arrow"
      @click="graphicLeft">
      ←
    </SLink>
    <SLink
      id="graphicRight"
      class="arrow"
      @click="graphicRight">
      →
    </SLink>
  </div>
</template>

<script>
import SLink from "../Link.vue"
export default {
  components: {
    SLink
  },
  data() {
    this.getRepos()
    this.getCommitsAndSize()

    return {
      statCount: 0,
      repos: 0,
      commits: 0,
      size: 30,
      scroll: 0,
      scrollDelta: 0
    }
  },
  mounted() {
    this.scrollDelta = this.$refs.graphics.clientWidth / 2
  },
  methods: {
    startCounter(max) {
      clearInterval(this.counter)

      if (this.reset) {
        this.reset = false
        this.statCount = 0
      }
      let counter = setInterval(() => {
        if (this.statCount >= max) return clearInterval(counter)
        else this.statCount += max > 100 ? 10 : 1
      }, 500 / max)
      this.counter = counter
    },
    endCounter() {
      this.reset = true
    },
    getRepos() {
      this.$http.get("https://api.github.com/users/squaredlabs").then(
        response => {
          this.repos = response.body.public_repos
        },
        response => {
          this.repos = 5
        }
      )
    },
    getCommitsAndSize() {
      this.$http.get("https://api.github.com/orgs/squaredlabs/repos").then(
        response => {
          for (let repo of response.body) {
            this.size += repo.size / 1000
            this.getCommitsPerRepo(repo.url)
          }
        },
        response => {
          console.error(
            `Could not load https://api.github.com/orgs/squaredlabs/repos: ${JSON.stringify(
              response
            )}`
          )
          this.commits = 1351
        }
      )
    },
    getCommitsPerRepo(url) {
      this.$http.get(url + "/stats/participation").then(
        response => {
          this.commits += response.body.all.reduce((a, b) => a + b, 0)
        },
        response => {
          this.commits += 15
          console.error(
            `Could not load ${url + "/stats/participation"}: ${JSON.stringify(
              response
            )}`
          )
        }
      )
    },
    getSize() {
      this.$http.get("https://api.github.com/orgs/squaredlabs/repos").then(
        response => {
          this.repos = response.body.public_repos
        },
        response => {
          this.repos = 5
          console.error(
            `Could not load https://api.github.com/orgs/squaredlabs/repos: ${JSON.stringify(
              response
            )}`
          )
        }
      )
    },
    count_reset() {
      clearInterval(this.counter)
      this.pixelsPerDay = 0
    },
    graphicLeft() {
      if (this.scroll < this.scrollDelta) return
      this.scroll = this.scroll - this.scrollDelta
    },
    graphicRight() {
      let width = this.$refs.graphics.scrollWidth
      if (this.scroll > width - width / 2) return
      this.scroll = this.scroll + this.scrollDelta
    },
    getTransform() {
      let val = `translateX(${-this.scroll}px);`
      return val
    }
  }
}
</script>

<style>
html,
body {
  overflow-x: hidden;
}
</style>


<style lang="scss" scoped>
@import "~assets/styles/vars";
#graphics {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  overflow-x: visible;
  transition: all 0.3s ease;
}
#graphicLeft {
  position: absolute;
  top: 35%;
  left: 10px;
}
#graphicRight {
  position: absolute;
  top: 35%;
  right: 10px;
}
.graphic {
  flex: 0 0 300px;
  height: 300px;
  margin: 10px;
  position: relative;
}
.graphicInner {
  display: flex;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  overflow-y: hidden;
}
.graphicInner:hover {
  width: 100%;
  height: 100%;
}
#pixelsPerDay {
  font-family: "SpaceMono";
  flex-direction: column;
  align-items: center;
  background-color: white;
}
#pixelsPerDay img {
  transform: translateY(50%);
  transition: 0.3s ease-in-out;
  margin: 0;
  padding: 2em;
}
.statisticText {
  transform: translateY(300px);
  transition: 0.3s ease-in-out;
  margin: 0;
  color: $rouge-40;
  font-size: 4em;
  font-weight: bold;
  opacity: 0;
}
.statisticSubText {
  transform: translateY(300px);
  transition: 0.3s ease-in-out;
  font-size: 1.5em;
  color: $onyx;
  opacity: 0;
}
#pixelsPerDay:hover * {
  transform: none;
  opacity: 1;
}
#covfefe {
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
  flex-direction: column;
  background-color: white;
}
#covfefe img {
  transform: translateY(10%);
  transition: 0.3s ease-in-out;
  margin: 0;
  padding: 2em;
}
#covfefe:hover * {
  transform: none;
  opacity: 1;
}
/*Smaller icons*/
.graphicInnerI {
  width: 100%;
  height: 100%;
  display: flex;
}
#icons {
  flex-wrap: wrap;
  justify-content: left;
  align-items: flex-end;
}
.graphicIcon {
  flex: 0 0 50%;
  height: 50%;
  position: relative;
}
.graphicIconI {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s ease-in-out;
  background-color: white;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  overflow-y: hidden;
}
.graphicIconI svg,
img {
  transform: translateY(30%);
  transition: 0.3s ease-in-out;
}
.graphicIconI:hover * {
  transform: none;
  opacity: 1;
}
.statisticTextS {
  transform: translateY(150px);
  transition: 0.3s ease-in-out;
  margin: 0.1em;
  color: $rouge-40;
  font-size: 1.25em;
  font-weight: bold;
  opacity: 0;
}
.statisticSubTextS {
  transform: translateY(150px);
  transition: 0.3s ease-in-out;
  font-size: 1em;
  color: $onyx;
  margin: 0.1em;
  opacity: 0;
}
#icon1 {
  top: 0;
  right: 0;
  margin-right: 10px;
}
#icon2 {
  top: 0;
  left: 0;
  margin-left: 10px;
}
#icon3 {
  bottom: 0;
  right: 0;
  margin-right: 10px;
}
#icon4 {
  bottom: 0;
  left: 0;
  margin-left: 10px;
}
.graphicIcon:hover .graphicIconI {
  width: 100%;
  height: 100%;
}
.graphicIcon fill {
  color: black;
}
#gitlabBlack {
  filter: grayscale(100%);
}
</style>
