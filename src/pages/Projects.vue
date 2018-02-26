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
  </div>
</template>

<script>
import Construction from "../components/Construction.vue";
import QuadLayout from "../components/QuadLayout.vue";
import TripleLayout from "../components/TripleLayout.vue";
import ProjectCard from "../components/ProjectCard.vue";
import MiniPersonCard from "../components/MiniPersonCard.vue";

export default {
  components: {
    Construction,
    QuadLayout,
    TripleLayout,
    ProjectCard,
    MiniPersonCard
  }
};
</script>