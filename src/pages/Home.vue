<template>
    <div>
        <section>
            <construction msg="This space will have something really cool here eventually!" height="80vh" />
        </section>
        <section>
          <quad-layout style="margin-top:80px" text="projects" padding-top="110px">
              <div class="quad__col" style="position: relative; top: -80px">
                  <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best <router-link class="link--highlighted" to="/people" >students</router-link>, we build cutting-edge <router-link class="link--highlighted" to="/projects" >websites</router-link> that support UConn’s world-class research infrastructure.</p>
                  <p>View our history, purpose, and space on the <router-link class="link--highlighted" to="/lab" >lab page</router-link>.</p>
              </div>
              <project-card class="quad__col" name="Innovation Portal" background="../images/ip.png" link="/projects">
                <p>A short, fun description.</p>
              </project-card>
              <project-card class="quad__col" name="Lincus" background="../images/lincus.png" link="/projects" />
              <project-card class="quad__col" name="GrantTrails" background="../images/huskytrails.png" link="/projects" />
              <p class="quad__bg-text" style="padding-top: 110px">projects</p>
          </quad-layout>
          <div class="flex-layout">
            <router-link class="link--highlighted link--pulled-right" to="/projects">See all our projects →</router-link>
          </div>
        </section>
        <section>
          <quad-layout text="workshops">
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
              <router-link class="link--highlighted" to="/workshops">View all workshops →</router-link>
            </div>
            <p class="quad__bg-text" style="padding-top: 310px">workshops</p>
          </quad-layout>
        </section>
        <!-- <section>
          <construction msg="Not sure what we're doing with the blog yet!" height="40vh" style="margin-top: 160px" />
        </section> -->
         <section style="padding-top: 6em">
          <div class="flex-layout">
              <router-link class="link--highlighted link--pulled-right" to="/people">Meet the team →</router-link>
          </div>
          <quad-layout>
              <div class="quad__col" style="position: relative; top: -80px">
                  <p>⬚² labs team members are a stellar group who share a passion for building beautiful, functional websites.</p>
                  <p>We are always looking for talented and hard-working students to join our ranks. We look for students with a track record of building cool stuff in their spare time, web experience, and a passion for innovation and creation. If that sounds like you, <router-link class="link--highlighted" to="/connect">get in touch!</router-link></p>
              </div>
              <person-card class="quad__col" name="Dan Schwartz" role="Director" background="../images/dan.jpg">
                <p>“Take life (and everything) with a grain of salt.”</p>
              </person-card>
              <person-card class="quad__col" name="Dan Schwartz" role="Director" background="../images/dan.jpg">
                <p>“Take life (and everything) with a grain of salt.”</p>
              </person-card>
              <person-card class="quad__col" name="Dan Schwartz" role="Director" background="../images/dan.jpg">
                <p>“Take life (and everything) with a grain of salt.”</p>
              </person-card>
              <p class="quad__bg-text" style="margin-top: -20px">people</p>
          </quad-layout>
        </section>
         <section>
          <quad-layout style="margin-top: 260px">
              <connect-card class="quad__col" link="https://gitlab.com/squared-labs" background="../images/gitlab.svg" />
              <connect-card class="quad__col" background="../images/mail.svg" hidden-image="../images/contact.png" />
              <connect-card class="quad__col" link="http://www.foundation.uconn.edu/send-your-gift/" background="../images/btc.svg" />
               <div class="quad__col" style="position: relative; top: -80px">
                  <p>If you like what you see here and want to offer support, or get involved as something other than a member of ⬚² labs, we would love to hear from you! From workshops, to open source contributions, to donations, there are plenty ways to become a part of what we do. </p>
                  <router-link class="link--highlighted" to="/connect">Connect with us →</router-link>
              </div>
              <p class="quad__bg-text" style="margin-top: -20px">connect</p>
          </quad-layout>
        </section>
    </div>
</template>

<script>
import IP from "../images/projects/ip.png";
import Lincus from "../images/projects/lincus.png";
import GrantTrails from "../images/projects/huskytrails.png";
import Dan from "../images/people/dan.jpg";
import Gitlab from "../images/connect/gitlab.svg";
import Mail from "../images/connect/mail.svg";
import BTC from "../images/connect/btc.svg";
import Contact from "../images/connect/contact.png";
import Construction from "../components/Construction.vue";
import QuadLayout from "../components/QuadLayout.vue";
import ProjectCard from "../components/ProjectCard.vue";
import WorkshopCard from "../components/WorkshopCard.vue";
import PersonCard from "../components/PersonCard.vue";
import ConnectCard from "../components/ConnectCard.vue";

export default {
  components: {
    QuadLayout,
    Construction,
    ProjectCard,
    WorkshopCard,
    ConnectCard,
    PersonCard
  }
};
</script>

<style scoped lang="scss">
@import "../styles/vars";

section {
  margin-bottom: 80px;
}

.link--pulled-right {
  margin: 20px;
  margin-left: auto;
}
</style>