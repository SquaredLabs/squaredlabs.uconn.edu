<template>
  <div>
    <section
      id="jumbotron"
      style="margin-bottom: 100px">
      <img
        class="img--fill-container"
        src="https://picsum.photos/1920/445"
        style="height:440px" >
      <layout style="margin-top: -300px">
        <layout-col m="horizontal">
          <div
            id="white-box"
            style="background: white; margin-top: -80px"
            class="padded">
            <p>We build websites that support UConn research. All of our projects are presently conceived of internally. Eventually we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
          </div>
          <div
            id="project-details"
            style="margin-top: 200px">
            <b>Hovered Project Name</b>
            <p>Client Name</p>
            <p>January - August 2017</p>
            <mini-person-card
              v-for="x in 5"
              :key="x"
              name="Raymond Baldwin"
              icon="https://picsum.photos/80/80"
              position="Project Manager" />
          </div>
        </layout-col>
        <layout-col s="pacman">
          <layout
            v-for="x in 3"
            :key="x"
            style="padding-bottom: 20px">
            <project-card
              :background="require('~/assets/images/projects/ip.png')"
              class="layout__col--third marginned--horizontally"
              name="Innovation Portal"
              link="/projects">
              <p>A short, fun description.</p>
            </project-card>
            <project-card
              :background="require('~/assets/images/projects/ip.png')"
              class="layout__col--third marginned--horizontally"
              name="Innovation Portal"
              link="/projects">
              <p>A short, fun description.</p>
            </project-card>
            <project-card
              :background="require('~/assets/images/projects/ip.png')"
              class="layout__col--third marginned--horizontally"
              name="Innovation Portal"
              link="/projects">
              <p>A short, fun description.</p>
            </project-card>
          </layout>
        </layout-col>
      </layout>
    </section>

    <section id="1">
      <layout>
        <layout-col m="horizontal">
          <h1 class="number">01</h1>
        </layout-col>
        <layout-col
          s="pacman"
          m="horizontal">
          <layout
            id="assess"
            class="marginned--vertically--6x">
            <layout-col
              s="half"
              style="padding-right: 20px">
              <p>You wouldn’t build a building without architectural drawings. We don’t build websites without spending a considerable amount of time on design, ensuring that every choice contributes to crafting the most effective solution.</p>
            </layout-col>
            <layout-col s="half">
              <layout vertical="true">
                <layout-col
                  s="whole"
                  m="vertical">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/360/100" >
                </layout-col>
                <layout-col s="whole">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/360/100" >
                </layout-col>
              </layout>
            </layout-col>
          </layout>
          <layout
            id="question"
            vertical="true"
            class="marginned--vertically--6x">
            <!-- 25vw to constrain text length -->
            <layout-col style="width: 25vw">
              <p>We believe that thoughtfully discussing, debating, and documenting all decisions (sometimes quite heatedly!) early on pays dividends later.</p>
            </layout-col>
            <layout-col s="whole">
              <img
                class="img--fill-container"
                style="width: calc(100% + 20px)"
                src="https://picsum.photos/760/100" >
            </layout-col>
          </layout>
          <layout id="plan">
            <layout-col style="margin-top: 40px;">
              <p>We lay out every pattern and convention, ensuring continuity throughout the project from the get-go. Color palette, wireframes, stack choice, database architecture, timeline — you name it — it’s vetted for consistency with the overall project goals.</p>
            </layout-col>
            <layout-col s="pacman">
              <layout>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
              </layout>
              <layout>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
              </layout>
            </layout-col>
          </layout>
        </layout-col>
      </layout>
    </section>

    <section
      id="separator-image"
      style="position: relative; margin-bottom: 80px">
      <img
        class="img--fill-container"
        style="height:460px"
        src="https://picsum.photos/1024/460" >
      <p style="color: white; position: relative; top: -460px; left: calc(20px + 26vw); width: 20vw;">We’ve also given quite a bit of thought to the design of our shared workspace.</p>
    </section>

    <section id="2">
      <layout>
        <layout-col m="horizontal">
          <h1 class="number">02</h1>
        </layout-col>
        <layout-col
          s="pacman"
          m="horizontal">
          <layout
            id="intiate"
            vertical="true"
            class="marginned--vertically--6x">
            <layout-col
              s="whole"
              m="vertical">
              <layout>
                <layout-col s="pacman">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/480/100" >
                </layout-col>
                <layout-col style="margin-left: 20px">
                  <img
                    class="img--fill-container"
                    style="width: calc(100% + 20px)"
                    src="https://picsum.photos/250/100" >
                </layout-col>
              </layout>
            </layout-col>
            <layout-col s="whole">
              <layout>
                <layout-col style="margin-right: 20px">
                  <p>Where our designs slowly transform into reality. We see it as a highly iterative, dynamic, catalogued, and collaborative process, where everyone learns from everyone else.</p>
                </layout-col>
                <layout-col s="pacman">
                  <img
                    class="img--fill-container"
                    style="width: calc(100% + 20px)"
                    src="https://picsum.photos/500/100" >
                </layout-col>>
              </layout>
            </layout-col>
          </layout>
          <layout
            id="refine"
            vertical="true"
            class="marginned--vertically--6x">
            <layout-col
              s="pacman"
              style="width: 50vw">
              <p>We strongly believe that there’s always room for our development processes to improve. Always.</p>
            </layout-col>
            <layout-col s="whole">
              <img
                class="img--fill-container"
                style="width: calc(100% + 20px)"
                src="https://picsum.photos/760/100" >
            </layout-col>
            <layout-col
              s="pacman"
              style="width: 50vw">
              <p>We’re presently using scrum to manage our projects (or at least our own hacked version of it ;). Courtney keeps everyone in line.</p>
            </layout-col>
          </layout>
          <layout
            id="collaborate"
            class="marginned--vertically">
            <layout-col s="quarter">
              <p>Finally, we think of “develop” not just in a software sense but also in a personal development sense. The mission of squared labs is very much one of learning where team members can develop skills that we hope will serve them well beyond UConn.</p>
            </layout-col>
            <layout-col s="pacman">
              <layout>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>>
              </layout>
              <layout>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
                <layout-col
                  s="half"
                  p="true">
                  <img
                    class="img--fill-container"
                    src="https://picsum.photos/231/100">
                </layout-col>
              </layout>
            </layout-col>
          </layout>
        </layout-col>
      </layout>
    </section>
  </div>
</template>

<script>
import Construction from "../components/Construction.vue"
import Layout from "../components/Layout.vue"
import LayoutCol from "../components/LayoutCol.vue"
import ProjectCard from "../components/ProjectCard.vue"
import MiniPersonCard from "../components/MiniPersonCard.vue"

export default {
  components: {
    Construction,
    Layout,
    LayoutCol,
    ProjectCard,
    MiniPersonCard
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

.number {
  height: 93px;
  font-family: SpaceMono;
  font-size: 143px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  padding-top: 40px;
  text-decoration: underline;
  text-decoration-color: $rouge-40;
}

.design {
  transform: rotate(-90deg);
  font-family: SpaceMono;
  font-size: 205px;
  font-weight: normal;
  line-height: normal;
  text-align: right;
  color: $dodger-blue;
  margin: 0;
}

.img--fill-container {
  width: 100%;
  height: 100%;
}

.marginned--vertically--6x {
  margin-bottom: 120px;
}
</style>
