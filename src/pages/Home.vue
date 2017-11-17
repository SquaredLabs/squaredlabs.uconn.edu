<template>
    <div>
        <section>
            <construction msg="This space will have something really cool here eventually!" height="80vh" />
        </section>
        <section>
          <quad-layout style="margin-top:80px">
              <div class="quad__col" style="position: relative; top: -80px">
                  <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best students, we build cutting-edge websites that support UConn’s world-class research infrastructure. View our history, purpose, and space on the lab page.</p>
              </div>
              <project-card class="quad__col" name="Innovation Portal" background="../images/ip.png" />
              <project-card class="quad__col" name="Lincus" background="../images/lincus.png" />
              <project-card class="quad__col" name="GrantTrails" background="../images/huskytrails.png" />
          </quad-layout>
        </section>
        <section>
          <quad-layout>
            <div class="quad__triple_col">
              <workshop-card 
                name="Workshop Name"
                time="13:00-17:00" 
                date="Jan 1, 2018" 
                addressTop="1 Bishop Circle" 
                addressBottom="Storrs CT 06269"
                description="Any other relevant text can go here. Now it’s longer though, which is pretty neat. You can talk about the workshop now."
                :technologies="['https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png', 'http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png']"
                registration-link="http://google.com"
              />
            </div>
            <div class="quad__col" style="margin-top: 80px">
              <p>Learning from others and sharing what we know is central to the ⬚² labs philosophy.  We see workshops as an opportunity to do both (in addition to getting to know the UConn web development community).</p>
              <p>Our workshops are open to all members of the UConn community, for free.</p>
            </div>
          </quad-layout>
        </section>
        <section>
          <construction msg="Not sure what we're doing with the blog yet!" height="40vh" />
        </section>
    </div>
</template>

<script>
import IP from "../images/projects/ip.png";
import Lincus from "../images/projects/lincus.png";
import GrantTrails from "../images/projects/huskytrails.png";
import Construction from "../components/Construction.vue";
import QuadLayout from "../components/QuadLayout.vue";
import ProjectCard from "../components/ProjectCard.vue";
import WorkshopCard from "../components/WorkshopCard.vue";

export default {
  components: {
    QuadLayout,
    ProjectCard,
    Construction,
    WorkshopCard
  }
};
</script>

<style scoped lang="scss">
@import "../styles/vars";

section {
  margin-bottom: 80px;
}
</style>