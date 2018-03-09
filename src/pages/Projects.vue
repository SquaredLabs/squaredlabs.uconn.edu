<template>
  <div>
    <section>
      <img src="https://picsum.photos/1920/445" style="width: calc(100% + 40px); height:440px; margin-left: -20px;" />
      <quad-layout text="projects" style="margin-top: -300px">
        <div class="quad__col">
          <div style="background: white; padding: 20px; margin-top: -80px">
            <p>We build websites that support UConn research.  All of our projects are presently conceived of internally.  Eventually we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
          </div>
          <div style="margin-top: 200px">
            <b>Hovered Project Name</b>
            <p>Client Name</p>
            <p>January - August 2017</p>
            <mini-person-card v-for="x in 5" :key="x" name="Raymond Baldwin" icon="https://picsum.photos/80/80" position="Project Manager" />
          </div>
        </div>
        <div class="quad__triple_col" style="margin-top: 30px">
          <triple-layout v-for="x in 3" :key="x" style="padding-bottom: 20px">
            <project-card class="triple__col" name="Innovation Portal" background="../images/ip.png" link="/projects">
              <p>A short, fun description.</p>
            </project-card>
            <project-card class="triple__col" name="Innovation Portal" background="../images/ip.png" link="/projects">
              <p>A short, fun description.</p>
            </project-card>
            <project-card class="triple__col" name="Innovation Portal" background="../images/ip.png" link="/projects">
              <p>A short, fun description.</p>
            </project-card>
          </triple-layout>
        </div>  
      </quad-layout>
    </section>
    <section style="padding-top: 100px">
      <layout>
        <div class="layout__col--quarter">
          <h1 class="number">01</h1>
        </div>
        <div class="layout__col--triple">
          <layout>
            <div class="layout__col--half">
              <p>You wouldn’t build a building without architectural drawings.  We don’t build websites without spending a considerable amount of time on design, ensuring that every choice contributes to crafting the most effective solution.</p>
            </div>
            <div class="layout__col--half">
              <img src="https://picsum.photos/360/100" style="padding-bottom: 20px;" />
              <img src="https://picsum.photos/360/100" />
            </div>
          </layout>
        </div>
      </layout>
      <br />
      <quad-layout>
        <div class="quad__col">
          <h1 class="number">01</h1>
          <!-- <h1 class="design">design</h1> -->
        </div>
        <div class="quad__triple_col">
          <dual-layout>
              <div class="dual__col">
                <p>You wouldn’t build a building without architectural drawings.  We don’t build websites without spending a considerable amount of time on design, ensuring that every choice contributes to crafting the most effective solution.</p>
              </div>
              <div class="dual__col">
                <img src="https://picsum.photos/360/100" style="padding-bottom: 20px;" />
                <img src="https://picsum.photos/360/100" />
              </div>
              <p class="dual__bg-text" style="margin-top: -20px; padding-right: calc(30%);">assess</p>
          </dual-layout>
          <!-- <div style="width: 360px; margin: 20px;">
            <p>We believe that thoughtfully discussing, debating, and documenting all decisions (sometimes quite heatedly!) early on pays dividends later.</p>
            <p class="quad__bg-text" style="margin-top: -20px; padding-right: calc(30%);">question</p>
          </div> -->
        </div>
      </quad-layout>
    </section>
  </div>
</template>

<script>
import Construction from "../components/Construction.vue";
import QuadLayout from "../components/QuadLayout.vue";
import TripleLayout from "../components/TripleLayout.vue";
import DualLayout from "../components/DualLayout.vue";
import Layout from "../components/Layout.vue";
import ProjectCard from "../components/ProjectCard.vue";
import MiniPersonCard from "../components/MiniPersonCard.vue";

export default {
  components: {
    Construction,
    QuadLayout,
    TripleLayout,
    DualLayout,
    Layout,
    ProjectCard,
    MiniPersonCard
  }
};
</script>

<style scoped lang="scss">
@import "../styles/vars";

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
</style>