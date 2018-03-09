<template>
  <div>
    <section>
      <img src="https://picsum.photos/1920/445" style="width: 100%; height:440px;" />
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
          <layout style="padding-bottom: 80px">
            <div class="layout__col--half">
              <p>You wouldn’t build a building without architectural drawings.  We don’t build websites without spending a considerable amount of time on design, ensuring that every choice contributes to crafting the most effective solution.</p>
            </div>
            <div class="layout__col--half">
              <img src="https://picsum.photos/360/100" style="padding-bottom: 20px;" />
              <img src="https://picsum.photos/360/100" />
            </div>
          </layout>
          <layout vertical="true" style="padding-bottom: 80px">
            <div class="layout__col--quarter" style="width: 25vw">
              <p>We believe that thoughtfully discussing, debating, and documenting all decisions (sometimes quite heatedly!) early on pays dividends later.</p>
            </div>
            <div class="layout__col--whole">
              <img style="width: calc(100% + 40px)" src="https://picsum.photos/760/100" />
            </div>
          </layout>
          <layout style="padding-bottom: 80px">
            <div class="layout__col--third">
              <p>We lay out every pattern and convention, ensuring continuity throughout the project from the get-go. Color palette, wireframes, stack choice, database architecture, timeline — you name it — it’s vetted for consistency with the overall project goals.</p>
            </div>
            <div class="layout__col--third">
              <img src="https://picsum.photos/230/100" style="padding-bottom: 20px;" />
              <img src="https://picsum.photos/230/100" />
            </div>
            <div class="layout__col--third">
              <img src="https://picsum.photos/230/100" style="padding-bottom: 20px;" />
              <img src="https://picsum.photos/230/100" />
            </div>
          </layout>
        </div>
      </layout>
    </section>
    <section>
      <layout style="width: 100%;">
        <img src="https://picsum.photos/1024/760" />
      </layout>
    </section>
    <section style="margin-top: 100px">
      <layout>
         <div class="layout__col--quarter">
          <h1 class="number">02</h1>
        </div>
        <div class="layout__col--triple">
          <layout vertical="true" style="margin-bottom: 20px">
            <div class="layout__col--whole" style="width: 100%">
              <layout>
                <div class="layout__col--triple" style="margin-left: 0; margin-right: 20px">
                  <img src="https://picsum.photos/480/100" style="height: 100px;" />
                </div>
                <div class="layout__col--quarter" style="margin-right: 0">
                  <img src="https://picsum.photos/250/100" style="height: 100px;" />
                </div>
              </layout>
              <layout style="margin-top: 20px">  
                <div class="layout__col--quarter" style="width: 25%">
                  <p>Where our designs slowly transform into reality. We see it as a highly iterative, dynamic, catalogued, and collaborative process, where everyone learns from everyone else.</p>
                </div>
                <div class="layout__col--triple" style="width: 100%; margin-right: 0">
                    <img src="https://picsum.photos/500/100" />
                </div>
              </layout>
            </div>
          </layout>
          <layout vertical="true">
            <div class="layout__col--whole" style="width: 50%">
              <p>We strongly believe that there’s always room for our development processes to improve. Always.</p>
            </div>
            <div class="layout__col--whole">
                <img src="https://picsum.photos/500/100" style="margin-right: 0" />
            </div>
            <div class="layout__col--whole" style="width: 50%">
              <p>We’re presently using scrum to manage our projects (or at least our own hacked version of it ;). Courtney keeps everyone in line.</p>
            </div>
          </layout>
        </div>
      </layout>
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

.layout img {
  width: 100%;
}
</style>