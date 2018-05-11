<template>
  <div>
    <section>
      <layout>
        <construction
          class="marginned--horizontally"
          style="width: 100%"
          msg="This space will have something really cool here eventually!"
          height="80vh" />
      </layout>
    </section>
    <section>
      <layout
        style="margin-top:80px"
        text="projects"
        padding-top="110px">
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best
            <SLink
              text="students"
              font-size="16px"
              link_ref="/people"/>, we build cutting-edge
            <SLink
              text="websites"
              font-size="16px"
              link_ref="/projects"/> that support UConn’s world-class research infrastructure.</p>
          <p>View our history, purpose, and space on the
            <SLink
              text="lab page"
              font-size="16px"
              link_ref="/lab"/>.</p>
        </div>
        <project-card
          :background="require('~/assets/images/projects/ip.png')"
          class="layout__col--quarter marginned--horizontally"
          name="Innovation Portal"
          link="/projects">
          <p>A short, fun description.</p>
        </project-card>
        <project-card
          :background="require('~/assets/images/projects/lincus.png')"
          class="layout__col--quarter marginned--horizontally"
          name="Lincus"
          link="/projects" />
        <project-card
          :background="require('~/assets/images/projects/huskytrails.png')"
          class="layout__col--quarter marginned--horizontally"
          name="GrantTrails"
          link="/projects" />
      </layout>
      <layout>
        <SLink
          class="link--pulled-right"
          text="See all our projects"
          font-size="16px"
          link_ref="/projects"/>
      </layout>
    </section>
    <section>
      <layout text="workshops">
        <div class="layout__col--pacman padded">
          <workshop-card
            :technologies="['https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png', 'http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png']"
            name="Workshop Name"
            time="13:00-17:00"
            date="Jan 1, 2018"
            address-top="1 Bishop Circle"
            address-bottom="Storrs CT 06269"
            description="Any other relevant text can go here. Now it’s longer though, which is pretty neat. You can talk about the workshop now."
            registration-link="http://google.com" />
        </div>
        <div
          class="layout__col--quarter padded"
          style="margin-top: 80px">
          <p>Learning from others and sharing what we know is central to the ⬚² labs philosophy. We see workshops as an opportunity to do both (in addition to getting to know the UConn web development community).</p>
          <p>Our workshops are open to all members of the UConn community, for free.</p>
          <SLink
            text="View all workshops"
            font-size="16px"
            link_ref="/workshops"/>
        </div>
      </layout>
    </section>
    <section style="padding-top: 6em">
      <layout>
        <SLink
          class="link--pulled-right"
          text="Meet the team"
          font-size="16px"
          link_ref="/people"/>
      </layout>
      <layout>
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>⬚² labs team members are a stellar group who share a passion for building beautiful, functional websites.</p>
          <p>We are always looking for talented and hard-working students to join our ranks. We look for students with a track record of building cool stuff in their spare time, web experience, and a passion for innovation and creation. If that sounds like you,
            <SLink
              text="get in touch!"
              font-size="16px"
              link_ref="/connect"/>
          </p>
        </div>
        <person-card
          :background="require('~/assets/images/people/dan.jpg')"
          class="layout__col--quarter marginned--horizontally"
          name="Dan Schwartz"
          role="Director">
          <p>“Take life (and everything) with a grain of salt.”</p>
        </person-card>
        <person-card
          :background="require('~/assets/images/people/dan.jpg')"
          class="layout__col--quarter marginned--horizontally"
          name="Dan Schwartz"
          role="Director">
          <p>“Take life (and everything) with a grain of salt.”</p>
        </person-card>
        <person-card
          :background="require('~/assets/images/people/dan.jpg')"
          class="layout__col--quarter marginned--horizontally"
          name="Dan Schwartz"
          role="Director">
          <p>“Take life (and everything) with a grain of salt.”</p>
        </person-card>
      </layout>
    </section>
    <section>
      <layout style="margin-top: 260px">
        <connect-card
          :background="require('~/assets/images/connect/gitlab.svg')"
          class="layout__col--quarter marginned--horizontally"
          link="https://gitlab.com/squared-labs" />
        <connect-card
          :background="require('~/assets/images/connect/mail.svg')"
          :hidden-image="require('~/assets/images/connect/contact.png')"
          class="layout__col--quarter marginned--horizontally" />
        <connect-card
          :background="require('~/assets/images/connect/btc.svg') "
          class="layout__col--quarter marginned--horizontally"
          link="http://www.foundation.uconn.edu/send-your-gift/" />
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>If you like what you see here and want to offer support, or get involved as something other than a member of ⬚² labs, we would love to hear from you! From workshops, to open source contributions, to donations, there are plenty ways to become a part of what we do. </p>
          <SLink
            text="Connect with us"
            font-size="16px"
            link_ref="/connect"/>
        </div>
      </layout>
    </section>
  </div>
</template>

<script>
import IP from "~/assets/images/projects/ip.png"
import Lincus from "~/assets/images/projects/lincus.png"
import GrantTrails from "~/assets/images/projects/huskytrails.png"
import Dan from "~/assets/images/people/dan.jpg"
import Gitlab from "~/assets/images/connect/gitlab.svg"
import Mail from "~/assets/images/connect/mail.svg"
import BTC from "~/assets/images/connect/btc.svg"
import Contact from "~/assets/images/connect/contact.png"
import Construction from "../components/Construction.vue"
import Layout from "../components/Layout.vue"
import ProjectCard from "../components/ProjectCard.vue"
import WorkshopCard from "../components/WorkshopCard.vue"
import PersonCard from "../components/PersonCard.vue"
import ConnectCard from "../components/ConnectCard.vue"
import SLink from "../components/Link.vue"

export default {
  components: {
    Layout,
    Construction,
    ProjectCard,
    WorkshopCard,
    ConnectCard,
    PersonCard,
    SLink
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

section {
  margin-bottom: 80px;
}

.link--pulled-right {
  margin: 20px;
  margin-left: auto;
}
</style>
