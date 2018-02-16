<template>
  <!-- <section>
    <construction msg="PROJECTS" height="100vh" />
  </section> -->
  <div>
    <section>
      <img src="https://picsum.photos/1920/445" style="width: calc(100% + 40px); height:440px; margin-left: -20px;" />
    </section>
    <section style="margin-top: -300px; margin-bottom: 300px">
      <quad-layout text="projects">
        <div class="quad__col" style="margin-top: -80px">
          <div style="background: white; padding: 20px">
            <p>We build websites that support UConn research.  All of our projects are presently conceived of internally.  Eventually we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
          </div>
        </div>
        <div class="quad__col">
          <project-card class="quad__col" name="Innovation Portal" background="../images/ip.png" link="/projects">
            <p>A short, fun description.</p>
          </project-card>
        </div>  
      </quad-layout>
      </section>
  </div>
</template>

<script>
import Construction from "../components/Construction.vue";
import QuadLayout from "../components/QuadLayout.vue";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: {
    Construction,
    QuadLayout,
    ProjectCard
  }
};
</script>